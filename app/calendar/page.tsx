"use client"

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight, Plus, Filter } from "lucide-react"
import { format, addMonths, subMonths } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/dashboard-layout"

// Mock events data
const events = [
  {
    id: 1,
    title: "Introduction to Computer Science Lecture",
    date: "2025-05-13T10:00:00",
    endDate: "2025-05-13T11:30:00",
    location: "Science Building, Room 101",
    type: "class",
    course: "CS 101",
  },
  {
    id: 2,
    title: "Programming Assignment Due",
    date: "2025-05-15T23:59:00",
    type: "assignment",
    course: "CS 101",
  },
  {
    id: 3,
    title: "Student Council Meeting",
    date: "2025-05-14T15:00:00",
    endDate: "2025-05-14T16:30:00",
    location: "Student Center, Room 202",
    type: "event",
  },
  {
    id: 4,
    title: "Midterm Exam: Calculus",
    date: "2025-05-20T13:00:00",
    endDate: "2025-05-20T15:00:00",
    location: "Math Building, Room 305",
    type: "exam",
    course: "MATH 201",
  },
  {
    id: 5,
    title: "Career Fair",
    date: "2025-05-22T10:00:00",
    endDate: "2025-05-22T16:00:00",
    location: "University Center",
    type: "event",
  },
]

// Helper function to group events by date
function groupEventsByDate(events) {
  const grouped = {}

  events.forEach((event) => {
    const dateKey = event.date.split("T")[0]
    if (!grouped[dateKey]) {
      grouped[dateKey] = []
    }
    grouped[dateKey].push(event)
  })

  return grouped
}

// Event type to badge color mapping
const eventTypeColors = {
  class: "bg-blue-100 text-blue-800",
  assignment: "bg-amber-100 text-amber-800",
  exam: "bg-red-100 text-red-800",
  event: "bg-purple-100 text-purple-800",
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState("month")

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  // Group events by date
  const groupedEvents = groupEventsByDate(events)

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Academic Calendar</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <Card className="border-blue-100 mb-6">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-blue-900">Calendar</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium">{format(currentDate, "MMMM yyyy")}</span>
              <Button variant="ghost" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <CardDescription>Manage your schedule and upcoming events</CardDescription>
            <Tabs defaultValue="month" className="w-[300px]" onValueChange={setView}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar grid would go here - simplified for this example */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-sm">
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className={`min-h-[100px] p-1 border rounded-md ${i % 7 === 0 || i % 7 === 6 ? "bg-gray-50" : "bg-white"}`}
              >
                <div className="font-medium text-gray-500 mb-1">{(i + 1) % 31 || 31}</div>
                {i === 12 && (
                  <div className="flex flex-col gap-1">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 justify-start font-normal text-xs">
                      CS 101 Lecture
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 justify-start font-normal text-xs">
                      Assignment Due
                    </Badge>
                  </div>
                )}
                {i === 13 && (
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 justify-start font-normal text-xs">
                    Student Council
                  </Badge>
                )}
                {i === 19 && (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 justify-start font-normal text-xs">
                    Calculus Exam
                  </Badge>
                )}
                {i === 21 && (
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 justify-start font-normal text-xs">
                    Career Fair
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-900">Upcoming Events</CardTitle>
            <CardDescription>Your schedule for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="flex flex-col items-center justify-center bg-blue-50 rounded-md p-2 min-w-[50px]">
                  <span className="text-xs text-blue-600">{format(new Date(event.date), "MMM")}</span>
                  <span className="text-lg font-bold text-blue-900">{format(new Date(event.date), "d")}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-blue-900">{event.title}</h4>
                    <Badge className={eventTypeColors[event.type]}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {format(new Date(event.date), "h:mm a")}
                    {event.endDate && ` - ${format(new Date(event.endDate), "h:mm a")}`}
                  </div>
                  {event.location && <div className="text-sm text-gray-500">{event.location}</div>}
                  {event.course && <div className="text-sm text-blue-600 mt-1">{event.course}</div>}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              View All Events
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-900">Academic Deadlines</CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
              <div className="flex flex-col items-center justify-center bg-red-50 rounded-md p-2 min-w-[50px]">
                <span className="text-xs text-red-600">May</span>
                <span className="text-lg font-bold text-red-900">15</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-900">Course Drop Deadline</h4>
                <p className="text-sm text-gray-500 mt-1">Last day to drop courses without academic penalty</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
              <div className="flex flex-col items-center justify-center bg-amber-50 rounded-md p-2 min-w-[50px]">
                <span className="text-xs text-amber-600">May</span>
                <span className="text-lg font-bold text-amber-900">20</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-900">Financial Aid Application</h4>
                <p className="text-sm text-gray-500 mt-1">Deadline for next semester's financial aid applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
              <div className="flex flex-col items-center justify-center bg-green-50 rounded-md p-2 min-w-[50px]">
                <span className="text-xs text-green-600">Jun</span>
                <span className="text-lg font-bold text-green-900">01</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-900">Course Registration Opens</h4>
                <p className="text-sm text-gray-500 mt-1">Registration for Fall 2025 semester begins</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center justify-center bg-purple-50 rounded-md p-2 min-w-[50px]">
                <span className="text-xs text-purple-600">Jun</span>
                <span className="text-lg font-bold text-purple-900">15</span>
              </div>
              <div>
                <h4 className="font-medium text-blue-900">Final Exam Schedule Posted</h4>
                <p className="text-sm text-gray-500 mt-1">Final examination schedule will be available</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              View Academic Calendar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}
