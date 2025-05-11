import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <GraduationCap className="h-8 w-8 text-blue-700" />
        <span className="text-xl font-bold text-blue-700">Student Enrollment System</span>
      </Link>

      <Card className="w-full max-w-md border-blue-100">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-blue-900">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to register for the student portal
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" className="border-blue-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" className="border-blue-200" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" className="border-blue-200" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="studentId">Student ID (if already assigned)</Label>
            <Input id="studentId" placeholder="Optional" className="border-blue-200" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="program">Program of Study</Label>
            <Select>
              <SelectTrigger className="border-blue-200">
                <SelectValue placeholder="Select your program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="eng">English</SelectItem>
                <SelectItem value="phys">Physics</SelectItem>
                <SelectItem value="bio">Biology</SelectItem>
                <SelectItem value="chem">Chemistry</SelectItem>
                <SelectItem value="hist">History</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="border-blue-200" />
            <p className="text-xs text-gray-500">
              Password must be at least 8 characters and include a number and a special character.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" className="border-blue-200" />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="rounded border-blue-300 text-blue-700 focus:ring-blue-500" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="/terms" className="text-blue-700 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-700 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-blue-700 hover:bg-blue-800">Create Account</Button>
          <div className="text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="text-blue-700 hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </CardFooter>
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
