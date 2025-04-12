"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import MoleculeAnimation from "@/components/molecule-animation"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const texts = [
    "Nafi Mulyo Kusumo",
    "an AI & ML Enthusiast",
    "a Lifelong Learner"
  ]

  // Function to render text with conditional coloring
  const renderText = () => {
    if (currentText.startsWith("an") || currentText.startsWith("a")) {
      return (
        <>
          <span className="text-foreground">{currentText.substring(0, 2)}</span>
          <span className="text-primary">{currentText.substring(2)}</span>
        </>
      )
    }
    return <span className="text-primary">{currentText}</span>
  }

  useEffect(() => {
    setMounted(true)
    
    const handleTyping = () => {
      const current = currentTextIndex % texts.length
      const fullText = texts[current]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(50)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(40)
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 3000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentTextIndex(currentTextIndex + 1)
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <MoleculeAnimation />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="sm:text-2xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            👋 Hi, I'm {renderText()}<span className="animate-pulse font-thin">|</span>
            </h1>
            <div className="h-[60px]">
              <p className="sm:text-xl md:text-xl lg:text-2xl text-muted-foreground max-w-[700px] mx-auto mt-4">
               Data Intelligence Intern @ Astra International | Engineering Physics Undergraduate @ ITB | Building Intelligent Systems that Solve Real Problems
              </p>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center space-x-4 mt-8"
          >
            <a
              href="https://github.com/nafimulyoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/nafimulyo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:rxnafimulyo@gmail.com.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  )
}