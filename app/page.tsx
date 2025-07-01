import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Header */}
      <header className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="text-emerald-400">Dev</span>Portfolio
        </h1>
      </header>

      {/* Hero Section with Personal Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-emerald-400 flex-shrink-0">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Profile Picture"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Hi, I'm <span className="text-emerald-400">Alex</span>
            </h2>
            <p className="text-zinc-300 max-w-2xl mb-6">
              A passionate developer focused on creating elegant, user-friendly solutions. I specialize in frontend
              development with a keen eye for design.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-emerald-400">#</span> Projects
        </h2>
        <p className="text-zinc-400 mb-12">A selection of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-emerald-400 transition-all duration-300 group"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-zinc-700 text-xs rounded-full text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </Link>
                  <Link
                    href={project.demo}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} - Built with Next.js</p>
        </div>
      </footer>
    </main>
  )
}

// Sample project data
const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with cart functionality and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "TailwindCSS", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks with drag-and-drop functionality.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["TypeScript", "Next.js", "Supabase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps and forecasts.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "Chart.js", "Weather API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing creative work and projects.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Music Streaming App",
    description: "A Spotify-like application for streaming and discovering music.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search and discover recipes based on available ingredients.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Vue.js", "Firebase", "Food API"],
    github: "#",
    demo: "#",
  },
]
