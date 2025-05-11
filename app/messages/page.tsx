"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Paperclip, Plus, Search, Send, User, Users } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

// Mock conversations data
const conversations = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Professor",
    course: "CS 101",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Please submit your assignment by Friday.",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Academic Advising",
    role: "Department",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Your registration appointment has been scheduled.",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Study Group - CS 401",
    role: "Group",
    members: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Alex: Does anyone have notes from yesterday's lecture?",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    name: "Financial Aid Office",
    role: "Department",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Your scholarship application has been received.",
    time: "May 10",
    unread: 0,
    online: true,
  },
  {
    id: 5,
    name: "Michael Rodriguez",
    role: "Classmate",
    course: "CHEM 301",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for sharing your notes!",
    time: "May 9",
    unread: 0,
    online: false,
  },
]

// Mock messages for the selected conversation
const messages = [
  {
    id: 1,
    sender: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Hello! I wanted to remind everyone about the upcoming assignment deadline.",
    time: "10:15 AM",
    isUser: false,
  },
  {
    id: 2,
    sender: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Please submit your assignment by Friday. Let me know if you have any questions.",
    time: "10:16 AM",
    isUser: false,
  },
  {
    id: 3,
    sender: "You",
    content: "Thank you for the reminder. I have a question about the requirements for the final project.",
    time: "10:20 AM",
    isUser: true,
  },
  {
    id: 4,
    sender: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Of course! What would you like to know?",
    time: "10:25 AM",
    isUser: false,
  },
  {
    id: 5,
    sender: "You",
    content: "Is it acceptable to use external libraries for the implementation?",
    time: "10:28 AM",
    isUser: true,
  },
  {
    id: 6,
    sender: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Yes, you can use external libraries, but please document them in your report and explain why you chose them.",
    time: "10:30 AM",
    isUser: false,
  },
]

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageText, setMessageText] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message to the server
      console.log("Sending message:", messageText)
      setMessageText("")
    }
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Messages</h1>
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        <Card className="border-blue-100 md:col-span-1 flex flex-col">
          <CardHeader className="pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 border-blue-200 focus-visible:ring-blue-500"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <Tabs defaultValue="all" className="flex-1 flex flex-col" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-2 px-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
            </TabsList>
            <CardContent className="flex-1 overflow-auto p-0">
              <div className="space-y-1 px-1">
                {conversations
                  .filter((conv) => {
                    if (activeTab === "unread") return conv.unread > 0
                    if (activeTab === "groups") return conv.role === "Group"
                    return true
                  })
                  .map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`flex items-start gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-50 ${selectedConversation.id === conversation.id ? "bg-blue-50" : ""}`}
                      onClick={() => setSelectedConversation(conversation)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                          <AvatarFallback>
                            {conversation.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-blue-900 truncate">{conversation.name}</div>
                          <div className="text-xs text-gray-500">{conversation.time}</div>
                        </div>
                        <div className="text-xs text-gray-500 mb-1">
                          {conversation.role === "Group" ? (
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              <span>{conversation.members} members</span>
                            </div>
                          ) : (
                            <div>
                              {conversation.role}
                              {conversation.course && ` • ${conversation.course}`}
                            </div>
                          )}
                        </div>
                        <div className="text-sm truncate">{conversation.lastMessage}</div>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-blue-500 text-white ml-2">{conversation.unread}</Badge>
                      )}
                    </div>
                  ))}
              </div>
            </CardContent>
          </Tabs>
        </Card>

        <Card className="border-blue-100 md:col-span-2 flex flex-col">
          <CardHeader className="pb-2 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={selectedConversation.avatar || "/placeholder.svg"}
                    alt={selectedConversation.name}
                  />
                  <AvatarFallback>
                    {selectedConversation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-blue-900">{selectedConversation.name}</CardTitle>
                  <CardDescription>
                    {selectedConversation.role === "Group" ? (
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{selectedConversation.members} members</span>
                      </div>
                    ) : (
                      <div>
                        {selectedConversation.role}
                        {selectedConversation.course && ` • ${selectedConversation.course}`}
                      </div>
                    )}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <User className="h-4 w-4" />
                  <span className="sr-only">View Profile</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-3 max-w-[80%] ${message.isUser ? "flex-row-reverse" : ""}`}>
                  {!message.isUser && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                      <AvatarFallback>
                        {message.sender
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <div
                      className={`rounded-lg p-3 ${message.isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}
                    >
                      {message.content}
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 ${message.isUser ? "text-right" : ""}`}>
                      {message.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-t p-4">
            <div className="flex items-center gap-2 w-full">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                <Paperclip className="h-5 w-5 text-gray-500" />
                <span className="sr-only">Attach File</span>
              </Button>
              <Input
                className="flex-1 border-blue-200 focus-visible:ring-blue-500"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
              <Button
                className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full p-0"
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send Message</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}
