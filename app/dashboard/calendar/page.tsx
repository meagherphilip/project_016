"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ChevronLeft, ChevronRight, Plus, CheckCircle } from "lucide-react"
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Footer } from "@/components/footer"

// Sample data for demonstration
const events = [
  { id: 1, title: "Calculus Exam", date: new Date(2024, 4, 15), type: "exam" },
  { id: 2, title: "Physics Study Group", date: new Date(2024, 4, 10), type: "study" },
  { id: 3, title: "Computer Science Project Due", date: new Date(2024, 4, 20), type: "assignment" },
  { id: 4, title: "Psychology Quiz", date: new Date(2024, 4, 5), type: "exam" },
]

// Sample data for study schedule
const studySchedule = [
  {
    date: new Date(2024, 4, 10),
    sections: [
      { id: 1, course: "Physics", title: "Kinematics", completed: false },
      { id: 2, course: "Physics", title: "Forces", completed: true },
      { id: 3, course: "Computer Science", title: "Data Structures", completed: false },
    ],
  },
  {
    date: new Date(2024, 4, 15),
    sections: [
      { id: 4, course: "Calculus", title: "Derivatives", completed: false },
      { id: 5, course: "Calculus", title: "Integrals", completed: false },
    ],
  },
  {
    date: new Date(2024, 4, 20),
    sections: [
      { id: 6, course: "Computer Science", title: "Algorithms", completed: false },
      { id: 7, course: "Computer Science", title: "Object-Oriented Programming", completed: false },
    ],
  },
]

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const selectedDateSchedule = studySchedule.find((schedule) => isSameDay(schedule.date, selectedDate))

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              StudyBuddy
            </span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link href="/dashboard" className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-300">
              Dashboard
            </Link>
            <Link
              href="/dashboard/calendar"
              className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Calendar
            </Link>
            <Link
              href="/dashboard/revisions"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-300"
            >
              Revisions
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative h-10 w-10 rounded-full p-0 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">JD</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-900 border border-gray-800">
                <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                  <Link href="/profile" className="flex w-full items-center">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                  <Link href="/billing" className="flex w-full items-center">
                    Billing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                  <Link href="/logout" className="flex w-full items-center">
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Calendar
          </h1>
          <Button className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105">
            <Plus className="h-4 w-4" /> Add Event
          </Button>
        </div>

        <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm mb-8">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-bold text-white">{format(currentMonth, "MMMM yyyy")}</CardTitle>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" onClick={prevMonth} className="text-gray-400 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth} className="text-gray-400 hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-400 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {monthDays.map((day, index) => {
                const dayEvents = events.filter((event) => isSameDay(event.date, day))
                const isSelected = isSameDay(day, selectedDate)
                return (
                  <div
                    key={day.toString()}
                    className={`p-2 rounded-lg cursor-pointer transition-colors ${
                      !isSameMonth(day, currentMonth)
                        ? "text-gray-600"
                        : isToday(day)
                          ? "bg-purple-500/20 text-purple-300"
                          : isSelected
                            ? "bg-blue-500/20 text-blue-300"
                            : "text-white hover:bg-gray-800"
                    }`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <div className="text-center">{format(day, "d")}</div>
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`text-xs mt-1 p-1 rounded ${
                          event.type === "exam"
                            ? "bg-red-500/20 text-red-300"
                            : event.type === "study"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">
              Study Schedule for {format(selectedDate, "MMMM d, yyyy")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateSchedule ? (
              <div className="space-y-4">
                {selectedDateSchedule.sections.map((section) => (
                  <div key={section.id} className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {section.course}: {section.title}
                      </h3>
                      <p className="text-sm text-gray-400">Section to study</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${
                        section.completed
                          ? "bg-green-500/20 text-green-300 hover:bg-green-500/30"
                          : "text-purple-400 border-purple-500 hover:bg-purple-500/10 hover:text-white"
                      }`}
                    >
                      {section.completed ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Completed
                        </>
                      ) : (
                        "Mark as Complete"
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No study sections scheduled for this date.</p>
            )}
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Upcoming Events
        </h2>
        <div className="grid gap-4">
          {events
            .sort((a, b) => a.date.getTime() - b.date.getTime())
            .slice(0, 3)
            .map((event) => (
              <Card key={event.id} className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-full p-2 ${
                        event.type === "exam"
                          ? "bg-red-500/20 text-red-300"
                          : event.type === "study"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-blue-500/20 text-blue-300"
                      }`}
                    >
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{event.title}</h3>
                      <p className="text-sm text-gray-400">{format(event.date, "MMMM d, yyyy")}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-400 border-purple-500 hover:bg-purple-500/10 hover:text-white"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

