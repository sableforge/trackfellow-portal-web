// ---------------------------------------------------------------------------
// TrackFellow – Mock dashboard data
// Used while the backend is not connected. Mirrors the real data shape.
// ---------------------------------------------------------------------------

export type Dog = {
  id: string
  name: string
  breed: string
  age: number // years
  photoUrl: string
  totalSessions: number
  totalDistanceKm: number
  avgScorePercent: number
  rank: number // global leaderboard rank
}

export type Session = {
  id: string
  dogId: string
  date: string // ISO
  durationMin: number
  distanceKm: number
  articlesFound: number
  articlesTotal: number
  scorePercent: number
  terrain: "Urban" | "Forest" | "Field" | "Mixed"
  conditions: "Day" | "Night" | "Rain" | "Fog"
  notes: string
}

export type PerformancePoint = {
  month: string // "Jan", "Feb" …
  accuracy: number // 0-100
  speed: number // avg km/h × 10 so it renders nicely on the chart
  articles: number // articles found that month
}

export type LeaderboardEntry = {
  rank: number
  handlerName: string
  dogName: string
  country: string
  totalSessions: number
  avgScore: number
  isCurrentUser?: boolean
}

export type Achievement = {
  id: string
  title: string
  description: string
  earnedOn: string // ISO
  icon: string // lucide icon name
  tier: "bronze" | "silver" | "gold"
}

// ---------------------------------------------------------------------------
// Mock dogs
// ---------------------------------------------------------------------------
export const MOCK_DOGS: Dog[] = [
  {
    id: "rex",
    name: "Rex",
    breed: "German Shepherd",
    age: 4,
    photoUrl: "/images/dog-rex.png",
    totalSessions: 142,
    totalDistanceKm: 318.4,
    avgScorePercent: 87,
    rank: 12,
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Belgian Malinois",
    age: 3,
    photoUrl: "/images/dog-luna.png",
    totalSessions: 89,
    totalDistanceKm: 201.7,
    avgScorePercent: 91,
    rank: 7,
  },
]

// ---------------------------------------------------------------------------
// Mock sessions
// ---------------------------------------------------------------------------
export const MOCK_SESSIONS: Session[] = [
  { id: "s1",  dogId: "rex",  date: "2026-06-05", durationMin: 42, distanceKm: 3.2, articlesFound: 4, articlesTotal: 5, scorePercent: 92, terrain: "Forest",  conditions: "Day",   notes: "Strong wind, but Rex stayed on track throughout." },
  { id: "s2",  dogId: "rex",  date: "2026-05-29", durationMin: 38, distanceKm: 2.8, articlesFound: 3, articlesTotal: 4, scorePercent: 85, terrain: "Urban",   conditions: "Rain",  notes: "Wet conditions slowed search speed slightly." },
  { id: "s3",  dogId: "rex",  date: "2026-05-20", durationMin: 55, distanceKm: 4.1, articlesFound: 5, articlesTotal: 5, scorePercent: 98, terrain: "Mixed",   conditions: "Day",   notes: "Perfect run — first 100% article find." },
  { id: "s4",  dogId: "rex",  date: "2026-05-12", durationMin: 30, distanceKm: 2.0, articlesFound: 2, articlesTotal: 4, scorePercent: 72, terrain: "Field",   conditions: "Fog",   notes: "Visibility poor, cross-track confusion at junction." },
  { id: "s5",  dogId: "rex",  date: "2026-05-03", durationMin: 47, distanceKm: 3.6, articlesFound: 4, articlesTotal: 5, scorePercent: 88, terrain: "Forest",  conditions: "Night", notes: "Night track, Rex was calm and confident." },
  { id: "s6",  dogId: "rex",  date: "2026-04-25", durationMin: 35, distanceKm: 2.5, articlesFound: 3, articlesTotal: 4, scorePercent: 82, terrain: "Urban",   conditions: "Day",   notes: "City environment — vehicle exhaust interference noted." },
  { id: "s7",  dogId: "luna", date: "2026-06-04", durationMin: 40, distanceKm: 3.0, articlesFound: 5, articlesTotal: 5, scorePercent: 96, terrain: "Forest",  conditions: "Day",   notes: "Excellent focus, fast article indication." },
  { id: "s8",  dogId: "luna", date: "2026-05-27", durationMin: 35, distanceKm: 2.6, articlesFound: 4, articlesTotal: 5, scorePercent: 89, terrain: "Mixed",   conditions: "Day",   notes: "Some distraction near livestock field." },
  { id: "s9",  dogId: "luna", date: "2026-05-18", durationMin: 50, distanceKm: 3.9, articlesFound: 5, articlesTotal: 5, scorePercent: 97, terrain: "Field",   conditions: "Rain",  notes: "Wet grass enhanced scent — Luna loved it." },
  { id: "s10", dogId: "luna", date: "2026-05-09", durationMin: 28, distanceKm: 1.8, articlesFound: 3, articlesTotal: 4, scorePercent: 80, terrain: "Urban",   conditions: "Day",   notes: "Busy market area; high distraction level." },
]

// ---------------------------------------------------------------------------
// Performance chart data (last 6 months, per dog)
// ---------------------------------------------------------------------------
export const PERFORMANCE_DATA: Record<string, PerformancePoint[]> = {
  rex: [
    { month: "Jan", accuracy: 74, speed: 28, articles: 14 },
    { month: "Feb", accuracy: 78, speed: 31, articles: 18 },
    { month: "Mar", accuracy: 80, speed: 29, articles: 22 },
    { month: "Apr", accuracy: 83, speed: 33, articles: 24 },
    { month: "May", accuracy: 87, speed: 36, articles: 28 },
    { month: "Jun", accuracy: 92, speed: 38, articles: 9  },
  ],
  luna: [
    { month: "Jan", accuracy: 82, speed: 33, articles: 10 },
    { month: "Feb", accuracy: 85, speed: 35, articles: 14 },
    { month: "Mar", accuracy: 87, speed: 37, articles: 16 },
    { month: "Apr", accuracy: 89, speed: 38, articles: 18 },
    { month: "May", accuracy: 91, speed: 40, articles: 22 },
    { month: "Jun", accuracy: 96, speed: 43, articles: 9  },
  ],
}

// ---------------------------------------------------------------------------
// Global leaderboard (top 10 + current user highlighted)
// ---------------------------------------------------------------------------
export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1,  handlerName: "Klaus M.",    dogName: "Argo",  country: "DE", totalSessions: 289, avgScore: 94 },
  { rank: 2,  handlerName: "Sophie T.",   dogName: "Bella", country: "FR", totalSessions: 261, avgScore: 93 },
  { rank: 3,  handlerName: "Marco B.",    dogName: "Zeus",  country: "IT", totalSessions: 243, avgScore: 92 },
  { rank: 4,  handlerName: "Anna K.",     dogName: "Nala",  country: "NL", totalSessions: 230, avgScore: 92 },
  { rank: 5,  handlerName: "Tomás R.",    dogName: "Max",   country: "ES", totalSessions: 218, avgScore: 91 },
  { rank: 6,  handlerName: "Ingrid L.",   dogName: "Storm", country: "SE", totalSessions: 205, avgScore: 91 },
  { rank: 7,  handlerName: "You",         dogName: "Luna",  country: "AU", totalSessions: 89,  avgScore: 91, isCurrentUser: true },
  { rank: 8,  handlerName: "Pieter V.",   dogName: "Bruno", country: "BE", totalSessions: 195, avgScore: 90 },
  { rank: 9,  handlerName: "Elena M.",    dogName: "Fiona", country: "GR", totalSessions: 188, avgScore: 89 },
  { rank: 10, handlerName: "James O.",    dogName: "Duke",  country: "GB", totalSessions: 175, avgScore: 89 },
  { rank: 12, handlerName: "You",         dogName: "Rex",   country: "AU", totalSessions: 142, avgScore: 87, isCurrentUser: true },
]

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------
export const ACHIEVEMENTS: Achievement[] = [
  { id: "a1",  title: "First Track",        description: "Completed your very first session.",             earnedOn: "2024-03-11", icon: "Footprints",   tier: "bronze" },
  { id: "a2",  title: "10 Sessions",        description: "Logged 10 sessions with your dog.",              earnedOn: "2024-05-22", icon: "ListChecks",   tier: "bronze" },
  { id: "a3",  title: "50 Sessions",        description: "Reached 50 completed sessions.",                 earnedOn: "2024-11-04", icon: "Zap",          tier: "silver" },
  { id: "a4",  title: "Night Tracker",      description: "Completed a session after dark.",                earnedOn: "2025-01-19", icon: "Moon",         tier: "silver" },
  { id: "a5",  title: "100 Sessions",       description: "An incredible milestone — 100 sessions logged.", earnedOn: "2025-08-03", icon: "Trophy",       tier: "gold"   },
  { id: "a6",  title: "Perfect Score",      description: "Achieved 100 % on a single session.",            earnedOn: "2026-05-20", icon: "Star",         tier: "gold"   },
  { id: "a7",  title: "Rain or Shine",      description: "Trained in at least 4 different conditions.",    earnedOn: "2025-03-30", icon: "CloudRain",    tier: "silver" },
  { id: "a8",  title: "250 km Tracked",     description: "Your dogs have tracked over 250 km combined.",  earnedOn: "2025-12-15", icon: "Map",          tier: "gold"   },
]
