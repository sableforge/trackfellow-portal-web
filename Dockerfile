# Stage 1: Install dependencies
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Enable corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@9 --activate

# Copy manifests
COPY package.json pnpm-lock.yaml ./

# Configure pnpm to handle side-effects automatically in non-interactive CI environments
RUN pnpm config set supportedArchitectures.os ["linux"] && \
    pnpm config set supportedArchitectures.cpu ["x64"]

# Install production + dev dependencies (needed for build)
RUN pnpm install --frozen-lockfile

# Stage 2: Build the application
FROM node:22-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9 --activate

# Bring over installed dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy the entire source tree explicitly
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# BYPASS "pnpm run" to directly trigger the compiler, avoiding the pnpm bug
RUN ./node_modules/.bin/next build

# Stage 3: Production runtime
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the standalone output and required static assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]