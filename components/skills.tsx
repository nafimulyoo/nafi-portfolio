"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Code, Cpu, BarChart3, Layers, Workflow, Lightbulb } from "lucide-react"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8 text-primary" />,
      skills: [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Generative AI",
        "LLMs",
        "Reinforcement Learning",
      ],
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Data Visualization",
        "Feature Engineering",
        "Data Strategies",
        "Data Engineering",
      ],
    },
    {
      title: "Full Stack Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["React.js", "Next.js", "Node.js", "Express", "Firebase", "RESTful APIs", "Tailwind CSS"],
    },
    {
      title: "Embedded Systems & IoT",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      skills: ["Arduino", "ESP32", "Sensor Integration", "IoT Protocols", "Embedded C/C++", "PCB Design"],
    },
  ]

  const technologies = [
    {
      category: "Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      items: ["Python", "JavaScript", "TypeScript", "C/C++", "SQL", "Kotlin"],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="h-6 w-6 text-primary" />,
      items: ["TensorFlow", "PyTorch", "React", "Next.js", "Express", "Scikit-learn", "Pandas"],
    },
    {
      category: "Tools & Platforms",
      icon: <Workflow className="h-6 w-6 text-primary" />,
      items: ["Git", "Docker", "AWS", "Firebase", "Vertex AI", "Jupyter", "VS Code"],
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore"],
    },
    {
      category: "IoT & Hardware",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      items: ["Arduino", "ESP32", "Raspberry Pi", "Sensors", "Actuators", "MQTT"],
    },
    {
      category: "Methodologies",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      items: ["Agile", "CI/CD", "TDD", "Design Thinking", "SCRUM"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px]">
            I specialize in these core areas, combining technical expertise with practical problem-solving
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Technologies & Tools</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-primary/10 mr-3">{tech.icon}</div>
                    <h4 className="text-lg font-semibold">{tech.category}</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {tech.items.map((item) => (
                      <div key={item} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-primary">{item.charAt(0)}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
