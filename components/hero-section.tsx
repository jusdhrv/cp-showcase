"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

  const carouselText = [
    "Auto-sync your solves",
    "Get stunning analytics",
    "Store everything in your own GitHub repository",
    "Share one professional link with recruiters",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev + 1) % carouselText.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-pretty">
            <span className="text-white">One link for</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 italic">
              all your solves
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-16 flex items-center justify-center mb-12">
            <div className="relative w-full max-w-2xl">
              {carouselText.map((text, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out text-lg md:text-xl text-muted-foreground px-4 absolute left-1/2 -translate-x-1/2 whitespace-nowrap ${
                    index === currentCarouselIndex
                      ? "opacity-100 translate-y-0"
                      : index < currentCarouselIndex
                        ? "opacity-0 -translate-y-8"
                        : "opacity-0 translate-y-8"
                  }`}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link href="/auth/signin">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              Get Started for Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-muted-foreground/50 hover:bg-muted/50 px-8 py-6 text-lg rounded-lg bg-transparent"
          >
            View Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
