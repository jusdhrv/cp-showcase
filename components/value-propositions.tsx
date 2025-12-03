"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart3, Share2, GitBranch, Flame, TrendingUp } from "lucide-react"

const valueProps = [
  {
    icon: Zap,
    title: "Auto-Sync from Platforms",
    description: "Connect your handles and let daily crons fetch new solves effortlessly from all major platforms.",
  },
  {
    icon: BarChart3,
    title: "Stunning Visualizations",
    description: "See your progress with rating graphs, topic radars, problem category breakdowns, and more.",
  },
  {
    icon: GitBranch,
    title: "Own Your Data",
    description: "Store everything in your own GitHub repo. No lock-in, full transparency, complete control.",
  },
  {
    icon: Share2,
    title: "One Link to Rule Them All",
    description:
      "Share a beautiful, professional profile link with recruiters and the competitive programming community.",
  },
  {
    icon: Flame,
    title: "Streak Tracking",
    description: "Monitor your consistency with daily solve streaks, motivation badges, and achievement milestones.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Showcase your skills and growth trajectory to potential employers and collaborators instantly.",
  },
]

export function ValuePropositions() {
  return (
    <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">
          Why competitive programmers love CP Showcase
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Built by competitive programmers, for competitive programmers. Everything you need to showcase your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueProps.map((prop, index) => {
          const Icon = prop.icon
          return (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur border-muted/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 cursor-pointer group overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/competitive-programming-demo.jpg"
                  alt="Demo visualization"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <CardTitle className="text-xl">{prop.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
