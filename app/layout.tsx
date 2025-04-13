import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Nafi Mulyo Kusumo | Portfolio",
  description: "AI & /ML Enthusiast | Data Intelligence Intern @ Astra International | Engineering Physics @ ITB",
  icons: {
    icon: "/favicon.ico",
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}


import './globals.css'
import { icons } from "lucide-react"
