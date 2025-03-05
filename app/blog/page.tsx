import Link from "next/link"
import { ArrowRight, Clock, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Better Retention",
    excerpt: "Discover proven methods to enhance your learning and memory for exams.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "2024-03-10",
    author: "Jane Doe",
    category: "Study Tips",
    imageUrl: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 2,
    title: "How to Create a Balanced Study Schedule",
    excerpt: "Learn to manage your time effectively and reduce stress during exam periods.",
    date: "2024-03-05",
    author: "John Smith",
    category: "Time Management",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "The Impact of Sleep on Academic Performance",
    excerpt: "Explore the crucial role of sleep in learning and exam preparation.",
    date: "2024-02-28",
    author: "Dr. Emily Brown",
    category: "Health & Wellness",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Mastering the Art of Note-Taking",
    excerpt: "Improve your note-taking skills to boost comprehension and recall.",
    date: "2024-02-20",
    author: "Alex Johnson",
    category: "Study Skills",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "The Power of Group Study Sessions",
    excerpt: "Learn how collaborative studying can enhance your learning experience.",
    date: "2024-02-15",
    author: "Sarah Lee",
    category: "Collaboration",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  // Add more blog posts as needed
]

const topics = [
  "Study Tips",
  "Time Management",
  "Health & Wellness",
  "Study Skills",
  "Collaboration",
  "Exam Preparation",
  "Motivation",
  "Technology in Education",
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)
  const popularPosts = [...blogPosts].sort(() => 0.5 - Math.random()).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold tracking-tight mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          StudyBuddy Blog
        </h1>

        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">Featured Article</h2>
          <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-6">
                <CardTitle className="text-2xl font-bold text-white mb-2">{featuredPost.title}</CardTitle>
                <CardDescription className="text-blue-300 mb-4">{featuredPost.category}</CardDescription>
                <p className="text-gray-300 mb-4">{featuredPost.content}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    {featuredPost.author} • {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img
                  src={featuredPost.imageUrl || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Topics */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">Explore Topics</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Link href={`/blog/topic/${topic.toLowerCase().replace(/ /g, "-")}`} key={topic}>
                <Button variant="outline" className="text-purple-400 border-purple-500 hover:bg-purple-500/10">
                  {topic}
                </Button>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">Recently Added</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-900/70 border-gray-800 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:-translate-y-1"
              >
                <img src={post.imageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-40 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{post.title}</CardTitle>
                  <CardDescription className="text-blue-300">{post.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 line-clamp-2">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="mr-1 h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Posts */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">Popular Articles</h2>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <Card
                key={post.id}
                className="bg-gray-900/70 border-gray-800 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              >
                <CardContent className="flex items-center p-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {post.author} • {post.category}
                    </p>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                        Read Article <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <TrendingUp className="h-6 w-6 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

