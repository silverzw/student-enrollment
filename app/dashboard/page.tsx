import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, Clock, FileText, GraduationCap, BarChart, Bell, Settings } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Student Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Current Semester</CardDescription>
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
            <CardDescription>GPA</CardDescription>
            <CardTitle className="text-blue-900">3.75</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <BarChart className="h-4 w-4 mr-2" />
              <span className="text-sm">Dean's List</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Degree Progress</CardDescription>
            <CardTitle className="text-blue-900">75%</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
            <div className="flex items-center text-blue-700 mt-2">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="text-sm">Expected: May 2026</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="mb-6">
        <TabsList className="bg-blue-50 border border-blue-100">
          <TabsTrigger value="courses" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
            Current Courses
          </TabsTrigger>
          <TabsTrigger value="schedule" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
            Weekly Schedule
          </TabsTrigger>
          <TabsTrigger value="assignments" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
            Assignments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-4">
          <div className="grid gap-4">
            {[
              {
                id: "CS101",
                name: "Introduction to Computer Science",
                instructor: "Dr. Alan Turing",
                schedule: "Mon/Wed 10:00 AM - 11:30 AM",
                progress: 65,
              },
              {
                id: "MATH201",
                name: "Calculus II",
                instructor: "Dr. Katherine Johnson",
                schedule: "Tue/Thu 1:00 PM - 2:30 PM",
                progress: 80,
              },
              {
                id: "ENG105",
                name: "Academic Writing",
                instructor: "Prof. Jane Austen",
                schedule: "Mon/Wed 2:00 PM - 3:30 PM",
                progress: 90,
              },
              {
                id: "PHYS101",
                name: "Physics for Scientists",
                instructor: "Dr. Richard Feynman",
                schedule: "Tue/Thu 9:00 AM - 10:30 AM",
                progress: 70,
              },
            ].map((course) => (
              <Card key={course.id} className="border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardDescription>{course.id}</CardDescription>
                      <CardTitle className="text-blue-900">{course.name}</CardTitle>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button variant="ghost" size="sm" className="text-blue-700 hover:bg-blue-50">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center text-sm">
                      <GraduationCap className="h-4 w-4 mr-2 text-blue-700" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-blue-700" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Course Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="mt-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Weekly Schedule</CardTitle>
              <CardDescription>Your class schedule for the current semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-2 text-center font-medium text-blue-900 mb-2">
                <div>Time</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
              </div>
              <div className="grid grid-cols-6 gap-2 text-sm">
                {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time, index) => (
                  <React.Fragment key={time}>
                    <div className="py-3 border-t border-blue-100 font-medium">{time}</div>
                    <div
                      className={`py-2 border-t border-blue-100 ${index === 0 || index === 3 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                    >
                      {index === 0 && <div className="bg-blue-100 p-2 rounded text-blue-800">PHYS101</div>}
                      {index === 3 && <div className="bg-blue-100 p-2 rounded text-blue-800">CS101</div>}
                    </div>
                    <div
                      className={`py-2 border-t border-blue-100 ${index === 0 || index === 4 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                    >
                      {index === 0 && <div className="bg-blue-100 p-2 rounded text-blue-800">PHYS101</div>}
                      {index === 4 && <div className="bg-blue-100 p-2 rounded text-blue-800">MATH201</div>}
                    </div>
                    <div
                      className={`py-2 border-t border-blue-100 ${index === 0 || index === 3 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                    >
                      {index === 0 && <div className="bg-blue-100 p-2 rounded text-blue-800">PHYS101</div>}
                      {index === 3 && <div className="bg-blue-100 p-2 rounded text-blue-800">CS101</div>}
                    </div>
                    <div
                      className={`py-2 border-t border-blue-100 ${index === 0 || index === 4 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                    >
                      {index === 0 && <div className="bg-blue-100 p-2 rounded text-blue-800">PHYS101</div>}
                      {index === 4 && <div className="bg-blue-100 p-2 rounded text-blue-800">MATH201</div>}
                    </div>
                    <div
                      className={`py-2 border-t border-blue-100 ${index === 5 ? "bg-blue-50 rounded text-center text-xs p-1" : ""}`}
                    >
                      {index === 5 && <div className="bg-blue-100 p-2 rounded text-blue-800">ENG105</div>}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="mt-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Upcoming Assignments</CardTitle>
              <CardDescription>Assignments due in the next two weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "Algorithm Analysis Paper",
                    course: "CS101",
                    dueDate: "May 15, 2025",
                    status: "In Progress",
                  },
                  {
                    id: 2,
                    title: "Differential Equations Problem Set",
                    course: "MATH201",
                    dueDate: "May 18, 2025",
                    status: "Not Started",
                  },
                  {
                    id: 3,
                    title: "Research Essay Draft",
                    course: "ENG105",
                    dueDate: "May 20, 2025",
                    status: "In Progress",
                  },
                  {
                    id: 4,
                    title: "Lab Report: Momentum Conservation",
                    course: "PHYS101",
                    dueDate: "May 22, 2025",
                    status: "Not Started",
                  },
                ].map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-start justify-between p-3 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <FileText className="h-5 w-5 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-900">{assignment.title}</h4>
                        <div className="text-sm text-gray-600">
                          {assignment.course} • Due: {assignment.dueDate}
                        </div>
                      </div>
                    </div>
                    <div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          assignment.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
