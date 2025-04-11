"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">👤 About Me</h2>
          <div className="w-20 h-1 bg-primary my-4 mt-6"></div>
        </div>

        <div ref={ref} className="flex gap-12 mx-12 items-center flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 flex-1 min-w-full md:min-w-[60%]"
          >
             <Card className="">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Hi, I'm <span className="font-bold">Nafi</span>, I'm passionate about solving real-world problems by building cutting-edge AI solutions that
                    matter. I've had the chance to work on diverse projects, from LLM-based learning tools to smart IoT
                    systems—and each experience has strengthened my belief that great tech is born where research meets
                    usability.
                  </p>
                </CardContent>
            </Card>
            <Card className="">
                <CardContent className="p-6">

                <p className="text-muted-foreground">
                  Let’s connect if you’re passionate about:
                </p>
                <div className="mt-2">
                <div className="flex ml-4 text-muted-foreground">
                  <span className="font-semibold">🚀</span><p className="ml-2"><span className="font-semibold"> AI for Good </span>– Leveraging LLMs, computer vision, and reinforcement learning for industrial and societal impact.</p>
                </div>
                <div className="flex ml-4 text-muted-foreground">
                  <span className="font-semibold">⚡</span><p className="ml-2"><span className="font-semibold"> Sustainable Tech</span> – Smart energy, IoT, and AI-driven solutions for a greener future.</p>
                </div>
                <div className="flex ml-4 text-muted-foreground">
                  <span className="font-semibold">🔧</span><p className="ml-2"><span className="font-semibold"> Full-Stack Innovation</span> - Cross-disciplinary product innovation and development, from embedded systems to scalable web apps,</p>
                </div>
                </div>
                <p className="text-muted-foreground mt-2">
                  Open to collaborations, internships, or just geeking out over the latest in tech!
                </p>
                </CardContent>
              </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] w-[1200px] rounded-lg overflow-hidden shadow-xl flex-1 min-w-full md:min-w-[34%]"
          >
            <img
              src="/potrait.jpg"
              alt="Nafi Mulyo Kusumo"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
