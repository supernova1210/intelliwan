import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-general-sans",
})

export const metadata: Metadata = {
  title: "Intelliwan | Infrastructures télécom & réseau pour entreprises",
  description:
    "Téléphonie, internet, réseaux, sécurité, mobilité et formations certifiées Qualiopi pour accompagner vos équipes.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#004467",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
