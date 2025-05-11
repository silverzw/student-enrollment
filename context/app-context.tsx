"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  id: string
  name: string
  email: string
  role: "student" | "admin"
  avatar?: string
}

type Notification = {
  id: string
  title: string
  message: string
  date: string
  read: boolean
}

type AppContextType = {
  user: User | null
  isLoading: boolean
  notifications: Notification[]
  unreadCount: number
  markNotificationAsRead: (id: string) => void
  markAllNotificationsAsRead: () => void
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notifications, setNotifications] = useState<Notification[]>([])

  // Mock authentication for demo purposes
  useEffect(() => {
    // Simulate loading user data
    const loadUser = async () => {
      setIsLoading(true)
      try {
        // In a real app, this would be a fetch to your API
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock user data
        setUser({
          id: "1234567",
          name: "John Doe",
          email: "john.doe@university.edu",
          role: "student",
        })

        // Mock notifications
        setNotifications([
          {
            id: "1",
            title: "Assignment Due",
            message: "Your CS101 assignment is due tomorrow",
            date: "2025-05-14T10:00:00Z",
            read: false,
          },
          {
            id: "2",
            title: "Registration Open",
            message: "Fall 2025 registration is now open",
            date: "2025-05-10T09:30:00Z",
            read: false,
          },
          {
            id: "3",
            title: "Grade Posted",
            message: "A new grade has been posted for MATH201",
            date: "2025-05-08T14:15:00Z",
            read: true,
          },
        ])
      } catch (error) {
        console.error("Failed to load user data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful login (in a real app, validate credentials)
      if (email && password) {
        setUser({
          id: "1234567",
          name: "John Doe",
          email: email,
          role: "student",
        })
        return true
      }
      return false
    } catch (error) {
      console.error("Login failed:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        isLoading,
        notifications,
        unreadCount,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
