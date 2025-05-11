import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Calendar,
  Clock,
  Upload,
  BookOpen,
  Filter,
  Search,
  CheckCircle,
  AlertCircle,
  XCircle,
} from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"

export default function AssignmentsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Assignments</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Calendar className="h-4 w-4 mr-2" />
            Calendar View
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800">
            <Upload className="h-4 w-4 mr-2" />
            Submit Assignment
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Total Assignments</CardDescription>
            <CardTitle className="text-blue-900">24</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <FileText className="h-4 w-4 mr-2" />
              <span className="text-sm">All Courses</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Completed</CardDescription>
            <CardTitle className="text-blue-900">16</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-green-700">
              <CheckCircle className="h-4 w-4 mr-2" />
              <span className="text-sm">67% Complete</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Upcoming</CardDescription>
            <CardTitle className="text-blue-900">6</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-orange-700">
              <AlertCircle className="h-4 w-4 mr-2" />
              <span className="text-sm">Due Soon</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Overdue</CardDescription>
            <CardTitle className="text-blue-900">2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-red-700">
              <XCircle className="h-4 w-4 mr-2" />
              <span className="text-sm">Needs Attention</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-blue-100 mb-6">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search assignments..."
                  className="pl-9 border-blue-200 focus-visible:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger className="border-blue-200">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-700" />
                    <SelectValue placeholder="Course" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="cs101">CS101</SelectItem>
                  <SelectItem value="math201">MATH201</SelectItem>
                  <SelectItem value="eng105">ENG105</SelectItem>
                  <SelectItem value="phys101">PHYS101</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="border-blue-200">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-blue-700" />
                    <SelectValue placeholder="Status" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="notstarted">Not Started</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="w-full bg-blue-50 border border-blue-100">
          <TabsTrigger
            value="upcoming"
            className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700">
            All Assignments
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            value="overdue"
            className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
          >
            Overdue
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-4">
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
                    courseTitle: "Introduction to Computer Science",
                    dueDate: "May 15, 2025",
                    status: "In Progress",
                    progress: 60,
                    priority: "High",
                  },
                  {
                    id: 2,
                    title: "Differential Equations Problem Set",
                    course: "MATH201",
                    courseTitle: "Calculus II",
                    dueDate: "May 18, 2025",
                    status: "Not Started",
                    progress: 0,
                    priority: "Medium",
                  },
                  {
                    id: 3,
                    title: "Research Essay Draft",
                    course: "ENG105",
                    courseTitle: "Academic Writing",
                    dueDate: "May 20, 2025",
                    status: "In Progress",
                    progress: 30,
                    priority: "Medium",
                  },
                  {
                    id: 4,
                    title: "Lab Report: Momentum Conservation",
                    course: "PHYS101",
                    courseTitle: "Physics for Scientists",
                    dueDate: "May 22, 2025",
                    status: "Not Started",
                    progress: 0,
                    priority: "Low",
                  },
                  {
                    id: 5,
                    title: "Programming Assignment 2",
                    course: "CS101",
                    courseTitle: "Introduction to Computer Science",
                    dueDate: "May 25, 2025",
                    status: "Not Started",
                    progress: 0,
                    priority: "Medium",
                  },
                  {
                    id: 6,
                    title: "Midterm Exam Preparation",
                    course: "MATH201",
                    courseTitle: "Calculus II",
                    dueDate: "May 28, 2025",
                    status: "Not Started",
                    progress: 0,
                    priority: "High",
                  },
                ].map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                          {assignment.course}
                        </Badge>
                        <Badge
                          className={
                            assignment.priority === "High"
                              ? "bg-red-100 text-red-800"
                              : assignment.priority === "Medium"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-green-100 text-green-800"
                          }
                        >
                          {assignment.priority} Priority
                        </Badge>
                        <Badge
                          className={
                            assignment.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : assignment.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : assignment.status === "Overdue"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                          }
                        >
                          {assignment.status}
                        </Badge>
                      </div>
                      <h4 className="font-medium text-blue-900">{assignment.title}</h4>
                      <p className="text-sm text-gray-600">{assignment.courseTitle}</p>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar className="h-3 w-3 mr-1 text-blue-700" />
                        Due: {assignment.dueDate}
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{assignment.progress}%</span>
                        </div>
                        <Progress
                          value={assignment.progress}
                          className="h-1.5 bg-blue-100"
                          indicatorClassName="bg-blue-600"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/assignments/${assignment.id}`}>
                        <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                          View Details
                        </Button>
                      </Link>
                      <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                        Submit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="mt-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">All Assignments</CardTitle>
              <CardDescription>Complete list of assignments for all courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-blue-900 mb-3">CS101: Introduction to Computer Science</h3>
                  <div className="space-y-3">
                    {[
                      {
                        id: 101,
                        title: "Programming Assignment 1",
                        dueDate: "April 20, 2025",
                        status: "Completed",
                        progress: 100,
                        grade: "95/100",
                      },
                      {
                        id: 102,
                        title: "Algorithm Analysis Paper",
                        dueDate: "May 15, 2025",
                        status: "In Progress",
                        progress: 60,
                      },
                      {
                        id: 103,
                        title: "Programming Assignment 2",
                        dueDate: "May 25, 2025",
                        status: "Not Started",
                        progress: 0,
                      },
                    ].map((assignment) => (
                      <div
                        key={assignment.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-3 border border-blue-100 rounded-md hover:bg-blue-50 transition-colors"
                      >
                        <div className="mb-3 md:mb-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              className={
                                assignment.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : assignment.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }
                            >
                              {assignment.status}
                            </Badge>
                            {assignment.grade && (
                              <Badge className="bg-purple-100 text-purple-800">Grade: {assignment.grade}</Badge>
                            )}
                          </div>
                          <h4 className="font-medium text-blue-900">{assignment.title}</h4>
                          <div className="flex items-center text-xs text-gray-600 mt-1">
                            <Calendar className="h-3 w-3 mr-1 text-blue-700" />
                            Due: {assignment.dueDate}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/assignments/${assignment.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-700 border-blue-200 hover:bg-blue-50"
                            >
                              View
                            </Button>
                          </Link>
                          {assignment.status !== "Completed" && (
                            <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                              Submit
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-blue-900 mb-3">MATH201: Calculus II</h3>
                  <div className="space-y-3">
                    {[
                      {
                        id: 201,
                        title: "Integration Techniques Quiz",
                        dueDate: "April 10, 2025",
                        status: "Completed",
                        progress: 100,
                        grade: "88/100",
                      },
                      {
                        id: 202,
                        title: "Differential Equations Problem Set",
                        dueDate: "May 18, 2025",
                        status: "Not Started",
                        progress: 0,
                      },
                      {
                        id: 203,
                        title: "Midterm Exam Preparation",
                        dueDate: "May 28, 2025",
                        status: "Not Started",
                        progress: 0,
                      },
                    ].map((assignment) => (
                      <div
                        key={assignment.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-3 border border-blue-100 rounded-md hover:bg-blue-50 transition-colors"
                      >
                        <div className="mb-3 md:mb-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              className={
                                assignment.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : assignment.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                              }
                            >
                              {assignment.status}
                            </Badge>
                            {assignment.grade && (
                              <Badge className="bg-purple-100 text-purple-800">Grade: {assignment.grade}</Badge>
                            )}
                          </div>
                          <h4 className="font-medium text-blue-900">{assignment.title}</h4>
                          <div className="flex items-center text-xs text-gray-600 mt-1">
                            <Calendar className="h-3 w-3 mr-1 text-blue-700" />
                            Due: {assignment.dueDate}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Link href={`/assignments/${assignment.id}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-700 border-blue-200 hover:bg-blue-50"
                            >
                              View
                            </Button>
                          </Link>
                          {assignment.status !== "Completed" && (
                            <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                              Submit
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-blue-50 pt-4">
              <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                Load More
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Completed Assignments</CardTitle>
              <CardDescription>Assignments you have already submitted</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 101,
                    title: "Programming Assignment 1",
                    course: "CS101",
                    courseTitle: "Introduction to Computer Science",
                    dueDate: "April 20, 2025",
                    submittedDate: "April 19, 2025",
                    grade: "95/100",
                    feedback: "Excellent work! Your code is well-structured and efficient.",
                  },
                  {
                    id: 201,
                    title: "Integration Techniques Quiz",
                    course: "MATH201",
                    courseTitle: "Calculus II",
                    dueDate: "April 10, 2025",
                    submittedDate: "April 10, 2025",
                    grade: "88/100",
                    feedback: "Good understanding of basic techniques. Work on the more complex problems.",
                  },
                  {
                    id: 301,
                    title: "Literary Analysis Essay",
                    course: "ENG105",
                    courseTitle: "Academic Writing",
                    dueDate: "April 5, 2025",
                    submittedDate: "April 4, 2025",
                    grade: "92/100",
                    feedback: "Strong analysis and well-structured arguments. Pay attention to citation format.",
                  },
                ].map((assignment) => (
                  <div
                    key={assignment.id}
                    className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                            {assignment.course}
                          </Badge>
                          <Badge className="bg-green-100 text-green-800">Completed</Badge>
                          <Badge className="bg-purple-100 text-purple-800">Grade: {assignment.grade}</Badge>
                        </div>
                        <h4 className="font-medium text-blue-900">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">{assignment.courseTitle}</p>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <Link href={`/assignments/${assignment.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            View Submission
                          </Button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-blue-700" />
                        Due: {assignment.dueDate}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-green-700" />
                        Submitted: {assignment.submittedDate}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm font-medium text-gray-700 mb-1">Instructor Feedback:</p>
                      <p className="text-sm text-gray-600">{assignment.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-blue-50 pt-4">
              <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                View All Completed Assignments
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="overdue" className="mt-4">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Overdue Assignments</CardTitle>
              <CardDescription>Assignments that have passed their due date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 401,
                    title: "Physics Lab Experiment Report",
                    course: "PHYS101",
                    courseTitle: "Physics for Scientists",
                    dueDate: "May 1, 2025",
                    daysOverdue: 10,
                    latePolicy: "10% penalty per day, up to 50% maximum",
                  },
                  {
                    id: 501,
                    title: "Data Structures Implementation",
                    course: "CS101",
                    courseTitle: "Introduction to Computer Science",
                    dueDate: "May 5, 2025",
                    daysOverdue: 6,
                    latePolicy: "10% penalty per day, up to 50% maximum",
                  },
                ].map((assignment) => (
                  <div key={assignment.id} className="p-4 border border-red-100 bg-red-50 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                            {assignment.course}
                          </Badge>
                          <Badge className="bg-red-100 text-red-800">{assignment.daysOverdue} Days Overdue</Badge>
                        </div>
                        <h4 className="font-medium text-blue-900">{assignment.title}</h4>
                        <p className="text-sm text-gray-600">{assignment.courseTitle}</p>
                      </div>
                      <div className="mt-3 md:mt-0 flex gap-2">
                        <Link href={`/assignments/${assignment.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-700 border-blue-200 hover:bg-blue-100"
                          >
                            View Details
                          </Button>
                        </Link>
                        <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                          Submit Now
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="h-3 w-3 mr-1 text-red-700" />
                      Due: {assignment.dueDate}
                    </div>
                    <div className="bg-white p-3 rounded-md border border-red-200">
                      <p className="text-sm font-medium text-red-700 mb-1">Late Submission Policy:</p>
                      <p className="text-sm text-gray-600">{assignment.latePolicy}</p>
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
