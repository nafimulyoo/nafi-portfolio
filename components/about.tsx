"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="w-20 h-1 bg-primary my-4"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground">
              Hi, I'm Nafi, I'm passionate about solving real-world problems by building cutting-edge AI solutions that
              matter. I've had the chance to work on diverse projects, from LLM-based learning tools to smart IoT
              systems—and each experience has strengthened my belief that great tech is born where research meets
              usability.
            </p>
            <p className="text-muted-foreground">
              Currently channeling this passion into my final-year thesis at Institut Teknologi Bandung (ITB):
              "Development and Integration of Generative AI in Electrical Energy Monitoring for Smart Energy
              Management".
            </p>
            <p className="text-muted-foreground">
              I believe in lifelong learning and love connecting with fellow tech enthusiasts. Let's chat about:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>🤖 Generative AI (LLMs) for industrial applications</li>
              <li>🔋 Smart energy tech and AI-driven sustainability solutions</li>
              <li>🔧 Cross-disciplinary product innovation and development</li>
            </ul>
            <p className="text-muted-foreground">
              Open to collaborations, internships, or just geeking out over the latest in tech!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Nafi Mulyo Kusumo"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
