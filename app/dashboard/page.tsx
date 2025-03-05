import Link from "next/link"
import {
  AlertCircle,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  MoreHorizontal,
  Plus,
  User,
  CreditCard,
  LogOut,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/components/footer"

// Sample data for demonstration
const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    progress: 75,
    daysUntilExam: 14,
    status: "on-track",
    topics: 24,
    topicsCompleted: 18,
  },
  {
    id: 2,
    title: "Calculus I",
    progress: 45,
    daysUntilExam: 7,
    status: "behind",
    topics: 30,
    topicsCompleted: 13,
  },
  {
    id: 3,
    title: "Physics 101",
    progress: 90,
    daysUntilExam: 21,
    status: "on-track",
    topics: 20,
    topicsCompleted: 18,
  },
  {
    id: 4,
    title: "Introduction to Psychology",
    progress: 30,
    daysUntilExam: 5,
    status: "behind",
    topics: 15,
    topicsCompleted: 4,
  },
]

export default function DashboardPage() {
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
            <Link
              href="/dashboard"
              className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/calendar"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-300"
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
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                  <Link href="/billing" className="flex w-full items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                  <Link href="/logout" className="flex w-full items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Dashboard
            </h1>
            <p className="text-gray-400">Track your progress and prepare for upcoming exams.</p>
          </div>
          <Button className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105">
            <Plus className="h-4 w-4" /> Add Course
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400">60%</div>
              <div className="mt-2 h-2 w-full bg-gray-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                  style={{ width: "60%" }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">Overall completion across all courses</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Next Exam</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Calendar className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-lg font-bold text-white">Introduction to Psychology</div>
                <div className="text-sm text-gray-400">In 5 days (May 10, 2024)</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Study Streak</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-white">7 days</div>
                <div className="text-sm text-gray-400">Keep it up!</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Your Courses
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`bg-gray-900/70 border-gray-800 backdrop-blur-sm ${
                course.status === "behind" ? "border-red-500/50" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-bold text-white">{course.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-gray-900 border border-gray-800">
                      <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-300 focus:text-white focus:bg-gray-800">
                        Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400 focus:text-red-300 focus:bg-gray-800">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardDescription className="text-gray-400">
                  {course.topicsCompleted} of {course.topics} topics completed
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-300">{course.progress}% complete</span>
                  <span className="text-xs text-gray-400">{course.daysUntilExam} days until exam</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      course.status === "behind"
                        ? "bg-gradient-to-r from-red-500 to-orange-500"
                        : "bg-gradient-to-r from-purple-500 to-blue-500"
                    }`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                {course.status === "behind" && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>You're falling behind schedule</span>
                  </div>
                )}
                {course.status === "on-track" && (
                  <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">
                    <CheckCircle className="h-4 w-4" />
                    <span>On track</span>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Link href={`/dashboard/courses/${course.id}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-purple-400 border-purple-500 hover:bg-purple-500/10 hover:text-white transition-colors"
                  >
                    View Course
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
          <Card className="flex flex-col items-center justify-center border-dashed p-8 bg-gray-900/30 border-gray-800 backdrop-blur-sm">
            <div className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-3 mb-4">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">Add a new course</h3>
            <p className="text-center text-sm text-gray-400 mb-4">
              Choose from our course catalog or create a custom syllabus
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105">
              Add Course
            </Button>
          </Card>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Topics to Revise
        </h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-red-500/10 p-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Derivatives and Integrals</h3>
                    <p className="text-sm text-gray-400">Calculus I • Flagged as difficult</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-purple-400 border-purple-500 hover:bg-purple-500/10"
                >
                  Review Now
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

