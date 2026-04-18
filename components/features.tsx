import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MapPin, MessageSquare, BarChart3, Settings, Navigation, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    description:
      "To lay a track, simply walk the path yourself first, place articles along the way, and log their positions on your phone's map. As you lay the track, you can view a real-time map displaying the route and articles locations. The app provides a detailed summary, including track length, time taken, and the number of articles placed.",
    highlights: ["Real-time map display", "Article position logging", "Detailed track summary"],
  },
  {
    icon: MessageSquare,
    title: "Session Feedback",
    description:
      "After completing a track, there's an option to provide detailed feedback on your training session. This information helps build comprehensive statistics, allowing you to track your progress over time. You can also include personal comments or notes for your own reference.",
    highlights: ["Training session feedback", "Progress tracking", "Personal notes"],
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Analyze comprehensive statistics such as time, distance, and success rate. Utilize this information to gain insights into your dog's performance and make informed training decisions. This data helps you track progress and tailor your training to achieve the best results.",
    highlights: ["Time & distance stats", "Success rate analysis", "Data-driven decisions"],
  },
  {
    icon: Settings,
    title: "Your Settings",
    description:
      "Customize your preferences to fit your training needs. Adjust various settings to personalize your experience, ensuring that Trackfellow aligns perfectly with your training goals and methods.",
    highlights: ["Customizable preferences", "Personalized experience", "Flexible training methods"],
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Features
          </p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-foreground text-balance"
          >
            How does Trackfellow work?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to take your dog tracking training to the next level
          </p>
        </header>

        {/* Features Grid */}
        <div
          id="how-it-works"
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          role="list"
          aria-label="App features"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                role="listitem"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                      aria-hidden="true"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary/60">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-outfit font-semibold text-foreground mt-1">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2" aria-label={`${feature.title} highlights`}>
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm">
                        <CheckCircle2
                          className="w-4 h-4 text-primary shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
