import Link from "next/link"
import { GraduationCap, BookOpen, Users, Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-700" />
            <span className="text-xl font-bold text-blue-700">Student Enrollment System</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-blue-900 hover:text-blue-700">
              Home
            </Link>
            <Link href="/courses" className="text-sm font-medium text-gray-600 hover:text-blue-700">
              Courses
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-700">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-blue-700">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-50">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-700 hover:bg-blue-800">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Streamlined Student Enrollment System
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                A comprehensive platform for students to browse courses, manage enrollment, and track academic progress
                all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                    Get Started
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="text-blue-700 border-blue-700 hover:bg-blue-50">
                    Browse Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full opacity-40" />
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Students using enrollment system"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Key Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our enrollment system provides everything students and administrators need for a seamless educational
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-blue-700 mb-2" />
                  <CardTitle className="text-blue-900">Course Catalog</CardTitle>
                  <CardDescription>
                    Browse and search through available courses with detailed information.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-blue-700 mb-2" />
                  <CardTitle className="text-blue-900">Enrollment Management</CardTitle>
                  <CardDescription>Register for courses and manage your academic schedule efficiently.</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-700 mb-2" />
                  <CardTitle className="text-blue-900">Student Profiles</CardTitle>
                  <CardDescription>
                    Maintain your academic profile with personal and educational information.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-blue-700 mb-2" />
                  <CardTitle className="text-blue-900">Academic Progress</CardTitle>
                  <CardDescription>Track your academic journey with detailed progress reports.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to get started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of students who are already using our platform to manage their academic journey.
              </p>
              <Link href="/register">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800">
                  Create an Account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-lg font-bold">Student Enrollment System</span>
              </div>
              <p className="text-blue-200 text-sm">
                A comprehensive student enrollment system designed for modern educational institutions.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-lg mb-4">Contact Us</h3>
              <address className="text-blue-200 not-italic">
                <p>123 Education Ave</p>
                <p>Academic City, AC 12345</p>
                <p className="mt-2">Email: info@enrollmentsystem.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; {new Date().getFullYear()} Student Enrollment System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
