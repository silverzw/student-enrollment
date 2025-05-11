"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, Users, Clock, Filter, Loader2 } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"
import { courseService } from "@/services/course-service"
import { useToast } from "@/hooks/use-toast"

export default function CoursesPage() {
  const [courses, setCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [department, setDepartment] = useState("all")
  const [semester, setSemester] = useState("spring2025")
  const [activeTab, setActiveTab] = useState("all")
  const { toast } = useToast()

  useEffect(() => {
    const loadCourses = async () => {
      setIsLoading(true)
      try {
        const data = await courseService.getAllCourses()
        setCourses(data)
        setFilteredCourses(data)
      } catch (error) {
        console.error("Failed to load courses:", error)
        toast({
          title: "Error",
          description: "Failed to load courses. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadCourses()
  }, [toast])

  useEffect(() => {
    const filterCourses = async () => {
      setIsLoading(true)
      try {
        let filtered = await courseService.searchCourses(searchQuery, { department })

        // Apply tab filter
        if (activeTab !== "all") {
          filtered = filtered.filter((course) => {
            if (activeTab === "undergraduate") return course.level === "Undergraduate"
            if (activeTab === "graduate") return course.level === "Graduate"
            if (activeTab === "online") return course.tags.includes("Online")
            return true
          })
        }

        setFilteredCourses(filtered)
      } catch (error) {
        console.error("Failed to filter courses:", error)
      } finally {
        setIsLoading(false)
      }
    }

    filterCourses()
  }, [searchQuery, department, activeTab])

  const handleAddToCart = async (courseId) => {
    try {
      const result = await courseService.enrollInCourse(courseId)
      if (result.success) {
        toast({
          title: "Success",
          description: "Course added to your cart",
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
        description: "Failed to add course to cart",
        variant: "destructive",
      })
    }
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Course Catalog</h1>
        <Link href="/courses/registration">
          <Button className="bg-blue-700 hover:bg-blue-800">Registration Portal</Button>
        </Link>
      </div>

      <div className="grid gap-6 mb-6">
        <Card className="border-blue-100">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search courses by name, code, or instructor..."
                    className="pl-9 border-blue-200 focus-visible:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger className="border-blue-200">
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-blue-700" />
                      <SelectValue placeholder="Department" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="computer science">Computer Science</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={semester} onValueChange={setSemester}>
                  <SelectTrigger className="border-blue-200">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-700" />
                      <SelectValue placeholder="Semester" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spring2025">Spring 2025</SelectItem>
                    <SelectItem value="fall2024">Fall 2024</SelectItem>
                    <SelectItem value="summer2024">Summer 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="mb-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-blue-50 border border-blue-100">
          <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
            All Courses
          </TabsTrigger>
          <TabsTrigger value="undergraduate" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
            Undergraduate
          </TabsTrigger>
          <TabsTrigger value="graduate" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
            Graduate
          </TabsTrigger>
          <TabsTrigger value="online" className="data-[state=active]:bg-white data-[state=active]:text-blue-700">
            Online
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-700" />
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-medium text-blue-900 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="border-blue-100 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                            {course.id}
                          </Badge>
                          <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                            {course.credits} Credits
                          </Badge>
                        </div>
                        <CardTitle className="text-blue-900">{course.name}</CardTitle>
                        <CardDescription>{course.department}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-blue-700" />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-blue-700" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-700" />
                        <span>
                          {course.seats.available} of {course.seats.total} seats available
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {course.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {tag}
                          </Badge>
                        ))}
                        <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-blue-50 pt-4">
                    <Link href={`/courses/${course.id}`}>
                      <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      className="bg-blue-700 hover:bg-blue-800"
                      onClick={() => handleAddToCart(course.id)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {["undergraduate", "graduate", "online"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-blue-700" />
              </div>
            ) : filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-lg font-medium text-blue-900 mb-2">No {tab} courses found</h3>
                <p className="text-gray-500">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCourses.map((course) => (
                  <Card key={course.id} className="border-blue-100 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                              {course.id}
                            </Badge>
                            <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
                              {course.credits} Credits
                            </Badge>
                          </div>
                          <CardTitle className="text-blue-900">{course.name}</CardTitle>
                          <CardDescription>{course.department}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 mr-2 text-blue-700" />
                          <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-blue-700" />
                          <span>{course.schedule}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <BookOpen className="h-4 w-4 mr-2 text-blue-700" />
                          <span>
                            {course.seats.available} of {course.seats.total} seats available
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {course.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                          <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                            {course.level}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t border-blue-50 pt-4">
                      <Link href={`/courses/${course.id}`}>
                        <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        className="bg-blue-700 hover:bg-blue-800"
                        onClick={() => handleAddToCart(course.id)}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-700 text-white hover:bg-blue-800 border-blue-700">
            1
          </Button>
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            2
          </Button>
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            3
          </Button>
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            Next
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
