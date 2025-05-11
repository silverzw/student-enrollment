"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Users,
  Clock,
  Calendar,
  MapPin,
  FileText,
  ArrowLeft,
  Star,
  MessageSquare,
  Download,
  Loader2,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import { courseService } from "@/services/course-service"
import { assignmentService } from "@/services/assignment-service"
import { useToast } from "@/hooks/use-toast"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState(null)
  const [assignments, setAssignments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isEnrolling, setIsEnrolling] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const loadCourseData = async () => {
      setIsLoading(true)
      try {
        const courseData = await courseService.getCourseById(params.id)
        if (!courseData) {
          toast({
            title: "Error",
            description: "Course not found",
            variant: "destructive",
          })
          return
        }
        setCourse(courseData)

        // Load course assignments
        const assignmentData = await assignmentService.getAssignmentsByCourse(params.id)
        setAssignments(assignmentData)
      } catch (error) {
        console.error("Failed to load course data:", error)
        toast({
          title: "Error",
          description: "Failed to load course data",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadCourseData()
  }, [params.id, toast])

  const handleRegister = async () => {
    setIsEnrolling(true)
    try {
      const result = await courseService.enrollInCourse(params.id)
      if (result.success) {
        toast({
          title: "Success",
          description: "Successfully registered for course",
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register for course",
        variant: "destructive",
      })
    } finally {
      setIsEnrolling(false)
    }
  }

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-blue-700" />
        </div>
      </DashboardLayout>
    )
  }

  if (!course) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link href="/courses">
            <Button className="bg-blue-700 hover:bg-blue-800">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Courses
            </Button>
          </Link>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="flex items-center gap-2 mb-6">
        <Link href="/courses">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-blue-100">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                  {course.id}
                </Badge>
                <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                  {course.credits} Credits
                </Badge>
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {tag}
                  </Badge>
                ))}
                <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                  {course.level}
                </Badge>
              </div>
              <CardTitle className="text-2xl text-blue-900">{course.name}</CardTitle>
              <CardDescription>{course.department}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">{course.description}</p>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="text-sm font-medium">Instructor</p>
                    <p className="text-sm text-gray-600">{course.instructor}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="text-sm font-medium">Schedule</p>
                    <p className="text-sm text-gray-600">{course.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-600">{course.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="text-sm font-medium">Prerequisites</p>
                    <p className="text-sm text-gray-600">{course.prerequisites}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500">(65 reviews)</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-500">178 students enrolled</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Course Progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3 border-t border-blue-50 pt-4">
              <Button className="bg-blue-700 hover:bg-blue-800" onClick={handleRegister} disabled={isEnrolling}>
                {isEnrolling ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register for Course"
                )}
              </Button>
              <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                Add to Wishlist
              </Button>
              <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                <Calendar className="h-4 w-4 mr-2" />
                Add to Calendar
              </Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="syllabus" className="w-full">
            <TabsList className="w-full bg-blue-50 border border-blue-100">
              <TabsTrigger
                value="syllabus"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Syllabus
              </TabsTrigger>
              <TabsTrigger
                value="assignments"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Assignments
              </TabsTrigger>
              <TabsTrigger
                value="materials"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Materials
              </TabsTrigger>
              <TabsTrigger
                value="discussions"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Discussions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="syllabus" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Course Syllabus</CardTitle>
                  <CardDescription>Detailed course information and policies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-900">Course Description</h3>
                    <p className="text-gray-700">{course.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-900">Learning Objectives</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Understand fundamental concepts in {course.department}</li>
                      <li>Develop critical thinking and problem-solving skills</li>
                      <li>Apply theoretical knowledge to practical scenarios</li>
                      <li>Communicate ideas effectively through written and oral presentations</li>
                      <li>Collaborate with peers on group projects and discussions</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-900">Required Materials</h3>
                    <div className="flex items-start gap-3 p-3 border border-blue-100 rounded-md">
                      <BookOpen className="h-5 w-5 text-blue-700 mt-0.5" />
                      <div>
                        <p className="font-medium">Introduction to {course.name}</p>
                        <p className="text-sm text-gray-600">
                          by {course.instructor.replace("Dr. ", "").replace("Prof. ", "")}
                        </p>
                        <p className="text-sm text-gray-600">
                          ISBN: 978-{Math.floor(Math.random() * 9000000000 + 1000000000)}
                        </p>
                        <Badge className="mt-1 bg-blue-100 text-blue-800 hover:bg-blue-200">Required</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-900">Grading Policy</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="font-medium">Assignments</p>
                        <p className="text-gray-700">30%</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="font-medium">Midterm Exam</p>
                        <p className="text-gray-700">25%</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="font-medium">Final Exam</p>
                        <p className="text-gray-700">30%</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="font-medium">Participation</p>
                        <p className="text-gray-700">15%</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-blue-900">Course Policies</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>
                        <span className="font-medium">Attendance:</span> Regular attendance is expected. More than three
                        unexcused absences will affect your grade.
                      </p>
                      <p>
                        <span className="font-medium">Late Work:</span> Assignments submitted late will be penalized 10%
                        per day, up to a maximum of 50%.
                      </p>
                      <p>
                        <span className="font-medium">Academic Integrity:</span> Plagiarism and cheating will not be
                        tolerated and may result in course failure.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-blue-50 pt-4">
                  <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                    <Download className="h-4 w-4 mr-2" />
                    Download Syllabus PDF
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="assignments" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Course Assignments</CardTitle>
                  <CardDescription>Upcoming and past assignments for this course</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assignments.length === 0 ? (
                      <div className="text-center py-8">
                        <FileText className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                        <h3 className="text-lg font-medium text-blue-900 mb-2">No assignments yet</h3>
                        <p className="text-gray-500">Check back later for course assignments</p>
                      </div>
                    ) : (
                      assignments.map((assignment) => (
                        <div
                          key={assignment.id}
                          className="flex items-start justify-between p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <FileText className="h-5 w-5 text-blue-700" />
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-900">{assignment.title}</h4>
                              <div className="text-sm text-gray-600">
                                Due: {new Date(assignment.dueDate).toLocaleDateString()} • Weight:{" "}
                                {assignment.maxPoints} points
                              </div>
                              <div className="mt-2 flex gap-2">
                                <Badge
                                  variant="outline"
                                  className={
                                    assignment.status === "Completed"
                                      ? "text-green-700 border-green-200 bg-green-50"
                                      : assignment.status === "In Progress"
                                        ? "text-blue-700 border-blue-200 bg-blue-50"
                                        : "text-gray-700 border-gray-200 bg-gray-50"
                                  }
                                >
                                  {assignment.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Link href={`/assignments/${assignment.id}`}>
                              <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Course Materials</CardTitle>
                  <CardDescription>Lecture notes, readings, and additional resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-blue-100 rounded-lg">
                      <h3 className="font-medium text-blue-900 mb-3">Week 1: Introduction</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-700" />
                            <span>Lecture Slides - Introduction</span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-700" />
                            <span>Reading: Chapter 1</span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-blue-100 rounded-lg">
                      <h3 className="font-medium text-blue-900 mb-3">Week 2: Core Concepts</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-700" />
                            <span>Lecture Slides - Core Concepts</span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-700" />
                            <span>Reading: Chapter 2</span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-700" />
                            <span>Supplementary Materials</span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-blue-100 rounded-lg">
                      <h3 className="font-medium text-blue-900 mb-3">Additional Resources</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-700" />
                            <span>Study Guide</span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-700" />
                            <span>Practice Problems</span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-blue-700 hover:bg-blue-100">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussions" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Course Discussions</CardTitle>
                  <CardDescription>Engage with your instructor and classmates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium text-blue-900">Discussion Boards</h3>
                      <Button size="sm" className="bg-blue-700 hover:bg-blue-800">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        New Thread
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback className="bg-blue-100 text-blue-700">JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-blue-900">Question about Assignment 1</h4>
                              <Badge className="bg-green-100 text-green-800">Active</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Started by John Doe • 2 days ago • 5 replies</p>
                            <p className="mt-2 text-gray-700">
                              I'm having trouble understanding the requirements for the first assignment. Could someone
                              clarify...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback className="bg-blue-100 text-blue-700">AT</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-blue-900">Study Group for Midterm</h4>
                              <Badge className="bg-green-100 text-green-800">Active</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              Started by Dr. Alan Turing • 1 week ago • 12 replies
                            </p>
                            <p className="mt-2 text-gray-700">
                              I'm organizing a study group for the upcoming midterm. We'll meet in the library on...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                            <AvatarFallback className="bg-blue-100 text-blue-700">SM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-blue-900">Additional Resources</h4>
                              <Badge className="bg-gray-100 text-gray-800">Closed</Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              Started by Sarah Miller • 3 weeks ago • 8 replies
                            </p>
                            <p className="mt-2 text-gray-700">
                              I found some great resources that might help everyone with the course material...
                            </p>
                          </div>
                        </div>
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
            <CardHeader>
              <CardTitle className="text-blue-900">Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center mb-4">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={course.instructor} />
                  <AvatarFallback className="text-xl bg-blue-100 text-blue-700">
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-lg text-blue-900">{course.instructor}</h3>
                <p className="text-sm text-gray-600">{course.department}</p>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Ph.D. in {course.department} with over 15 years of teaching experience. Research interests include
                artificial intelligence and computational theory.
              </p>
              <Button variant="outline" className="w-full text-blue-700 border-blue-200 hover:bg-blue-50">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Instructor
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-blue-50">
                <span className="text-sm font-medium">Department</span>
                <span className="text-sm text-gray-600">{course.department}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-blue-50">
                <span className="text-sm font-medium">Course Code</span>
                <span className="text-sm text-gray-600">{course.id}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-blue-50">
                <span className="text-sm font-medium">Credits</span>
                <span className="text-sm text-gray-600">{course.credits}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-blue-50">
                <span className="text-sm font-medium">Term</span>
                <span className="text-sm text-gray-600">Spring 2025</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-blue-50">
                <span className="text-sm font-medium">Level</span>
                <span className="text-sm text-gray-600">{course.level}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-blue-50">
                <span className="text-sm font-medium">Format</span>
                <span className="text-sm text-gray-600">{course.tags.includes("Online") ? "Online" : "In-Person"}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Available Seats</span>
                <span className="text-sm text-gray-600">
                  {course.seats.available} of {course.seats.total}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Related Courses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 border border-blue-100 rounded-md hover:bg-blue-50 transition-colors">
                <BookOpen className="h-5 w-5 text-blue-700 mt-0.5" />
                <div>
                  <Link href="/courses/CS201" className="font-medium text-blue-900 hover:text-blue-700">
                    CS201: Data Structures
                  </Link>
                  <p className="text-sm text-gray-600">Computer Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-blue-100 rounded-md hover:bg-blue-50 transition-colors">
                <BookOpen className="h-5 w-5 text-blue-700 mt-0.5" />
                <div>
                  <Link href="/courses/CS301" className="font-medium text-blue-900 hover:text-blue-700">
                    CS301: Algorithms
                  </Link>
                  <p className="text-sm text-gray-600">Computer Science</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-blue-100 rounded-md hover:bg-blue-50 transition-colors">
                <BookOpen className="h-5 w-5 text-blue-700 mt-0.5" />
                <div>
                  <Link href="/courses/MATH101" className="font-medium text-blue-900 hover:text-blue-700">
                    MATH101: Calculus I
                  </Link>
                  <p className="text-sm text-gray-600">Mathematics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
