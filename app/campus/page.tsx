"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Building, Calendar, ExternalLink, Mail, MapPin, Phone, Search, User } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock faculty data
const facultyData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Professor",
    department: "Computer Science",
    email: "sjohnson@university.edu",
    phone: "(555) 123-4567",
    office: "Science Building, Room 305",
    officeHours: "Mon/Wed 2:00 PM - 4:00 PM",
    courses: ["CS 101", "CS 401"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    title: "Associate Professor",
    department: "Chemistry",
    email: "mrodriguez@university.edu",
    phone: "(555) 123-4568",
    office: "Chemistry Building, Room 210",
    officeHours: "Tue/Thu 1:00 PM - 3:00 PM",
    courses: ["CHEM 101", "CHEM 301"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    title: "Assistant Professor",
    department: "Mathematics",
    email: "echen@university.edu",
    phone: "(555) 123-4569",
    office: "Math Building, Room 405",
    officeHours: "Mon/Fri 10:00 AM - 12:00 PM",
    courses: ["MATH 101", "MATH 201"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    title: "Professor",
    department: "Physics",
    email: "jwilson@university.edu",
    phone: "(555) 123-4570",
    office: "Science Building, Room 410",
    officeHours: "Wed/Fri 3:00 PM - 5:00 PM",
    courses: ["PHYS 101", "PHYS 301"],
    image: "/placeholder.svg?height=40&width=40",
  },
]

// Mock buildings data
const buildingsData = [
  {
    id: 1,
    name: "Science Building",
    code: "SCI",
    address: "123 University Ave",
    departments: ["Computer Science", "Physics", "Biology"],
    facilities: ["Computer Labs", "Research Labs", "Lecture Halls"],
    hours: "7:00 AM - 10:00 PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Mathematics Building",
    code: "MATH",
    address: "125 University Ave",
    departments: ["Mathematics", "Statistics"],
    facilities: ["Classrooms", "Study Areas", "Faculty Offices"],
    hours: "7:00 AM - 9:00 PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Student Center",
    code: "STUC",
    address: "130 University Ave",
    departments: ["Student Services", "Dining Services"],
    facilities: ["Cafeteria", "Bookstore", "Meeting Rooms", "Recreation Area"],
    hours: "6:00 AM - 11:00 PM",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Library",
    code: "LIB",
    address: "140 University Ave",
    departments: ["Library Services"],
    facilities: ["Study Rooms", "Computer Lab", "Archives", "Media Center"],
    hours: "8:00 AM - 12:00 AM",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CampusPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("map")

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Campus Resources</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Calendar className="h-4 w-4 mr-2" />
            Room Reservations
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <MapPin className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
          placeholder="Search for buildings, faculty, or departments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="map" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="map">Campus Map</TabsTrigger>
          <TabsTrigger value="buildings">Buildings</TabsTrigger>
          <TabsTrigger value="directory">Faculty Directory</TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Interactive Campus Map</CardTitle>
              <CardDescription>Explore our campus facilities and find your way around</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative rounded-md overflow-hidden bg-gray-100 h-[500px] mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-blue-200" />
                  <span className="absolute text-blue-900 font-medium">Interactive Map</span>
                </div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded-md shadow-md">
                  <div className="text-sm font-medium mb-2">Legend</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs">Academic Buildings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">Residence Halls</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-xs">Dining Facilities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-xs">Recreation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find My Location
                </Button>
                <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                  <Building className="h-4 w-4 mr-2" />
                  Building List
                </Button>
                <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Full Screen
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Popular Destinations</CardTitle>
                <CardDescription>Frequently visited locations on campus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Student Center</h4>
                      <p className="text-sm text-gray-500 mt-1">130 University Ave</p>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        Get Directions
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Library</h4>
                      <p className="text-sm text-gray-500 mt-1">140 University Ave</p>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        Get Directions
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Science Building</h4>
                      <p className="text-sm text-gray-500 mt-1">123 University Ave</p>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        Get Directions
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Recreation Center</h4>
                      <p className="text-sm text-gray-500 mt-1">150 University Ave</p>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Campus Services</CardTitle>
                <CardDescription>Important services and their locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Student Services</h4>
                      <p className="text-sm text-gray-500 mt-1">Student Center, Room 101</p>
                      <div className="text-sm text-gray-500">Hours: 8:00 AM - 5:00 PM (Mon-Fri)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Financial Aid Office</h4>
                      <p className="text-sm text-gray-500 mt-1">Administration Building, Room 205</p>
                      <div className="text-sm text-gray-500">Hours: 9:00 AM - 4:00 PM (Mon-Fri)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">IT Help Desk</h4>
                      <p className="text-sm text-gray-500 mt-1">Library, 1st Floor</p>
                      <div className="text-sm text-gray-500">Hours: 8:00 AM - 8:00 PM (Mon-Fri)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Academic Advising</h4>
                      <p className="text-sm text-gray-500 mt-1">Student Center, Room 202</p>
                      <div className="text-sm text-gray-500">Hours: 9:00 AM - 5:00 PM (Mon-Fri)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="buildings" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {buildingsData.map((building) => (
              <Card key={building.id} className="border-blue-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-blue-900">{building.name}</CardTitle>
                      <CardDescription>{building.address}</CardDescription>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">{building.code}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md overflow-hidden bg-gray-100 mb-3 h-[150px]">
                    <img
                      src={building.image || "/placeholder.svg"}
                      alt={building.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Departments:</span>
                      <div className="font-medium">{building.departments.join(", ")}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Hours:</span>
                      <div className="font-medium">{building.hours}</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Facilities:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {building.facilities.map((facility) => (
                        <Badge key={facility} variant="outline" className="text-xs font-normal">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                    <Calendar className="h-4 w-4 mr-2" />
                    Room Schedule
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="text-blue-700 border-blue-200">
              View All Buildings
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="directory" className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Faculty Directory</CardTitle>
              <CardDescription>Contact information for university faculty</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Office</TableHead>
                    <TableHead>Office Hours</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facultyData.map((faculty) => (
                    <TableRow key={faculty.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={faculty.image || "/placeholder.svg"} alt={faculty.name} />
                            <AvatarFallback>
                              {faculty.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{faculty.name}</div>
                            <div className="text-xs text-gray-500">{faculty.title}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{faculty.department}</TableCell>
                      <TableCell>{faculty.office}</TableCell>
                      <TableCell>{faculty.officeHours}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center text-xs">
                            <Mail className="h-3 w-3 mr-1 text-gray-500" />
                            <span>{faculty.email}</span>
                          </div>
                          <div className="flex items-center text-xs">
                            <Phone className="h-3 w-3 mr-1 text-gray-500" />
                            <span>{faculty.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Calendar className="h-4 w-4" />
                            <span className="sr-only">Schedule Meeting</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="ml-auto text-blue-600">
                View Full Directory
              </Button>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Departments</CardTitle>
                <CardDescription>Academic departments and contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Computer Science Department</h4>
                      <p className="text-sm text-gray-500 mt-1">Science Building, Room 300</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4500</div>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        View Faculty
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Mathematics Department</h4>
                      <p className="text-sm text-gray-500 mt-1">Mathematics Building, Room 400</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4600</div>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        View Faculty
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Chemistry Department</h4>
                      <p className="text-sm text-gray-500 mt-1">Science Building, Room 200</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4700</div>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        View Faculty
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Physics Department</h4>
                      <p className="text-sm text-gray-500 mt-1">Science Building, Room 400</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4800</div>
                      <Button variant="link" size="sm" className="h-6 p-0 text-blue-600">
                        View Faculty
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-900">Administrative Offices</CardTitle>
                <CardDescription>Key administrative contacts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Office of the Registrar</h4>
                      <p className="text-sm text-gray-500 mt-1">Administration Building, Room 101</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4000</div>
                      <div className="text-sm text-gray-500">Email: registrar@university.edu</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Financial Aid Office</h4>
                      <p className="text-sm text-gray-500 mt-1">Administration Building, Room 205</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4100</div>
                      <div className="text-sm text-gray-500">Email: finaid@university.edu</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Student Affairs</h4>
                      <p className="text-sm text-gray-500 mt-1">Student Center, Room 300</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4200</div>
                      <div className="text-sm text-gray-500">Email: studentaffairs@university.edu</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">IT Services</h4>
                      <p className="text-sm text-gray-500 mt-1">Library, 1st Floor</p>
                      <div className="text-sm text-gray-500">Phone: (555) 123-4300</div>
                      <div className="text-sm text-gray-500">Email: helpdesk@university.edu</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
