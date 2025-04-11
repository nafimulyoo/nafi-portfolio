import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold">
              Nafi<span className="text-primary">Kusumo</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-muted-foreground hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:nafi.kusumo@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Nafi Mulyo Kusumo. All rights reserved.</p>
            <p className="mt-1">Building Intelligent Systems that Solve Real Problems</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
