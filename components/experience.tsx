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
      period: "Mar 2025 - May 2025",
      description: [
        "Designed and implemented a leads generation and analysis system using an LLM and automated data retrieval to increase lead accuracy and efficiency.",
        "Directed the design and implementation of an internal chatbot powered by Vertex AI and a RAG module. This solution indexed and retrieved company-managed data (e.g., products, services, and portfolios)."
      ],
      skills: ["Large Language Models", "Data Science", "Data Strategies", "Data Product"],
      type: "Internship",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEM6oE-kYjm-A/company-logo_200_200/company-logo_200_200/0/1631319377177?e=1756339200&v=beta&t=F__RfbPHGSswG4Vdl2UYv1ATOHV_yZaj6lqS4_6x0rE",
    },
    {
      title: "Instrument Inspection Engineer Intern",
      company: "PT Kilang Pertamina Internasional",
      location: "Cilacap, Central Java, Indonesia",
      period: "Jul 2024 - Aug 2024",
      description:
      [
        "Conducted a study on the Emergency Shutdown (ESD) system to improve reliability and safety.",
        "Diagnosed the causes of the RFCC and GTO refinery shutdowns that occurred on January 30, 2023, at RU IV Cilacap.",
        "Formulated and evaluated solutions to enhance reliability and safety to prevent future shutdown incidents."
      ],
      skills: ["Industrial Control System", "Safety Instrumented Systems", "Programmable Logic Controller (PLC)", "Reliability Engineering"],
      type: "Internship",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGE-Idze3oUkA/company-logo_200_200/company-logo_200_200/0/1630602806622?e=1756339200&v=beta&t=p8-K240inF3Yf74xCNo1TVAlKfnlVKojLdtVvuGDNJM",
    },
    {
      title: "IoT Engineer Intern",
      company: "Elevarm",
      location: "Bandung, West Java, Indonesia",
      period: "Mar 2024 - Jul 2024",
      description: [
        "Developed an IoT-based air and soil monitoring system for agricultural applications.",
        "Designed and implemented an accurate data transmission system between devices and the gateway.",
        "Developed a Device Manager application for IoT network and data configuration."
      ],
      skills: ["Arduino", "C++", "Electronics", "Internet of Things"],
      type: "Internship",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGaDU7oTWTx2w/company-logo_200_200/company-logo_200_200/0/1645127224563/elevarm_logo?e=1756339200&v=beta&t=HcJ04Nnb8Gxe88uxjSs_FFpgyfB5fWzNvltOffg69HA",
    },
    {
      title: "AI Engineer Intern",
      company: "Javatech Automation",
      location: "Remote",
      period: "Jan 2024 - Mar 2024",
      description: [
        "Developed algorithms for natural language processing using LangChain and OpenAI for easier data querying.",
        "Created an IoT data dashboard integrated with natural language processing."
      ],
      skills: ["Large Language Models", "FastAPI", "Next.js", "React"],
      type: "Internship",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQHA4HeAkK_YKg/company-logo_200_200/company-logo_200_200/0/1630592338936?e=1756339200&v=beta&t=LBv4pwizPNSEkxbrF8ZU3TRAnx1ZZkG1edERKe-qdbQ"
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">💼 Experience</h2>
          <div className="w-20 h-1 bg-primary my-4 mt-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            Hands-on experience at industry leaders and startups. Each experience has deepened my understanding of technology's role in solving real-world challenges.
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
                        <div className="mr-4 rounded-md overflow-hidden w-14 h-14 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={exp.logo || "/placeholder.svg"}
                            alt={exp.company}
                            className="w-14 h-14 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold">{exp.title}</h3>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <Badge variant="outline" className="flex flex-col"><div className="w-16 flex items-center justify-center">{exp.type}</div></Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-4">
                            <Briefcase className="mr-2 h-4 w-4" />
                            <span>
                              {exp.location} | {exp.period}
                            </span>
                          </div>
                          {
                            Array.isArray(exp.description) ? (
                              <ul className="list-disc pl-5 mb-4">
                                {exp.description.map((desc, i) => (
                                  <li key={i} className="text-muted-foreground">{desc}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-muted-foreground mb-4">{exp.description}</p>
                            )
                          }
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
