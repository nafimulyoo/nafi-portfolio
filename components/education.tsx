"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      institution: "Institut Teknologi Bandung (ITB)",
      degree: "Bachelor's degree, Engineering Physics",
      period: "2021 - 2025",
      gpa: "3.63 GPA",
      activities: ["Himpunan Mahasiswa Fisika Teknik ITB (HMFT-ITB)", "Unit Bola Voli (UBV)"],
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGJoYkUiQpUKA/company-logo_200_200/company-logo_200_200/0/1630672186443/itb_logo?e=1749686400&v=beta&t=znGpwuOkZeiCFFchL9mhpLKCjZJibQ0XGZCkKPK84bU",
    },
    {
      institution: "SMA IT AL BINAA IBS",
      degree: "High School, Mathematics and Natural Science",
      period: "2018 - 2021",
      gpa: "92.3/100 Average",
      activities: ["Student Council", "Graphic Design", "Physics Club", "Broadcasting", "Volleyball Club", "Mentoring"],
      logo: "https://albinaa.web.id/utama/wp-content/uploads/sites/5/2024/11/cropped-LOGO-BARU-AL-BINAA-150x150-1.png",
    },
  ]

  const certifications = [
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "Dec 2023",
      credentialId: "K6H88AH3TPLQ",
      skills: ["Amazon Web Services (AWS)", "Cloud Computing"],
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Google Project Management: Professional Certificate",
      issuer: "Google Career Certificates",
      date: "Dec 2023",
      skills: ["DevOps", "Project Management", "Agile Methodologies", "Leadership"],
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  const awards = [
    {
      title: "Pancakarsa Scholarship 2022 Awardee",
      issuer: "Dinas Pemuda dan Olahraga Kabupaten Bogor",
      date: "Dec 2022",
      description:
        "Selected as one of the awardees from a pool of 1795 applicants, based on academic achievements and non-academic accomplishments.",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "1st Place of AI Innovation Challenge COMPFEST 14",
      issuer: "BEM FASILKOM UI",
      date: "Oct 2022",
      description:
        "Developed an AI-powered travel planner using K-Means clustering, collaborative filtering, and genetic algorithms to create personalized travel itineraries.",
      logo: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">🎓 Education</h2>
          <div className="w-20 h-1 bg-primary my-4 mt-6"></div>
          <p className="text-muted-foreground max-w-[700px]">My academic background and achievements</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Academic Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 rounded-md overflow-hidden w-14 h-14 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.institution}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{edu.institution}</h4>
                        <p className="text-primary">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          {edu.period} {edu.gpa && `• ${edu.gpa}`}
                        </p>
                        <div className="mt-2">
                          <p className="text-sm font-medium mb-1">Activities and Societies:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.activities.map((activity) => (
                              <Badge key={activity} variant="outline">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Awards & Honors
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 rounded-md overflow-hidden w-12 h-12 flex-shrink-0 bg-muted flex items-center justify-center">
                          <img
                            src={award.logo || "/placeholder.svg"}
                            alt={award.title}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">{award.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {award.issuer} • {award.date}
                          </p>
                          <p className="text-muted-foreground">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 rounded-md overflow-hidden w-12 h-12 flex-shrink-0 bg-muted flex items-center justify-center">
                          <img
                            src={cert.logo || "/placeholder.svg"}
                            alt={cert.title}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {cert.issuer} • {cert.date}
                          </p>
                          {cert.credentialId && (
                            <p className="text-sm text-muted-foreground mb-2">Credential ID: {cert.credentialId}</p>
                          )}
                          <div className="flex flex-wrap gap-2 mt-2">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
