const courses = [
  {
    id: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 3,
    instructor: "Dr. Alan Turing",
    schedule: "Mon/Wed 10:00 AM - 11:30 AM",
    location: "Science Building, Room 101",
    seats: { available: 15, total: 30 },
    level: "Undergraduate",
    tags: ["Core", "In-Person"],
    description:
      "An introduction to the fundamental concepts of computer science. Topics include algorithmic problem solving, data representation, control structures, functions, recursion, and basic data structures.",
    prerequisites: "None",
    syllabus: "Course syllabus for CS101",
  },
  {
    id: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    credits: 4,
    instructor: "Dr. Katherine Johnson",
    schedule: "Tue/Thu 1:00 PM - 2:30 PM",
    location: "Mathematics Building, Room 105",
    seats: { available: 8, total: 25 },
    level: "Undergraduate",
    tags: ["Core", "In-Person"],
    description:
      "A continuation of Calculus I. Topics include techniques of integration, applications of integration, differential equations, parametric equations, polar coordinates, and infinite sequences and series.",
    prerequisites: "MATH101 (Calculus I)",
    syllabus: "Course syllabus for MATH201",
  },
  {
    id: "ENG105",
    name: "Academic Writing",
    department: "English",
    credits: 3,
    instructor: "Prof. Jane Austen",
    schedule: "Mon/Wed 2:00 PM - 3:30 PM",
    location: "Humanities Building, Room 205",
    seats: { available: 20, total: 35 },
    level: "Undergraduate",
    tags: ["Core", "In-Person"],
    description:
      "This course focuses on developing critical reading and writing skills essential for academic success. Students will analyze various texts and compose essays using different rhetorical strategies.",
    prerequisites: "None",
    syllabus: "Course syllabus for ENG105",
  },
  {
    id: "PHYS101",
    name: "Physics for Scientists",
    department: "Physics",
    credits: 4,
    instructor: "Dr. Richard Feynman",
    schedule: "Tue/Thu 9:00 AM - 10:30 AM",
    location: "Science Building, Room 301",
    seats: { available: 12, total: 24 },
    level: "Undergraduate",
    tags: ["Core", "In-Person"],
    description:
      "A calculus-based introduction to physics for science and engineering students. Topics include mechanics, waves, and thermodynamics with an emphasis on problem-solving.",
    prerequisites: "MATH101 (Calculus I)",
    syllabus: "Course syllabus for PHYS101",
  },
  {
    id: "CS505",
    name: "Advanced Algorithms",
    department: "Computer Science",
    credits: 3,
    instructor: "Dr. Donald Knuth",
    schedule: "Online - Asynchronous",
    location: "Online",
    seats: { available: 25, total: 40 },
    level: "Graduate",
    tags: ["Elective", "Online"],
    description:
      "Advanced study of algorithms and data structures. Topics include algorithm analysis, greedy algorithms, dynamic programming, NP-completeness, and approximation algorithms.",
    prerequisites: "CS301 (Algorithms)",
    syllabus: "Course syllabus for CS505",
  },
  {
    id: "BIO220",
    name: "Human Anatomy",
    department: "Biology",
    credits: 4,
    instructor: "Dr. Elizabeth Blackwell",
    schedule: "Mon/Wed/Fri 11:00 AM - 12:30 PM",
    location: "Science Building, Room 201",
    seats: { available: 5, total: 24 },
    level: "Undergraduate",
    tags: ["Elective", "In-Person"],
    description:
      "A comprehensive study of human anatomy. Topics include the structure and function of major organ systems, tissues, and cells.",
    prerequisites: "BIO101 (Introduction to Biology)",
    syllabus: "Course syllabus for BIO220",
  },
]

// Mock enrolled courses
const enrolledCourses = ["CS101", "MATH201", "ENG105", "PHYS101"]

export const courseService = {
  getAllCourses: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return courses
  },

  getCourseById: async (id: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return courses.find((course) => course.id === id)
  },

  getEnrolledCourses: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return courses.filter((course) => enrolledCourses.includes(course.id))
  },

  searchCourses: async (query: string, filters: any = {}) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    let filteredCourses = [...courses]

    // Apply search query
    if (query) {
      const lowerQuery = query.toLowerCase()
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.name.toLowerCase().includes(lowerQuery) ||
          course.id.toLowerCase().includes(lowerQuery) ||
          course.instructor.toLowerCase().includes(lowerQuery) ||
          course.department.toLowerCase().includes(lowerQuery),
      )
    }

    // Apply department filter
    if (filters.department && filters.department !== "all") {
      filteredCourses = filteredCourses.filter(
        (course) => course.department.toLowerCase() === filters.department.toLowerCase(),
      )
    }

    // Apply level filter
    if (filters.level && filters.level !== "all") {
      filteredCourses = filteredCourses.filter((course) => course.level.toLowerCase() === filters.level.toLowerCase())
    }

    return filteredCourses
  },

  enrollInCourse: async (courseId: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 700))

    // Check if already enrolled
    if (enrolledCourses.includes(courseId)) {
      return { success: false, message: "Already enrolled in this course" }
    }

    // Check if course exists
    const course = courses.find((c) => c.id === courseId)
    if (!course) {
      return { success: false, message: "Course not found" }
    }

    // Check if seats available
    if (course.seats.available <= 0) {
      return { success: false, message: "No seats available" }
    }

    // Enroll in course (in a real app, this would update the database)
    enrolledCourses.push(courseId)

    // Update available seats
    course.seats.available -= 1

    return { success: true, message: "Successfully enrolled in course" }
  },

  dropCourse: async (courseId: string) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Check if enrolled
    const index = enrolledCourses.indexOf(courseId)
    if (index === -1) {
      return { success: false, message: "Not enrolled in this course" }
    }

    // Drop course
    enrolledCourses.splice(index, 1)

    // Update available seats
    const course = courses.find((c) => c.id === courseId)
    if (course) {
      course.seats.available += 1
    }

    return { success: true, message: "Successfully dropped course" }
  },
}
