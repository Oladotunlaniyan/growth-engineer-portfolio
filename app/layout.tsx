import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akinrinola Oreoluwa- Personal Portfolio",
  description: "Personal portfolio website for Akinrinola Oreoluwa, Growth Engineer and project manager",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-gradient-to-b from-blue-950 via-blue-900 to-purple-900")}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'
