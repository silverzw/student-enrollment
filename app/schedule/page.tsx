import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, MapPin, Download, Printer, Share2, Plus, BookOpen } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"

export default function SchedulePage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Academic Schedule</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Current Term</CardDescription>
            <CardTitle className="text-blue-900">Spring 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">Jan 15 - May 30</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Enrolled Courses</CardDescription>
            <CardTitle className="text-blue-900">4 Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm">12 Credit Hours</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Weekly Classes</CardDescription>
            <CardTitle className="text-blue-900">10 Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">15 Hours Total</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Next Class</CardDescription>
            <CardTitle className="text-blue-900">CS101</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">Mon 10:00 AM</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Select defaultValue="spring2025">
              <SelectTrigger className="w-40 border-blue-200">
                <SelectValue placeholder="Select Term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spring2025">Spring 2025</SelectItem>
                <SelectItem value="fall2024">Fall 2024</SelectItem>
                <SelectItem value="summer2024">Summer 2024</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="week">
              <SelectTrigger className="w-40 border-blue-200">
                <SelectValue placeholder="Select View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day View</SelectItem>
                <SelectItem value="week">Week View</SelectItem>
                <SelectItem value="month">Month View</SelectItem>
                <SelectItem value="list">List View</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
              Today
            </Button>
            <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
              &lt;
            </Button>
            <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
              &gt;
            </Button>
          </div>
        </div>

        <Tabs defaultValue="week" className="w-full">
          <TabsList className="w-full bg-blue-50 border border-blue-100">
            <TabsTrigger value="week" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700">
              Week View
            </TabsTrigger>
            <TabsTrigger value="list" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700">
              List View
            </TabsTrigger>
            <TabsTrigger
              value="courses"
              className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
            >
              Courses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="week" className="mt-4">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Week of May 10 - May 16, 2025</CardTitle>
                <CardDescription>Your weekly class schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-8 gap-2 text-center font-medium text-blue-900 mb-2">
                  <div>Time</div>
                  <div>Sunday</div>
                  <div>Monday</div>
                  <div>Tuesday</div>
                  <div>Wednesday</div>
                  <div>Thursday</div>
                  <div>Friday</div>
                  <div>Saturday</div>
                </div>
                <div className="grid grid-cols-8 gap-2 text-sm">
                  {[
                    "8:00 AM",
                    "9:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "1:00 PM",
                    "2:00 PM",
                    "3:00 PM",
                    "4:00 PM",
                  ].map((time, index) => (
                    <>
                      <div key={time} className="py-3 border-t border-blue-100 font-medium">
                        {time}
                      </div>
                      <div key={`${time}-sunday`} className="py-2 border-t border-blue-100"></div>
                      <div
                        className={`py-2 border-t border-blue-100 ${index === 2 || index === 5 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                      >
                        {index === 2 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">CS101</div>
                            <div className="text-xs">10:00 - 11:30 AM</div>
                          </div>
                        )}
                        {index === 5 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">ENG105</div>
                            <div className="text-xs">2:00 - 3:30 PM</div>
                          </div>
                        )}
                      </div>
                      <div
                        className={`py-2 border-t border-blue-100 ${index === 1 || index === 4 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                      >
                        {index === 1 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">PHYS101</div>
                            <div className="text-xs">9:00 - 10:30 AM</div>
                          </div>
                        )}
                        {index === 4 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">MATH201</div>
                            <div className="text-xs">1:00 - 2:30 PM</div>
                          </div>
                        )}
                      </div>
                      <div
                        className={`py-2 border-t border-blue-100 ${index === 2 || index === 5 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                      >
                        {index === 2 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">CS101</div>
                            <div className="text-xs">10:00 - 11:30 AM</div>
                          </div>
                        )}
                        {index === 5 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">ENG105</div>
                            <div className="text-xs">2:00 - 3:30 PM</div>
                          </div>
                        )}
                      </div>
                      <div
                        className={`py-2 border-t border-blue-100 ${index === 1 || index === 4 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                      >
                        {index === 1 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">PHYS101</div>
                            <div className="text-xs">9:00 - 10:30 AM</div>
                          </div>
                        )}
                        {index === 4 && (
                          <div className="bg-blue-100 p-2 rounded text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer">
                            <div className="font-medium">MATH201</div>
                            <div className="text-xs">1:00 - 2:30 PM</div>
                          </div>
                        )}
                      </div>
                      <div key={`${time}-friday`} className="py-2 border-t border-blue-100"></div>
                      <div key={`${time}-saturday`} className="py-2 border-t border-blue-100"></div>
                    </>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="list" className="mt-4">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Schedule List</CardTitle>
                <CardDescription>All your scheduled classes and events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-blue-900 mb-3">Monday</h3>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between p-3 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 bg-blue-100 text-blue-800 p-2 rounded-md text-center min-w-[60px]">
                            <div className="text-xs">10:00</div>
                            <div className="text-xs">11:30</div>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">CS101: Introduction to Computer Science</h4>
                            <div className="text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1 text-blue-700" />
                                Science Building, Room 101
                              </div>
                              <div className="flex items-center mt-1">
                                <BookOpen className="h-3 w-3 mr-1 text-blue-700" />
                                Dr. Alan Turing
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link href="/courses/CS101">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            Details
                          </Button>
                        </Link>
                      </div>

                      <div className="flex items-start justify-between p-3 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 bg-blue-100 text-blue-800 p-2 rounded-md text-center min-w-[60px]">
                            <div className="text-xs">2:00</div>
                            <div className="text-xs">3:30</div>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">ENG105: Academic Writing</h4>
                            <div className="text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1 text-blue-700" />
                                Humanities Building, Room 205
                              </div>
                              <div className="flex items-center mt-1">
                                <BookOpen className="h-3 w-3 mr-1 text-blue-700" />
                                Prof. Jane Austen
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link href="/courses/ENG105">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-blue-900 mb-3">Tuesday</h3>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between p-3 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 bg-blue-100 text-blue-800 p-2 rounded-md text-center min-w-[60px]">
                            <div className="text-xs">9:00</div>
                            <div className="text-xs">10:30</div>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">PHYS101: Physics for Scientists</h4>
                            <div className="text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1 text-blue-700" />
                                Science Building, Room 301
                              </div>
                              <div className="flex items-center mt-1">
                                <BookOpen className="h-3 w-3 mr-1 text-blue-700" />
                                Dr. Richard Feynman
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link href="/courses/PHYS101">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            Details
                          </Button>
                        </Link>
                      </div>

                      <div className="flex items-start justify-between p-3 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 bg-blue-100 text-blue-800 p-2 rounded-md text-center min-w-[60px]">
                            <div className="text-xs">1:00</div>
                            <div className="text-xs">2:30</div>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">MATH201: Calculus II</h4>
                            <div className="text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1 text-blue-700" />
                                Mathematics Building, Room 105
                              </div>
                              <div className="flex items-center mt-1">
                                <BookOpen className="h-3 w-3 mr-1 text-blue-700" />
                                Dr. Katherine Johnson
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link href="/courses/MATH201">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-blue-900 mb-3">Wednesday</h3>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between p-3 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 bg-blue-100 text-blue-800 p-2 rounded-md text-center min-w-[60px]">
                            <div className="text-xs">10:00</div>
                            <div className="text-xs">11:30</div>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-900">CS101: Introduction to Computer Science</h4>
                            <div className="text-sm text-gray-600 mt-1">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1 text-blue-700" />
                                Science Building, Room 101
                              </div>
                              <div className="flex items-center mt-1">
                                <BookOpen className="h-3 w-3 mr-1 text-blue-700" />
                                Dr. Alan Turing
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link href="/courses/CS101">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="mt-4">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Enrolled Courses</CardTitle>
                <CardDescription>All courses for the current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "CS101",
                      name: "Introduction to Computer Science",
                      instructor: "Dr. Alan Turing",
                      schedule: "Mon/Wed 10:00 AM - 11:30 AM",
                      location: "Science Building, Room 101",
                      color: "blue",
                    },
                    {
                      id: "MATH201",
                      name: "Calculus II",
                      instructor: "Dr. Katherine Johnson",
                      schedule: "Tue/Thu 1:00 PM - 2:30 PM",
                      location: "Mathematics Building, Room 105",
                      color: "green",
                    },
                    {
                      id: "ENG105",
                      name: "Academic Writing",
                      instructor: "Prof. Jane Austen",
                      schedule: "Mon/Wed 2:00 PM - 3:30 PM",
                      location: "Humanities Building, Room 205",
                      color: "purple",
                    },
                    {
                      id: "PHYS101",
                      name: "Physics for Scientists",
                      instructor: "Dr. Richard Feynman",
                      schedule: "Tue/Thu 9:00 AM - 10:30 AM",
                      location: "Science Building, Room 301",
                      color: "orange",
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
                          <Badge
                            className={
                              course.color === "blue"
                                ? "bg-blue-100 text-blue-800"
                                : course.color === "green"
                                  ? "bg-green-100 text-green-800"
                                  : course.color === "purple"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-orange-100 text-orange-800"
                            }
                          >
                            {course.color === "blue"
                              ? "Computer Science"
                              : course.color === "green"
                                ? "Mathematics"
                                : course.color === "purple"
                                  ? "English"
                                  : "Physics"}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-blue-900">{course.name}</h4>
                        <div className="text-sm text-gray-600 mt-1">
                          <div className="flex items-center">
                            <BookOpen className="h-3 w-3 mr-1 text-blue-700" />
                            {course.instructor}
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock className="h-3 w-3 mr-1 text-blue-700" />
                            {course.schedule}
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1 text-blue-700" />
                            {course.location}
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
                            Course Details
                          </Button>
                        </Link>
                        <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                          View Schedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
