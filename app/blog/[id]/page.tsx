import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Sample blog post data (in a real application, this would come from a database or API)
const blogPosts = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Better Retention",
    content: `
      <p>Studying effectively is crucial for academic success. Here are ten proven techniques to enhance your learning and memory retention:</p>
      <ol>
        <li><strong>Active Recall:</strong> Test yourself regularly on the material you've learned.</li>
        <li><strong>Spaced Repetition:</strong> Review information at increasing intervals over time.</li>
        <li><strong>The Pomodoro Technique:</strong> Study in focused 25-minute intervals with short breaks in between.</li>
        <li><strong>Mind Mapping:</strong> Create visual representations of information to understand connections.</li>
        <li><strong>Teaching Others:</strong> Explain concepts to peers to reinforce your own understanding.</li>
        <li><strong>Chunking:</strong> Break down large amounts of information into smaller, manageable units.</li>
        <li><strong>Mnemonic Devices:</strong> Use acronyms or rhymes to remember complex information.</li>
        <li><strong>Practice Tests:</strong> Simulate exam conditions to familiarize yourself with the testing environment.</li>
        <li><strong>Elaborative Rehearsal:</strong> Connect new information to existing knowledge for better retention.</li>
        <li><strong>Get Enough Sleep:</strong> Ensure adequate rest to consolidate memories and improve focus.</li>
      </ol>
      <p>Implement these techniques in your study routine to see significant improvements in your learning and exam performance.</p>
    `,
    date: "2024-03-10",
    author: "Jane Doe",
    category: "Study Tips",
  },
  // Add more blog posts as needed
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 container py-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4 text-purple-400 hover:text-purple-300">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
        <article className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 mb-8">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span className="text-blue-300">{post.category}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-300" />
        </article>
      </main>
      <Footer />
    </div>
  )
}

