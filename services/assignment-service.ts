const assignments = [
  {
    id: "1",
    title: "Algorithm Analysis Paper",
    courseId: "CS101",
    courseName: "Introduction to Computer Science",
    dueDate: "2025-05-15",
    status: "In Progress",
    progress: 60,
    priority: "High",
    description: "Write a 5-page paper analyzing the time and space complexity of the algorithms discussed in class.",
    submissionType: "Document",
    maxPoints: 100,
  },
  {
    id: "2",
    title: "Differential Equations Problem Set",
    courseId: "MATH201",
    courseName: "Calculus II",
    dueDate: "2025-05-18",
    status: "Not Started",
    progress: 0,
    priority: "Medium",
    description: "Complete problems 1-20 in Chapter 7 of the textbook.",
    submissionType: "Document",
    maxPoints: 50,
  },
  {
    id: "3",
    title: "Research Essay Draft",
    courseId: "ENG105",
    courseName: "Academic Writing",
    dueDate: "2025-05-20",
    status: "In Progress",
    progress: 30,
    priority: "Medium",
    description:
      "Submit a draft of your research essay, including thesis statement, outline, and at least 3 pages of content.",
    submissionType: "Document",
    maxPoints: 75,
  },
  {
    id: "4",
    title: "Lab Report: Momentum Conservation",
    courseId: "PHYS101",
    courseName: "Physics for Scientists",
    dueDate: "2025-05-22",
    status: "Not Started",
    progress: 0,
    priority: "Low",
    description: "Write a lab report on the momentum conservation experiment conducted in lab.",
    submissionType: "Document",
    maxPoints: 100,
  },
  {
    id: "5",
    title: "Programming Assignment 1",
    courseId: "CS101",
    courseName: "Introduction to Computer Science",
    dueDate: "2025-04-20",
    status: "Completed",
    progress: 100,
    priority: "High",
    description: "Implement a linked list data structure in Python or Java.",
    submissionType: "Code",
    maxPoints: 100,
    grade: 95,
    feedback: "Excellent work! Your code is well-structured and efficient.",
  },
  {
    id: "6",
    title: "Integration Techniques Quiz",
    courseId: "MATH201",
    courseName: "Calculus II",
    dueDate: "2025-04-10",
    status: "Completed",
    progress: 100,
    priority: "Medium",
    description: "Online quiz covering integration techniques from Chapter 5.",
    submissionType: "Online Quiz",
    maxPoints: 100,
    grade: 88,
    feedback: "Good understanding of basic techniques. Work on the more complex problems.",
  },
]

export const assignmentService = {
  getAllAssignments: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return assignments
  },

  getAssignmentById: async (id: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return assignments.find((assignment) => assignment.id === id)
  },

  getAssignmentsByCourse: async (courseId: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 400))
    return assignments.filter((assignment) => assignment.courseId === courseId)
  },

  getUpcomingAssignments: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const today = new Date()
    const twoWeeksLater = new Date()
    twoWeeksLater.setDate(today.getDate() + 14)

    return assignments.filter((assignment) => {
      const dueDate = new Date(assignment.dueDate)
      return dueDate >= today && dueDate <= twoWeeksLater && assignment.status !== "Completed"
    })
  },

  getCompletedAssignments: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return assignments.filter((assignment) => assignment.status === "Completed")
  },

  getOverdueAssignments: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const today = new Date()

    return assignments.filter((assignment) => {
      const dueDate = new Date(assignment.dueDate)
      return dueDate < today && assignment.status !== "Completed"
    })
  },

  updateAssignmentProgress: async (id: string, progress: number) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 400))

    const assignment = assignments.find((a) => a.id === id)
    if (!assignment) {
      return { success: false, message: "Assignment not found" }
    }

    assignment.progress = progress

    // Update status based on progress
    if (progress === 100) {
      assignment.status = "Completed"
    } else if (progress > 0) {
      assignment.status = "In Progress"
    } else {
      assignment.status = "Not Started"
    }

    return { success: true, message: "Progress updated successfully" }
  },

  submitAssignment: async (id: string, submission: any) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 700))

    const assignment = assignments.find((a) => a.id === id)
    if (!assignment) {
      return { success: false, message: "Assignment not found" }
    }

    // In a real app, this would save the submission to a database
    assignment.status = "Completed"
    assignment.progress = 100

    return { success: true, message: "Assignment submitted successfully" }
  },
}
