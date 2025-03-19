"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import type { Student } from "@/components/student-list"

export default function EditStudent() {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const [formData, setFormData] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get the student ID from the URL
    const studentId = params.id as string

    // Get students from localStorage
    const students = JSON.parse(localStorage.getItem("students") || "[]")

    // Find the student with the matching ID
    const student = students.find((s: Student) => s.id === studentId)

    if (student) {
      setFormData(student)
    } else {
      // Student not found, redirect to home page
      toast({
        title: "Student not found",
        description: "The student you're trying to edit doesn't exist.",
        variant: "destructive",
      })
      router.push("/")
    }

    setLoading(false)
  }, [params.id, router, toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return

    const { name, value } = e.target
    setFormData((prev) => ({ ...prev!, [name]: value }))
  }

  const handleProgramChange = (value: string) => {
    if (!formData) return

    setFormData((prev) => ({ ...prev!, program: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData) return

    // Get existing students from localStorage
    const students = JSON.parse(localStorage.getItem("students") || "[]")

    // Find the index of the student to update
    const studentIndex = students.findIndex((s: Student) => s.id === formData.id)

    if (studentIndex !== -1) {
      // Update the student
      students[studentIndex] = formData

      // Save to localStorage
      localStorage.setItem("students", JSON.stringify(students))

      toast({
        title: "Student updated",
        description: "The student information has been updated successfully.",
      })

      // Redirect to home page
      router.push("/")
    }
  }

  if (loading) {
    return <div className="container mx-auto py-10 text-center">Loading...</div>
  }

  if (!formData) {
    return <div className="container mx-auto py-10 text-center">Student not found</div>
  }

  return (
    <div className="container mx-auto py-10">
      <Link href="/" className="flex items-center text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Students
      </Link>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Edit Student</CardTitle>
          <CardDescription>Update the student's information in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" name="studentId" value={formData.studentId} onChange={handleChange} required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="program">Program</Label>
                <Select value={formData.program} onValueChange={handleProgramChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Business Administration">Business Administration</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Medicine">Medicine</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="enrollmentDate">Enrollment Date</Label>
                <Input
                  id="enrollmentDate"
                  name="enrollmentDate"
                  type="date"
                  value={formData.enrollmentDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit">Update Student</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

