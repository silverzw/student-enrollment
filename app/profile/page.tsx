import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Mail, Phone, MapPin, Calendar, BookOpen, GraduationCap, Shield } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Student Profile</h1>
        <Button className="bg-blue-700 hover:bg-blue-800">Save Changes</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-blue-100 md:col-span-1">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                <AvatarFallback className="text-2xl bg-blue-100 text-blue-700">JD</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-blue-900">John Doe</CardTitle>
            <CardDescription>Student ID: 1234567</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-500">john.doe@university.edu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-gray-500">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-gray-500">123 Campus Drive, University City, UC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">Date of Birth</p>
                  <p className="text-sm text-gray-500">January 15, 2000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">Major</p>
                  <p className="text-sm text-gray-500">Computer Science</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-blue-700" />
                <div>
                  <p className="text-sm font-medium">Academic Status</p>
                  <p className="text-sm text-gray-500">Junior (3rd Year)</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full text-blue-700 border-blue-200 hover:bg-blue-50">
              Change Password
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full bg-blue-50 border border-blue-100">
              <TabsTrigger
                value="personal"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Personal Information
              </TabsTrigger>
              <TabsTrigger
                value="academic"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Academic Information
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="flex-1 data-[state=active]:bg-white data-[state=active]:text-blue-700"
              >
                Account Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" className="border-blue-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" className="border-blue-200" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@university.edu" className="border-blue-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue="(123) 456-7890" className="border-blue-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="2000-01-15" className="border-blue-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      defaultValue="123 Campus Drive, University City, UC 12345"
                      className="border-blue-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    <Input
                      id="emergency"
                      defaultValue="Jane Doe (Parent) - (987) 654-3210"
                      className="border-blue-200"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Academic Information</CardTitle>
                  <CardDescription>Your academic details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input id="studentId" defaultValue="1234567" disabled className="bg-gray-50 border-blue-100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="enrollmentYear">Enrollment Year</Label>
                      <Input id="enrollmentYear" defaultValue="2022" disabled className="bg-gray-50 border-blue-100" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="major">Major</Label>
                    <Select defaultValue="cs">
                      <SelectTrigger className="border-blue-200">
                        <SelectValue placeholder="Select a major" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="eng">English</SelectItem>
                        <SelectItem value="phys">Physics</SelectItem>
                        <SelectItem value="bio">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="minor">Minor (Optional)</Label>
                    <Select>
                      <SelectTrigger className="border-blue-200">
                        <SelectValue placeholder="Select a minor (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="math">Mathematics</SelectItem>
                        <SelectItem value="eng">English</SelectItem>
                        <SelectItem value="phys">Physics</SelectItem>
                        <SelectItem value="bio">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="advisor">Academic Advisor</Label>
                    <Input id="advisor" defaultValue="Dr. Jane Smith" className="border-blue-200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectedGraduation">Expected Graduation</Label>
                    <Select defaultValue="may2026">
                      <SelectTrigger className="border-blue-200">
                        <SelectValue placeholder="Select expected graduation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dec2025">December 2025</SelectItem>
                        <SelectItem value="may2026">May 2026</SelectItem>
                        <SelectItem value="dec2026">December 2026</SelectItem>
                        <SelectItem value="may2027">May 2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Academic Interests</Label>
                    <Textarea
                      placeholder="Describe your academic interests and goals..."
                      defaultValue="Artificial Intelligence, Machine Learning, and Data Science. I'm interested in pursuing graduate studies in AI."
                      className="border-blue-200"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-4">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-900">Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-blue-900">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="courseUpdates">Course Updates</Label>
                          <p className="text-xs text-gray-500">
                            Receive notifications about course changes and announcements
                          </p>
                        </div>
                        <Switch id="courseUpdates" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="assignmentReminders">Assignment Reminders</Label>
                          <p className="text-xs text-gray-500">
                            Get reminders about upcoming assignments and deadlines
                          </p>
                        </div>
                        <Switch id="assignmentReminders" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="gradeNotifications">Grade Notifications</Label>
                          <p className="text-xs text-gray-500">Be notified when new grades are posted</p>
                        </div>
                        <Switch id="gradeNotifications" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="systemAnnouncements">System Announcements</Label>
                          <p className="text-xs text-gray-500">Receive important system-wide announcements</p>
                        </div>
                        <Switch id="systemAnnouncements" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-blue-900">Privacy Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="directoryListing">Directory Listing</Label>
                          <p className="text-xs text-gray-500">
                            Allow your basic information to be visible in the student directory
                          </p>
                        </div>
                        <Switch id="directoryListing" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="profileVisibility">Profile Visibility</Label>
                          <p className="text-xs text-gray-500">Make your profile visible to other students</p>
                        </div>
                        <Switch id="profileVisibility" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-blue-900">Security</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                          <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
                        </div>
                        <Switch id="twoFactorAuth" />
                      </div>
                      <div className="pt-2">
                        <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                          <Shield className="h-4 w-4 mr-2" />
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-blue-50 pt-4">
                  <Button variant="outline" className="text-blue-700 border-blue-200 hover:bg-blue-50">
                    Cancel
                  </Button>
                  <Button className="bg-blue-700 hover:bg-blue-800">Save Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  )
}
