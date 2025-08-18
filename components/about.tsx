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

        <div ref={ref} className="flex gap-12 lg:mx-12 items-center flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 flex-1 min-w-full md:min-w-[60%]"
          >
             <Card className="">
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    Hi! I'm <span className="font-bold">Nafi</span> 👋
                    I{"’"}m an Aspiring AI Engineer passionate about building intelligent systems that combine Large Language Models (LLMs), multi-agent workflows, and RAG pipelines to solve real-world problems. My experience spans from developing AI-powered chatbots and lead generation systems at Astra International to creating ElisaAI, a multi-agent LLM system integrated with ITB{"’"}s energy monitoring platform, enabling natural language queries.
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
                  <span className="font-semibold">🚀</span><p className="ml-2">Building with LLMs, multi-agent systems, and RAG</p>
                </div>
                <div className="flex ml-4 text-muted-foreground">
                  <span className="font-semibold">⚡</span><p className="ml-2">Smart energy management and sustainable tech</p>
                </div>
                <div className="flex ml-4 text-muted-foreground">
                  <span className="font-semibold">🔧</span><p className="ml-2">Full-stack AI applications (backend + frontend)</p>
                </div>
                <div className="flex ml-4 text-muted-foreground">
                  <span className="font-semibold">💡</span><p className="ml-2">Exploring the future of AI-driven products</p>
                </div>
                </div>
                <p className="text-muted-foreground mt-2">
                  Open to collaborations, projects, or just geeking out over the latest in tech!
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
