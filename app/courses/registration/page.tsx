import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Calendar,
  Clock,
  Search,
  ShoppingCart,
  Trash2,
  ArrowLeft,
  CreditCard,
  AlertCircle,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function CourseRegistrationPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Link href="/courses">
            <Button variant="outline" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Courses
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">Course Registration</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Calendar className="h-4 w-4 mr-2" />
            Registration Calendar
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Registration Information</CardTitle>
              <CardDescription>Spring 2025 Registration Period: January 2 - January 15, 2025</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-700 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-900">Registration Status</h3>
                    <p className="text-sm text-gray-700">
                      Your registration window is now open. You can register for up to 18 credit hours for the Spring
                      2025 semester.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-blue-100 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Current Credits</h3>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-700" />
                    <span className="text-2xl font-bold text-blue-900">12</span>
                    <span className="text-gray-600">/ 18 maximum</span>
                  </div>
                </div>
                <div className="p-4 border border-blue-100 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Registration Period</h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-700" />
                    <span className="text-gray-700">Jan 2 - Jan 15, 2025</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-blue-900">Academic Advisor</h3>
                <div className="p-4 border border-blue-100 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Dr. Jane Smith</p>
                      <p className="text-sm text-gray-600">Computer Science Department</p>
                      <p className="text-sm text-gray-600">Office: Science Building, Room 305</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="search" className="w-full">
            <TabsList className="w-full bg-blue-50 border border-blue-100">
              <TabsTrigger
                value="search"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Search Courses
              </TabsTrigger>
              <TabsTrigger
                value="recommended"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Recommended Courses
              </TabsTrigger>
              <TabsTrigger
                value="requirements"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Degree Requirements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Search for Courses</CardTitle>
                  <CardDescription>Find courses to add to your registration cart</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search by course name, code, or instructor..."
                        className="pl-9 border-blue-200 focus-visible:ring-blue-500"
                      />
                    </div>
                    <div className="md:w-1/4">
                      <Select>
                        <SelectTrigger className="border-blue-200">
                          <SelectValue placeholder="Department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          <SelectItem value="cs">Computer Science</SelectItem>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="eng">English</SelectItem>
                          <SelectItem value="phys">Physics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:w-1/4">
                      <Select defaultValue="spring2025">
                        <SelectTrigger className="border-blue-200">
                          <SelectValue placeholder="Term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spring2025">Spring 2025</SelectItem>
                          <SelectItem value="fall2024">Fall 2024</SelectItem>
                          <SelectItem value="summer2024">Summer 2024</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    {[
                      {
                        id: "CS201",
                        name: "Data Structures",
                        department: "Computer Science",
                        credits: 3,
                        instructor: "Dr. Grace Hopper",
                        schedule: "Mon/Wed 1:00 PM - 2:30 PM",
                        seats: { available: 12, total: 30 },
                        level: "Undergraduate",
                        tags: ["Core", "In-Person"],
                      },
                      {
                        id: "CS301",
                        name: "Algorithms",
                        department: "Computer Science",
                        credits: 3,
                        instructor: "Dr. Donald Knuth",
                        schedule: "Tue/Thu 10:00 AM - 11:30 AM",
                        seats: { available: 8, total: 25 },
                        level: "Undergraduate",
                        tags: ["Core", "In-Person"],
                      },
                      {
                        id: "MATH301",
                        name: "Linear Algebra",
                        department: "Mathematics",
                        credits: 3,
                        instructor: "Dr. Emmy Noether",
                        schedule: "Mon/Wed/Fri 9:00 AM - 10:00 AM",
                        seats: { available: 15, total: 35 },
                        level: "Undergraduate",
                        tags: ["Core", "In-Person"],
                      },
                    ].map((course) => (
                      <div
                        key={course.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                              {course.id}
                            </Badge>
                            <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                              {course.credits} Credits
                            </Badge>
                          </div>
                          <h4 className="font-medium text-blue-900">{course.name}</h4>
                          <p className="text-sm text-gray-600">{course.department}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <div className="flex items-center text-xs text-gray-600">
                              <Clock className="h-3 w-3 mr-1 text-blue-700" />
                              {course.schedule}
                            </div>
                            <div className="flex items-center text-xs text-gray-600">
                              <BookOpen className="h-3 w-3 mr-1 text-blue-700" />
                              {course.seats.available} of {course.seats.total} seats
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/courses/${course.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-700 border-blue-200 hover:bg-blue-50"
                            >
                              View Details
                            </Button>
                          </Link>
                          <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommended" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Recommended Courses</CardTitle>
                  <CardDescription>Courses recommended based on your academic plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "CS201",
                        name: "Data Structures",
                        department: "Computer Science",
                        credits: 3,
                        reason: "Required for your major",
                        priority: "High",
                      },
                      {
                        id: "MATH301",
                        name: "Linear Algebra",
                        department: "Mathematics",
                        credits: 3,
                        reason: "Prerequisite for future courses",
                        priority: "Medium",
                      },
                      {
                        id: "ENG205",
                        name: "Technical Writing",
                        department: "English",
                        credits: 3,
                        reason: "Fulfills communication requirement",
                        priority: "Medium",
                      },
                    ].map((course) => (
                      <div
                        key={course.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                              {course.id}
                            </Badge>
                            <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                              {course.credits} Credits
                            </Badge>
                            <Badge
                              className={
                                course.priority === "High" ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"
                              }
                            >
                              {course.priority} Priority
                            </Badge>
                          </div>
                          <h4 className="font-medium text-blue-900">{course.name}</h4>
                          <p className="text-sm text-gray-600">{course.department}</p>
                          <p className="text-sm text-gray-600 mt-1">{course.reason}</p>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/courses/${course.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-700 border-blue-200 hover:bg-blue-50"
                            >
                              View Details
                            </Button>
                          </Link>
                          <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Degree Requirements</CardTitle>
                  <CardDescription>Track your progress toward your degree</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-blue-900 mb-3">Computer Science Major Requirements</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between p-3 border border-blue-100 rounded-md">
                          <div>
                            <p className="font-medium">Core Computer Science Courses</p>
                            <p className="text-sm text-gray-600">30 credits required</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">18/30 Credits Completed</Badge>
                        </div>
                        <div className="flex justify-between p-3 border border-blue-100 rounded-md">
                          <div>
                            <p className="font-medium">Mathematics Requirements</p>
                            <p className="text-sm text-gray-600">15 credits required</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">9/15 Credits Completed</Badge>
                        </div>
                        <div className="flex justify-between p-3 border border-blue-100 rounded-md">
                          <div>
                            <p className="font-medium">Computer Science Electives</p>
                            <p className="text-sm text-gray-600">12 credits required</p>
                          </div>
                          <Badge className="bg-orange-100 text-orange-800">3/12 Credits Completed</Badge>
                        </div>
                        <div className="flex justify-between p-3 border border-blue-100 rounded-md">
                          <div>
                            <p className="font-medium">General Education Requirements</p>
                            <p className="text-sm text-gray-600">45 credits required</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800">30/45 Credits Completed</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-blue-900 mb-3">Remaining Required Courses</h3>
                      <div className="space-y-2">
                        {[
                          { id: "CS201", name: "Data Structures", credits: 3, category: "Core" },
                          { id: "CS301", name: "Algorithms", credits: 3, category: "Core" },
                          { id: "CS310", name: "Computer Architecture", credits: 3, category: "Core" },
                          { id: "MATH301", name: "Linear Algebra", credits: 3, category: "Mathematics" },
                          { id: "CS401", name: "Operating Systems", credits: 3, category: "Core" },
                        ].map((course) => (
                          <div key={course.id} className="flex justify-between p-3 border border-blue-100 rounded-md">
                            <div>
                              <p className="font-medium">
                                {course.id}: {course.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {course.credits} credits • {course.category}
                              </p>
                            </div>
                            <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                              Add to Cart
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-blue-900">Registration Cart</CardTitle>
                <Badge className="bg-blue-100 text-blue-800">4 Courses</Badge>
              </div>
              <CardDescription>Courses ready for registration</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {[
                  {
                    id: "CS101",
                    name: "Introduction to Computer Science",
                    credits: 3,
                    schedule: "Mon/Wed 10:00 AM - 11:30 AM",
                  },
                  {
                    id: "MATH201",
                    name: "Calculus II",
                    credits: 4,
                    schedule: "Tue/Thu 1:00 PM - 2:30 PM",
                  },
                  {
                    id: "ENG105",
                    name: "Academic Writing",
                    credits: 3,
                    schedule: "Mon/Wed 2:00 PM - 3:30 PM",
                  },
                  {
                    id: "PHYS101",
                    name: "Physics for Scientists",
                    credits: 4,
                    schedule: "Tue/Thu 9:00 AM - 10:30 AM",
                  },
                ].map((course) => (
                  <div key={course.id} className="flex justify-between p-3 border border-blue-100 rounded-md">
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                          {course.id}
                        </Badge>
                        <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                          {course.credits} Cr
                        </Badge>
                      </div>
                      <p className="font-medium text-blue-900 mt-1">{course.name}</p>
                      <div className="flex items-center text-xs text-gray-600 mt-1">
                        <Clock className="h-3 w-3 mr-1 text-blue-700" />
                        {course.schedule}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Courses:</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Credits:</span>
                  <span className="font-medium">14</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tuition Estimate:</span>
                  <span className="font-medium">$6,300.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fees:</span>
                  <span className="font-medium">$850.00</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>$7,150.00</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 border-t border-blue-50 pt-4">
              <Button className="w-full bg-blue-700 hover:bg-blue-800">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Complete Registration
              </Button>
              <Button variant="outline" className="w-full text-blue-700 border-blue-200 hover:bg-blue-50">
                <CreditCard className="h-4 w-4 mr-2" />
                Payment Options
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Schedule Preview</CardTitle>
              <CardDescription>Weekly view of selected courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs">
                <div className="grid grid-cols-6 gap-1 text-center font-medium text-blue-900 mb-1">
                  <div>Time</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                </div>
                <div className="grid grid-cols-6 gap-1 text-center">
                  {["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"].map((time, index) => (
                    <React.Fragment key={time}>
                      <div className="py-2 border-t border-blue-100 font-medium">{time}</div>
                      <div
                        className={`py-1 border-t border-blue-100 ${index === 0 || index === 3 ? "bg-blue-100 rounded text-xs p-1" : ""}`}
                      >
                        {index === 0 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">CS101</div>}
                        {index === 3 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">ENG105</div>}
                      </div>
                      <div
                        className={`py-1 border-t border-blue-100 ${index === 0 || index === 4 ? "bg-blue-100 rounded text-xs p-1" : ""}`}
                      >
                        {index === 0 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">PHYS101</div>}
                        {index === 4 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">MATH201</div>}
                      </div>
                      <div
                        className={`py-1 border-t border-blue-100 ${index === 0 || index === 3 ? "bg-blue-100 rounded text-xs p-1" : ""}`}
                      >
                        {index === 0 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">CS101</div>}
                        {index === 3 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">ENG105</div>}
                      </div>
                      <div
                        className={`py-1 border-t border-blue-100 ${index === 0 || index === 4 ? "bg-blue-100 rounded text-xs p-1" : ""}`}
                      >
                        {index === 0 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">PHYS101</div>}
                        {index === 4 && <div className="bg-blue-200 p-1 rounded text-blue-800 text-xs">MATH201</div>}
                      </div>
                      <div className="py-1 border-t border-blue-100"></div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-gray-500">
                <p>Note: This is a simplified view. Click "View Full Schedule" for details.</p>
              </div>
            </CardContent>
            <CardFooter className="border-t border-blue-50 pt-4">
              <Button variant="outline" className="w-full text-blue-700 border-blue-200 hover:bg-blue-50">
                <Calendar className="h-4 w-4 mr-2" />
                View Full Schedule
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Registration Help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 border border-blue-100 rounded-md">
                <Calendar className="h-5 w-5 text-blue-700 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Registration Deadlines</p>
                  <p className="text-sm text-gray-600">View important dates and deadlines</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-blue-100 rounded-md">
                <BookOpen className="h-5 w-5 text-blue-700 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Course Catalog</p>
                  <p className="text-sm text-gray-600">Browse all available courses</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-blue-100 rounded-md">
                <CreditCard className="h-5 w-5 text-blue-700 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900">Financial Aid</p>
                  <p className="text-sm text-gray-600">View your financial aid status</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
