"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, ExternalLink, FileText, Filter, Search, Star, Video } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock resources data
const libraryResources = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    type: "ebook",
    author: "John Smith",
    publisher: "Academic Press",
    year: 2023,
    description: "A comprehensive introduction to computer science principles and practices.",
    tags: ["computer science", "programming", "algorithms"],
    course: "CS 101",
    available: true,
  },
  {
    id: 2,
    title: "Calculus: Early Transcendentals",
    type: "textbook",
    author: "James Stewart",
    publisher: "Cengage Learning",
    year: 2022,
    description: "A comprehensive textbook covering single and multivariable calculus.",
    tags: ["mathematics", "calculus", "textbook"],
    course: "MATH 201",
    available: true,
  },
  {
    id: 3,
    title: "Principles of Economics",
    type: "ebook",
    author: "N. Gregory Mankiw",
    publisher: "Cengage Learning",
    year: 2021,
    description: "An introduction to microeconomics and macroeconomics principles.",
    tags: ["economics", "microeconomics", "macroeconomics"],
    course: "ECON 101",
    available: true,
  },
  {
    id: 4,
    title: "Introduction to Psychology",
    type: "textbook",
    author: "David G. Myers",
    publisher: "Worth Publishers",
    year: 2022,
    description: "A comprehensive introduction to the field of psychology.",
    tags: ["psychology", "behavioral science"],
    course: "PSYC 101",
    available: false,
  },
]

const academicJournals = [
  {
    id: 1,
    title: "Advances in Machine Learning",
    journal: "Journal of Artificial Intelligence Research",
    authors: "Zhang, L., Johnson, K., et al.",
    year: 2024,
    volume: "45",
    issue: "2",
    pages: "112-145",
    tags: ["machine learning", "artificial intelligence", "neural networks"],
    available: true,
  },
  {
    id: 2,
    title: "Climate Change Impact on Coastal Ecosystems",
    journal: "Environmental Science & Technology",
    authors: "Martinez, S., Williams, T., et al.",
    year: 2023,
    volume: "57",
    issue: "8",
    pages: "3421-3435",
    tags: ["climate change", "ecosystems", "environmental science"],
    available: true,
  },
  {
    id: 3,
    title: "Quantum Computing: Recent Advances and Future Directions",
    journal: "IEEE Transactions on Quantum Engineering",
    authors: "Chen, H., Patel, R., et al.",
    year: 2024,
    volume: "12",
    issue: "1",
    pages: "78-92",
    tags: ["quantum computing", "computer science", "physics"],
    available: true,
  },
]

const videoResources = [
  {
    id: 1,
    title: "Understanding Neural Networks",
    creator: "Dr. Emily Chen",
    duration: "45:12",
    year: 2023,
    description: "A comprehensive explanation of neural networks and deep learning concepts.",
    tags: ["machine learning", "neural networks", "AI"],
    course: "CS 401",
    views: 12543,
  },
  {
    id: 2,
    title: "Organic Chemistry Lab Techniques",
    creator: "Prof. Michael Rodriguez",
    duration: "32:45",
    year: 2023,
    description: "Demonstration of essential laboratory techniques for organic chemistry.",
    tags: ["chemistry", "lab techniques", "organic chemistry"],
    course: "CHEM 301",
    views: 8976,
  },
  {
    id: 3,
    title: "Shakespeare's Hamlet: Critical Analysis",
    creator: "Dr. Sarah Johnson",
    duration: "58:20",
    year: 2022,
    description: "In-depth analysis of themes, characters, and literary devices in Hamlet.",
    tags: ["literature", "Shakespeare", "drama"],
    course: "ENG 202",
    views: 6234,
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("library")

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Academic Resources</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-blue-700 border-blue-200 hover:bg-blue-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <BookOpen className="h-4 w-4 mr-2" />
            My Bookshelf
          </Button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-10 border-blue-200 focus-visible:ring-blue-500"
          placeholder="Search for books, journals, videos, and more..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="library" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="library">Library Resources</TabsTrigger>
          <TabsTrigger value="journals">Academic Journals</TabsTrigger>
          <TabsTrigger value="videos">Video Resources</TabsTrigger>
          <TabsTrigger value="bookshelf">My Bookshelf</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {libraryResources.map((resource) => (
              <Card key={resource.id} className="border-blue-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-blue-900">{resource.title}</CardTitle>
                      <CardDescription>{resource.author}</CardDescription>
                    </div>
                    <Badge
                      className={
                        resource.type === "ebook" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }
                    >
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Publisher:</span>
                      <span className="ml-1 font-medium">{resource.publisher}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Year:</span>
                      <span className="ml-1 font-medium">{resource.year}</span>
                    </div>
                    {resource.course && (
                      <div>
                        <span className="text-gray-500">Course:</span>
                        <span className="ml-1 font-medium">{resource.course}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <span className={`ml-1 font-medium ${resource.available ? "text-green-600" : "text-red-600"}`}>
                        {resource.available ? "Available" : "Checked Out"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                    <Star className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700" disabled={!resource.available}>
                    {resource.type === "ebook" ? (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </>
                    ) : (
                      <>
                        <BookOpen className="h-4 w-4 mr-2" />
                        Reserve
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="text-blue-700 border-blue-200">
              Load More Resources
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="journals" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {academicJournals.map((journal) => (
              <Card key={journal.id} className="border-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-900">{journal.title}</CardTitle>
                  <CardDescription>{journal.journal}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Authors:</span>
                      <span className="ml-1 font-medium">{journal.authors}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Year:</span>
                      <span className="ml-1 font-medium">{journal.year}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Volume:</span>
                      <span className="ml-1 font-medium">{journal.volume}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Issue:</span>
                      <span className="ml-1 font-medium">{journal.issue}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Pages:</span>
                      <span className="ml-1 font-medium">{journal.pages}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Status:</span>
                      <span className="ml-1 font-medium text-green-600">
                        {journal.available ? "Available" : "Restricted"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {journal.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                    <Star className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <FileText className="h-4 w-4 mr-2" />
                    View PDF
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="text-blue-700 border-blue-200">
              Load More Journals
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {videoResources.map((video) => (
              <Card key={video.id} className="border-blue-100">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-blue-900">{video.title}</CardTitle>
                      <CardDescription>{video.creator}</CardDescription>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Video</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative rounded-md overflow-hidden bg-gray-100 mb-3 aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video className="h-12 w-12 text-blue-200" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{video.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Year:</span>
                      <span className="ml-1 font-medium">{video.year}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Views:</span>
                      <span className="ml-1 font-medium">{video.views.toLocaleString()}</span>
                    </div>
                    {video.course && (
                      <div>
                        <span className="text-gray-500">Course:</span>
                        <span className="ml-1 font-medium">{video.course}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="text-blue-700 border-blue-200">
                    <Star className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="text-blue-700 border-blue-200">
              Load More Videos
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="bookshelf" className="space-y-6">
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">My Saved Resources</CardTitle>
              <CardDescription>Resources you've saved for quick access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-blue-900 mb-2">Your bookshelf is empty</h3>
                <p className="text-gray-500 mb-4">Save books, journals, and videos to access them quickly later</p>
                <Button className="bg-blue-600 hover:bg-blue-700">Browse Resources</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-900">Recently Viewed</CardTitle>
              <CardDescription>Resources you've recently accessed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-blue-900">Introduction to Computer Science</h4>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">John Smith</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-gray-100">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-blue-900">Advances in Machine Learning</h4>
                      <span className="text-xs text-gray-500">3 days ago</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Journal of Artificial Intelligence Research</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-blue-900">Understanding Neural Networks</h4>
                      <span className="text-xs text-gray-500">1 week ago</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Dr. Emily Chen</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  )
}
