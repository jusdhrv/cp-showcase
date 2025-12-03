"use client"
import { HeroSection } from "@/components/hero-section"
import { ValuePropositions } from "@/components/value-propositions"
import { FeaturedProfiles } from "@/components/featured-profiles"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-background to-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Propositions Section */}
      <ValuePropositions />

      {/* Featured Profiles Section */}
      <FeaturedProfiles />

      {/* Footer */}
      <Footer />
    </main>
  )
}
