import Link from "next/link"
import { AlertCircle, ArrowLeft, BookOpen, Calendar, CheckCircle, Clock, Flag, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample course data for demonstration
const course = {
  id: 2,
  title: "Calculus I",
  progress: 45,
  daysUntilExam: 7,
  status: "behind",
  topics: 30,
  topicsCompleted: 13,
  examDate: "May 12, 2024",
  syllabus: [
    {
      id: 1,
      title: "Functions and Limits",
      topics: [
        { id: 1, title: "Introduction to Functions", completed: true, flagged: false },
        { id: 2, title: "Limits and Continuity", completed: true, flagged: false },
        { id: 3, title: "Evaluating Limits", completed: true, flagged: false },
        { id: 4, title: "Infinite Limits", completed: false, flagged: false },
      ],
    },
    {
      id: 2,
      title: "Derivatives",
      topics: [
        { id: 5, title: "Definition of the Derivative", completed: true, flagged: false },
        { id: 6, title: "Basic Differentiation Rules", completed: true, flagged: false },
        { id: 7, title: "Product and Quotient Rules", completed: true, flagged: false },
        { id: 8, title: "Chain Rule", completed: false, flagged: true },
        { id: 9, title: "Implicit Differentiation", completed: false, flagged: false },
      ],
    },
    {
      id: 3,
      title: "Applications of Derivatives",
      topics: [
        { id: 10, title: "Related Rates", completed: false, flagged: false },
        { id: 11, title: "Linear Approximations", completed: false, flagged: false },
        { id: 12, title: "Mean Value Theorem", completed: false, flagged: false },
        { id: 13, title: "Optimization Problems", completed: false, flagged: true },
      ],
    },
    {
      id: 4,
      title: "Integrals",
      topics: [
        { id: 14, title: "Antiderivatives", completed: false, flagged: false },
        { id: 15, title: "Definite Integrals", completed: false, flagged: false },
        { id: 16, title: "Fundamental Theorem of Calculus", completed: false, flagged: false },
        { id: 17, title: "Integration Techniques", completed: false, flagged: false },
      ],
    },
  ],
}

export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col dark bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">StudyBuddy</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/calendar"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Calendar
            </Link>
            <Link
              href="/dashboard/revisions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Revisions
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to dashboard</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <Button variant="ghost" size="icon" className="ml-auto">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More options</span>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{course.progress}%</div>
              <Progress value={course.progress} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {course.topicsCompleted} of {course.topics} topics completed
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Exam Date</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Calendar className="h-8 w-8 text-primary" />
              <div>
                <div className="text-lg font-bold">{course.examDate}</div>
                <div className="text-sm text-muted-foreground">In {course.daysUntilExam} days</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Study Status</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              {course.status === "behind" ? (
                <>
                  <div className="rounded-full bg-destructive/10 p-2">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">Falling Behind</div>
                    <div className="text-sm text-muted-foreground">You need to study more</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-full bg-primary/10 p-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">On Track</div>
                    <div className="text-sm text-muted-foreground">Keep up the good work</div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="syllabus" className="mb-8">
          <TabsList>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="syllabus" className="mt-4">
            <div className="grid gap-6">
              {course.syllabus.map((section) => (
                <Card key={section.id} className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>
                      {section.topics.filter((t) => t.completed).length} of {section.topics.length} topics completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.topics.map((topic) => (
                        <div key={topic.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Checkbox id={`topic-${topic.id}`} checked={topic.completed} />
                            <label
                              htmlFor={`topic-${topic.id}`}
                              className={`text-sm font-medium ${topic.completed ? "line-through text-muted-foreground" : ""}`}
                            >
                              {topic.title}
                            </label>
                            {topic.flagged && (
                              <div className="rounded-full bg-destructive/10 p-1">
                                <Flag className="h-3 w-3 text-destructive" />
                              </div>
                            )}
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Flag className={`h-4 w-4 ${topic.flagged ? "text-destructive fill-destructive" : ""}`} />
                            <span className="sr-only">Flag for revision</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="resources" className="mt-4">
            <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Course Resources</CardTitle>
                <CardDescription>Access textbooks, lecture notes, and additional materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Calculus: Early Transcendentals</h3>
                      <p className="text-sm text-muted-foreground">Textbook • PDF</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Lecture Notes - Week 1-5</h3>
                      <p className="text-sm text-muted-foreground">Notes • PDF</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Practice Problems</h3>
                      <p className="text-sm text-muted-foreground">Exercises • PDF</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notes" className="mt-4">
            <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Your Notes</CardTitle>
                <CardDescription>Personal notes and reminders for this course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Chain Rule Examples</h3>
                    <p className="text-sm text-muted-foreground">
                      Remember to apply the chain rule when differentiating composite functions. The formula is
                      (f(g(x)))' = f'(g(x)) · g'(x).
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Added on May 2, 2024</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Optimization Problems Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      Steps for solving optimization problems: 1) Identify the quantity to be maximized/minimized, 2)
                      Express in terms of one variable, 3) Find critical points, 4) Test endpoints and critical points.
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Added on May 1, 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="statistics" className="mt-4">
            <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Study Statistics</CardTitle>
                <CardDescription>Track your study habits and progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Weekly Study Hours</h3>
                    <div className="h-[200px] bg-muted/50 rounded-lg flex items-end justify-between p-4">
                      {[3, 2, 4, 1, 5, 2, 3].map((hours, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <div className="w-8 bg-primary rounded-t-sm" style={{ height: `${hours * 30}px` }}></div>
                          <span className="text-xs">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Topic Completion Rate</h3>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center">
                        <span className="text-lg font-bold">45%</span>
                      </div>
                      <div>
                        <p className="text-sm">
                          You're completing about <span className="font-medium">2.5 topics</span> per day
                        </p>
                        <p className="text-xs text-muted-foreground">
                          At this rate, you'll complete the syllabus in 7 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <h2 className="text-xl font-bold mb-4">Flagged for Revision</h2>
        <div className="grid gap-4 mb-8">
          {course.syllabus
            .flatMap((section) => section.topics)
            .filter((topic) => topic.flagged)
            .map((topic) => (
              <Card key={topic.id} className="bg-gray-900/70 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-destructive/10 p-2">
                      <Flag className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-medium">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">Flagged as difficult</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Review Now
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </main>
      <footer className="border-t border-gray-800 py-6 bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} StudyBuddy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

