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
      title: "ElisaAI: AI-Integrated Smart Energy Monitoring System",
      description:
        "ElisaAI, a multi-agent LLM system integrated with ITB’s energy monitoring platform (Elisa). The system enables natural language queries for electricity usage, provides automated analysis & visualization through an AI-driven analytics dashboard.",
      image: "/project/elisa.png?height=400&width=600",
      tags: ["Generative AI", "Large Language Models", "Multi-Agent Systems", "Full Stack Development"],
      category: "",
      role: "Solo Full-Stack Developer",
      github: [
        {
          "label": "Dashboard",
          "link": "https://github.com/nafimulyoo/elisa-chatbot-ui",
        },
        {
          "label": "AI Agent",
          "link": "https://github.com/nafimulyoo/elisa-smart-analysis"
        }
      ],
      demo: "https://elisa.itb.ac.id/",
    },
    {
      id: 2,
      title: "CodeNav - AI Personalized Learning Platform",
      description:
        "A digital education platform leveraging LLMs to help users enhance their IT skills with personalized learning roadmaps, AI learning assistant, CV helper, and interview trainer.",
      image: "/project/codenav.png?height=400&width=600",
      tags: ["Generative AI", "Large Language Models", "Full Stack Development"],
      category: "",
      role: "Solo Full-Stack Developer",
      github: [
        {
          "label": "Full Stack",
          "link": "https://github.com/nafimulyoo/codenav",
        }
      ],
      demo: "https://codenav.vercel.app",
    },
    {
      id: 3,
      title: "Odiga - AI Travel Planner",
      description:
        "An AI-powered travel planner that uses K-Means clustering, collaborative filtering, and genetic algorithms to create personalized travel itineraries.",
      image: "/project/odiga.png?height=400&width=600",
      tags: ["Artificial Intelligence", "Machine Learning", "Full Stack Development"],
      category: "ai",
      role: "Full-Stack Developer",
      github: [],
      demo: "https://bit.ly/DemoODIGA",
    },
    {
      id: 4,
      title: "IoT Robotic Drawing Hand",
      description:
        "A robotic hand gripper controlled via a mobile app, utilizing an ESP32 microcontroller and Arduino for real-time control, enabling users to draw remotely.",
      image: "/project/robot-hand.jpeg?height=400&width=600",
      tags: ["Arduino", "Internet of Things", "Robotics", "Android Development"],
      category: "iot",
      role: "Embedded & Mobile Developer",
      github: [
        {
          "label": "Mobile App",
          "link": "https://github.com/nafimulyoo/Tubes-LTFII-K1-07-Android"
        },
        {
          "label": "ESP32",
          "link": "https://github.com/nafimulyoo/Tubes-LTFII-K1-07-ESP"
        }
      ],
      demo: "",
    },
    {
      id: 5,
      title: "Mini Wind Turbine Monitoring and Control Dashboard",
      description:
        "A web-based dashboard for monitoring and controlling a mini wind turbine system, developed using Arduino and ESP32, providing a real-time data visualization and control capabilities.",
      image: "/project/turbine.jpg?height=400&width=600",
      tags: ["Arduino", "Internet of Things",  "Electronics", "Full Stack Development"],
      category: "iot",
      github: [
        {
          "label": "Dashboard",
          "link": "https://github.com/nafimulyoo/bayu-web",
        },
        // {
        //   "label": "ESP32",
        //   "link": "https://github.com/nafimulyoo/Tubes-LTFII-K1-07-Android"
        // }
      ],
      demo: "https://bayu-web.vercel.app/",
    },
    {
      id: 6,
      title: "RL-DDPG 2-DoF Helicopter Control",
      description:
        "A simulation project using Reinforcement Learning to control a 2-DoF Quanser helicopter model, utilizing the Deep Deterministic Policy Gradient (DDPG) algorithm for optimal control using Gymnasium and PyTorch.",
      image: "project/quanser.png?height=400&width=600",
      tags: ["Reinforcement Learning", "Deep Learning", "Control Systems", "Simulation"],
      role: "ML Control Developer",
      github: [],
      demo: "",
    }
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // const categories = [
  //   { value: "all", label: "All" },
  //   { value: "ai", label: "AI & ML" },
  //   { value: "data", label: "Data Science" },
  //   { value: "fullstack", label: "Full Stack" },
  //   { value: "iot", label: "IoT & Embedded" },
  // ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">💻 My Projects</h2>
          <div className="w-40 h-1 bg-primary my-4 mt-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Here are some of my projects that I have worked on. Each project showcases my skills and passion for technology, and I am always eager to learn and explore new challenges.
          </p>
        </div>

        {/* CATEGORY SECTION */}
        {/* <div className="flex justify-center mb-8">
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
        </div> */}

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
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <div>
                  {project.github.map((repo) => (
                    <Button key={repo.label} variant="outline" className="mr-2" size="sm" asChild>
                        <a href={repo.link} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          {repo.label} Code
                        </a>
                      </Button>
                  ))}
                  {project.github.length === 0 ? (
                    <Button variant="outline" size="sm" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      Code Not Available
                    </Button>
                  ) : null}
                  </div>

                </CardFooter>
                <CardFooter>

                <div className="-mt-4">
                {
                  project.demo === "" ? (
                    <div>
                        <Button variant="outline" size="sm" disabled>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          No Demo
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    )
                  }
                </div>
                  </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
