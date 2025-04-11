"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "CodeNav - AI Learning Platform",
      description:
        "A digital education platform leveraging LLMs to help users enhance their IT skills with personalized learning roadmaps, AI learning assistant, CV helper, and interview trainer.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "React", "Firebase", "Vertex AI", "Tailwind CSS"],
      category: "ai",
      github: "https://github.com/example/codenav",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Smart Energy Management System",
      description:
        "Integration of Generative AI in electrical energy monitoring for smart energy management, developed as part of my final-year thesis at ITB.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "IoT", "ESP32", "Energy Monitoring"],
      category: "iot",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "AI Travel Planner",
      description:
        "An AI-powered travel planner that uses K-Means clustering, collaborative filtering, and genetic algorithms to create personalized travel itineraries.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Machine Learning", "Web Development", "Algorithms"],
      category: "ai",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "PLC Emergency Shutdown System",
      description:
        "Study and implementation of PLC Emergency Shutdown System (ESD) at RU IV Cilacap, focusing on enhancing system reliability and performance.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PLC", "Safety Systems", "Industrial Automation", "Reliability Engineering"],
      category: "iot",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Data Intelligence Dashboard",
      description:
        "A comprehensive dashboard for data intelligence and analytics, developed during my internship at PT Astra International.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Data Visualization", "Python", "React", "Data Engineering", "Business Intelligence"],
      category: "data",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Agricultural IoT Sensor System",
      description:
        "Development and optimization of sensor-based systems for agricultural applications, including data integration and analysis.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["IoT", "Arduino", "Sensors", "Data Analysis", "Agriculture"],
      category: "iot",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { value: "all", label: "All" },
    { value: "ai", label: "AI & ML" },
    { value: "data", label: "Data Science" },
    { value: "fullstack", label: "Full Stack" },
    { value: "iot", label: "IoT & Embedded" },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Here are some of my recent projects across different domains of expertise
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                onClick={() => setFilter(category.value)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && <Badge variant="outline">+{project.tags.length - 3} more</Badge>}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
