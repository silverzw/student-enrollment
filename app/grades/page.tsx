import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Download, Printer, BarChart2, PieChart, TrendingUp, Award } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

export default function GradesPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Academic Records</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-6">
        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Current GPA</CardDescription>
            <CardTitle className="text-blue-900">3.75</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm">Dean's List</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Cumulative GPA</CardDescription>
            <CardTitle className="text-blue-900">3.82</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span className="text-sm">+0.05 from last semester</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Credits Completed</CardDescription>
            <CardTitle className="text-blue-900">75</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-blue-700">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm">of 120 required</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100">
          <CardHeader className="pb-2">
            <CardDescription>Academic Standing</CardDescription>
            <CardTitle className="text-blue-900">Excellent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-green-700">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm">Good Academic Standing</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        <div className="lg:col-span-2">
          <Card className="border-blue-100 h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-blue-900">GPA Trend</CardTitle>
                  <CardDescription>Your GPA progression over time</CardDescription>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-40 border-blue-200">
                    <SelectValue placeholder="Select Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                    <SelectItem value="recent">Recent Semesters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <BarChart2 className="h-16 w-16 text-blue-200 mx-auto mb-4" />
                  <p className="text-blue-900 font-medium">GPA Trend Visualization</p>
                  <p className="text-sm text-gray-500">Shows your academic performance over time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-blue-100 h-full">
            <CardHeader>
              <CardTitle className="text-blue-900">Grade Distribution</CardTitle>
              <CardDescription>Breakdown of your grades</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-16 w-16 text-blue-200 mx-auto mb-4" />
                  <p className="text-blue-900 font-medium">Grade Distribution Chart</p>
                  <p className="text-sm text-gray-500">Visual breakdown of your grades</p>
                </div>
              </div>
            </CardContent>
          \
