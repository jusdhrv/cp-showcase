"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const profiles = [
  {
    username: "@jusdhrv",
    avatar: "/competitive-programmer-avatar-1.jpg",
    rating: "2300+",
    solves: "1800+",
    streak: "87-day",
    platform: "Codeforces",
  },
  {
    username: "@code_ninja",
    avatar: "/competitive-programmer-avatar-2.jpg",
    rating: "2150+",
    solves: "1550+",
    streak: "64-day",
    platform: "LeetCode",
  },
  {
    username: "@algo_master",
    avatar: "/competitive-programmer-avatar-3.jpg",
    rating: "2450+",
    solves: "2100+",
    streak: "120-day",
    platform: "AtCoder",
  },
  {
    username: "@puzzle_solver",
    avatar: "/competitive-programmer-avatar-4.jpg",
    rating: "2000+",
    solves: "1400+",
    streak: "45-day",
    platform: "Codeforces",
  },
]

export function FeaturedProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setIsMobile(window.innerWidth < 768)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Inspiring Profiles</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how competitive programmers showcase their achievements and growth
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className="bg-card/50 backdrop-blur border-muted/50 hover:border-primary/50 h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-16 h-16 mb-4 border-2 border-blue-500/50">
                  <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.username} />
                  <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{profile.username}</h3>
                <Badge variant="outline" className="mb-4 border-blue-500/50 text-blue-400">
                  {profile.platform}
                </Badge>
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-semibold text-blue-400">{profile.rating}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Solves</span>
                    <span className="font-semibold text-green-400">{profile.solves}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Streak</span>
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">🔥 {profile.streak}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="relative">
          <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <Card className="bg-card/50 backdrop-blur border-muted/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="w-16 h-16 mb-4 border-2 border-blue-500/50">
                  <AvatarImage
                    src={profiles[currentIndex].avatar || "/placeholder.svg"}
                    alt={profiles[currentIndex].username}
                  />
                  <AvatarFallback>{profiles[currentIndex].username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg mb-1">{profiles[currentIndex].username}</h3>
                <Badge variant="outline" className="mb-4 border-blue-500/50 text-blue-400">
                  {profiles[currentIndex].platform}
                </Badge>
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-semibold text-blue-400">{profiles[currentIndex].rating}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Solves</span>
                    <span className="font-semibold text-green-400">{profiles[currentIndex].solves}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Streak</span>
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                      🔥 {profiles[currentIndex].streak}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-between items-center mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="border-muted/50 hover:bg-muted/50 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {profiles.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-500 w-6" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="border-muted/50 hover:bg-muted/50 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
