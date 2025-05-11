"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronDown,
  ClipboardList,
  CreditCard,
  GraduationCap,
  Home,
  Library,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Settings,
  User,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Assignments", href: "/assignments", icon: ClipboardList },
    { name: "Grades", href: "/grades", icon: GraduationCap },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "Financial", href: "/financial", icon: CreditCard },
    { name: "Resources", href: "/resources", icon: Library },
    { name: "Campus", href: "/campus", icon: MapPin },
    { name: "Messages", href: "/messages", icon: Mail, badge: 2 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-lg font-bold text-blue-900">Student Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-80 overflow-auto">
                  <DropdownMenuItem className="flex flex-col items-start py-2">
                    <div className="font-medium">New Assignment Posted</div>
                    <div className="text-sm text-gray-500">CS 101: Programming Fundamentals</div>
                    <div className="text-xs text-gray-400 mt-1">2 hours ago</div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start py-2">
                    <div className="font-medium">Grade Posted</div>
                    <div className="text-sm text-gray-500">MATH 201: Calculus II</div>
                    <div className="text-xs text-gray-400 mt-1">Yesterday</div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  pathname === item.href ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
                {item.badge && (
                  <Badge className="ml-auto bg-blue-100 text-blue-800 hover:bg-blue-200">{item.badge}</Badge>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex h-screen pt-14 lg:pt-0">
        {/* Sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:bg-white lg:pt-5">
          <div className="flex items-center px-6 pb-4">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-900">Student Portal</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-3 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    pathname === item.href ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                  {item.badge && (
                    <Badge className="ml-auto bg-blue-100 text-blue-800 hover:bg-blue-200">{item.badge}</Badge>
                  )}
                </Link>
              ))}
            </nav>
            <div className="px-3 py-4 border-t border-gray-200">
              <div className="flex items-center px-3 py-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-500">Student ID: 12345678</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 lg:pl-64">
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
