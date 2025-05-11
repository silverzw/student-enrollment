"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppContext } from "@/context/app-context"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAppContext()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(email, password)
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome back to the Student Enrollment System",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-8 w-8 text-blue-700" />
        <span className="text-xl font-bold text-blue-700">Student Enrollment System</span>
      </Link>

      <Card className="w-full max-w-md border-blue-100">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-blue-900">Sign in to your account</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the student portal
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email or Student ID</Label>
              <Input
                id="email"
                placeholder="m@example.com or 1234567"
                className="border-blue-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-blue-700 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="border-blue-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="rounded border-blue-300 text-blue-700 focus:ring-blue-500"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me for 30 days
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link href="/register" className="text-blue-700 hover:underline font-medium">
                Create one
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          Need help? Contact{" "}
          <a href="mailto:support@enrollmentsystem.com" className="text-blue-700 hover:underline">
            support@enrollmentsystem.com
          </a>
        </p>
      </div>
    </div>
  )
}
