import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "ReceiptAI - AI-Powered Receipt Analysis",
  description:
    "Bring transparency to your finances with AI-powered receipt analysis that reduces tracking time by 70%",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'