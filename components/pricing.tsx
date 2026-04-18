import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Get started with basic tracking features",
    features: [
      "GPS track recording",
      "Up to 5 tracks per month",
      "Basic session feedback",
      "Map overview",
      "1 dog profile",
    ],
    cta: "Get Started",
    href: "#download",
    popular: false,
  },
  {
    name: "Pro",
    price: "9.99",
    period: "/month",
    description: "Everything you need for serious training",
    features: [
      "Unlimited track recording",
      "Advanced performance analytics",
      "Detailed session feedback & notes",
      "Export tracks & statistics",
      "Unlimited dog profiles",
      "Priority support",
      "Training history & trends",
    ],
    cta: "Start Free Trial",
    href: "#download",
    popular: true,
  },
  {
    name: "Team",
    price: "24.99",
    period: "/month",
    description: "For clubs and professional trainers",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Shared training sessions",
      "Team analytics dashboard",
      "Role-based access",
      "Dedicated support",
      "Custom branding",
    ],
    cta: "Contact Us",
    href: "mailto:hello@trackfellow.com",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
            Pricing
          </Badge>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-foreground text-balance"
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Choose the plan that fits your training needs. Upgrade or downgrade anytime.
          </p>
        </header>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular
                  ? "border-primary shadow-md ring-2 ring-primary/20"
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <h3 className="text-xl font-outfit font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.description}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3" aria-label={`${plan.name} plan features`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
