"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ArrowLeft } from "lucide-react"

export default function SignUp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-slate-950 via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
      </div>

      <div className="w-full max-w-md">
        {/* Back links to home and signin */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <Link href="/auth/signin" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
            Have an account? →
          </Link>
        </div>

        {/* Sign Up Card */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <Card className="bg-card/80 backdrop-blur border-muted/50 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Create Your CP Showcase</CardTitle>
              <CardDescription className="text-base mt-2">
                Join the community of competitive programmers showcasing their skills
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <Button
                  className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-6 text-lg rounded-lg transition-all hover:shadow-lg gap-2 group"
                  onClick={() => {
                    console.log("Sign up with GitHub clicked")
                  }}
                >
                  <Github className="w-5 h-5" />
                  Sign up with GitHub
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-muted/50" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-card text-muted-foreground">or create with email</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="your_cp_handle"
                    className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 text-base rounded-lg transition-all hover:shadow-lg"
                  onClick={() => {
                    console.log("Create account with email clicked")
                  }}
                >
                  Create Account
                </Button>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                By creating an account, you agree to our{" "}
                <Link href="#" className="text-blue-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <span>🔒</span>
            Secure • Open source • Community-driven
          </p>
        </div>
      </div>
    </main>
  )
}
