"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Data Intelligence Intern",
      company: "PT Astra International Tbk",
      location: "Jakarta, Indonesia",
      period: "Mar 2025 - Present",
      description: "Working on data science and data strategies projects at one of Indonesia's largest conglomerates.",
      skills: ["Data Science", "Data Strategies", "Data Engineering"],
      type: "Internship",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Engineering Data Science Lecturing Assistant",
      company: "Institut Teknologi Bandung",
      location: "Bandung, Indonesia",
      period: "Jan 2025 - Present",
      description:
        "Assisting undergraduate students in learning data science concepts and techniques for engineering applications.",
      skills: ["Python", "Data Science", "Teaching"],
      type: "Part-time",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Instrument Inspection Engineer Intern",
      company: "PT Kilang Pertamina Internasional",
      location: "Cilacap, Central Java, Indonesia",
      period: "Jul 2024 - Aug 2024",
      description:
        "Conducted a study of the PLC Emergency Shutdown System (ESD) at RU IV Cilacap, focusing on enhancing system reliability and performance. Analyzed root causes of module failures, explored channel segregation between RFCC and GTO units, and proposed solutions to improve system availability.",
      skills: ["Safety Instrumented Systems", "Programmable Logic Controller (PLC)", "Reliability Engineering"],
      type: "Internship",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "IoT Engineer Intern",
      company: "Elevarm",
      location: "Remote",
      period: "Mar 2024 - Jul 2024",
      description:
        "Specialized in the development and optimization of sensor-based systems for agricultural applications. Developed scheduling systems for climate chambers, established sensor calibration processes, and designed systems for accurate data transmission between devices and gateways.",
      skills: ["Arduino", "Electronics", "IoT"],
      type: "Internship",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Engineering Physics Laboratory II Teaching Assistant",
      company: "Institut Teknologi Bandung",
      location: "Bandung, Indonesia",
      period: "Jan 2024 - Jun 2024",
      description:
        "Guided and supervised laboratory students in learning Arduino and C++ for ESP32 microcontroller modules, as well as Android development with Kotlin for IoT applications.",
      skills: ["Arduino", "C++", "Kotlin"],
      type: "Part-time",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground max-w-[700px]">
            My professional journey across various roles and organizations
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center md:items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 md:pr-12 md:pl-0 pl-12">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 rounded-md overflow-hidden w-16 h-16 flex-shrink-0 bg-muted flex items-center justify-center">
                          <img
                            src={exp.logo || "/placeholder.svg"}
                            alt={exp.company}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold">{exp.title}</h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>
                              {exp.location} | {exp.period}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty div for layout */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
