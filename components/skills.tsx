"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Code, Cpu, BarChart3, Layers, Cloud, Lightbulb, Wind } from "lucide-react"
import { 
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiKotlin, 
  SiPostgresql, SiMysql, SiMongodb, SiApachespark, SiApachekafka, 
  SiGooglecloud, SiFirebase, SiDocker, SiGithubactions, SiVercel,
  SiTensorflow, SiPytorch, SiOpencv, SiHuggingface, SiFastapi,
  SiReact, SiNextdotjs, SiTailwindcss, SiLaravel, SiAndroidstudio,
  SiShadcnui,
  SiPhp,
  SiFigma,
  SiKubernetes,
  SiAwsamplify,
  SiNetlify,
  SiRedis,
  SiSqlite,
  SiSupabase,
  SiScikitlearn,
  SiApachehadoop,
  SiTableau,
  SiJupyter, 
} from "react-icons/si"
import { BsBarChartFill } from "react-icons/bs";
import { IoLogoFirebase } from "react-icons/io5";
import {  FaDatabase, FaGithub} from "react-icons/fa"
import { TbBrandOpenai, TbBrandLaravel, TbApi, TbBrandMysql, TbWindmillFilled } from "react-icons/tb"
import { MdDesignServices, MdDataThresholding } from "react-icons/md"
import { GiArtificialIntelligence, GiTurbine, GiWindmill } from "react-icons/gi"
import { BiLogoFigma, BiLogoPostgresql } from "react-icons/bi";
import { LuBrainCircuit } from "react-icons/lu";
import { CgFigma } from "react-icons/cg"

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
        "Diffusion Models",
        "Large Language Models",
        "Model Context Protocol",
        "Retrieval-Augmented Generation",
        "Computer Vision", 
        "Reinforcement Learning",
      ],
    },
    {
      title: "Data Analytics & Engineering",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Forecasting",
        "Data Mining",
        "Data Visualization",
        // "Big Data Processing",
        // "ETL Pipelines",
        // "Data Warehousing",
      ],
    },
    {
      title: "Full-Stack & Mobile Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: [
        "Frontend Development",
        "Backend Development",
        "Mobile Development",
        "Database Design",
        "API Development",
        "UI/UX Design",
        "DevOps Integration",
      ],
    },
  ]

  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-primary" />,
      items: [
        { name: "TensorFlow", icon: <SiTensorflow className="w-6 h-6 text-foreground/80" /> },
        { name: "PyTorch", icon: <SiPytorch className="w-6 h-6 text-foreground/80" /> },
        { name: "LLMs", icon: <TbBrandOpenai className="w-6 h-6 text-foreground/80" /> },
        { name: "OpenCV", icon: <SiOpencv className="w-6 h-6 text-foreground/80" /> },
        { name: "Gymnasium", icon: <SiPython className="w-6 h-6 text-foreground/80" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="w-6 h-6 text-foreground/80" /> },
        { name: "Vertex AI", icon: <Brain className="w-6 h-6 text-foreground/80" /> },
        { name: "HuggingFace", icon: <SiHuggingface className="w-6 h-6 text-foreground/80" /> },
      ],
    },
    {
      category: "Data Analytics & Engineering",
      // category: "Data Analytics & Engineering",
      icon: <Database className="h-6 w-6 text-primary" />,
      items: [
        { name: "Jupyter", icon: <SiJupyter className="w-6 h-6 text-foreground/80" /> },
        { name: "Power BI", icon: <BsBarChartFill className="w-6 h-6 text-foreground/80" /> },
        { name: "Tableau", icon: <SiTableau className="w-6 h-6 text-foreground/80" /> },
        // { name: "Apache Airflow", icon: <TbWindmillFilled className="w-6 h-6 text-foreground/80" /> },
        // { name: "Apache Spark", icon: <SiApachespark className="w-6 h-6 text-foreground/80" /> },
        // { name: "Apache Kafka", icon: <SiApachekafka className="w-6 h-6 text-foreground/80" /> },
      ],
    },
    {
      category: "Full-Stack Development",
      icon: <Layers className="h-6 w-6 text-primary" />,
      items: [
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-foreground/80" /> },
        { name: "React", icon: <SiReact className="w-6 h-6 text-foreground/80" /> },
        { name: "Shadcn/ui", icon: <SiShadcnui className="w-6 h-6 text-foreground/80" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-foreground/80" /> },
        { name: "Laravel", icon: <TbBrandLaravel className="w-6 h-6 text-foreground/80" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-6 h-6 text-foreground/80" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="w-6 h-6 text-foreground/80" /> },
        { name: "Figma", icon: <CgFigma className="w-6 h-6 text-foreground/80" /> },
      ],
    },
    {
      category: "Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      items: [
        { name: "Python", icon: <SiPython className="w-6 h-6 text-foreground/80" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-foreground/80" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-foreground/80" /> },
        { name: "C", icon: <SiC className="w-6 h-6 text-foreground/80" /> },
        { name: "C++", icon: <SiCplusplus className="w-6 h-6 text-foreground/80" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-6 h-6 text-foreground/80" /> },
        { name: "PHP", icon: <SiPhp className="w-6 h-6 text-foreground/80" /> },
        { name: "SQL", icon: <FaDatabase className="w-6 h-6 text-foreground/80" /> },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      items: [
        { name: "GCP", icon: <SiGooglecloud className="w-6 h-6 text-foreground/80" /> },
        // { name: "AWS", icon: <SiAwsamplify className="w-6 h-6 text-foreground/80" /> },
        { name: "Firebase", icon: <IoLogoFirebase className="w-6 h-6 text-foreground/80" /> },
        { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-foreground/80" /> },
        { name: "Netlify", icon: <SiNetlify className="w-6 h-6 text-foreground/80" /> },
        // { name: "GitHub Actions", icon: <FaGithub className="w-6 h-6 text-foreground/80" /> },
        { name: "Docker", icon: <SiDocker className="w-6 h-6 text-foreground/80" /> },
        // { name: "Kubernetes", icon: <SiKubernetes className="w-6 h-6 text-foreground/80" /> },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      items: [
        { name: "PostgreSQL", icon: <BiLogoPostgresql className="w-6 h-6 text-foreground/80" /> },
        { name: "MySQL", icon: <TbBrandMysql className="w-6 h-6 text-foreground/80" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-foreground/80" /> },
        { name: "Redis", icon: <SiRedis className="w-6 h-6 text-foreground/80" /> },
        { name: "Firebase RTDB", icon: <IoLogoFirebase className="w-6 h-6 text-foreground/80" /> },
        { name: "Firebase Firestore", icon: <IoLogoFirebase className="w-6 h-6 text-foreground/80" /> },
        { name: "Supabase", icon: <SiSupabase className="w-6 h-6 text-foreground/80" /> },
        { name: "SQLite", icon: <SiSqlite className="w-6 h-6 text-foreground/80" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">🛠️ My Skills</h2>
          <div className="w-20 h-1 bg-primary my-4 mt-6"></div>
          <p className="text-muted-foreground max-w-[700px]">
            I specialize in AI, data analytics, and full-stack development. I am always eager to learn and adapt to new technologies, ensuring that I stay at the forefront of the ever-evolving tech landscape.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 font-normal">
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
        
        
        <div className="flex justify-center">
          <p className="text-muted-foreground text-center mb-12 max-w-[700px]">
            A comprehensive list of technologies and tools I have experience with. This includes programming languages, frameworks, libraries, and cloud services that I have worked with in various projects.
          </p>
        </div>

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
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {tech.items.map((item) => (
                      <div key={item.name} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-2">
                          {item.icon}
                        </div>
                        <span className="text-xs text-muted-foreground">{item.name}</span>
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