import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import CookieConsent from "@/components/cookie-consent"
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
  icons: {
    icon: [
      { url: "/images/favicon-intelliwan-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-intelliwan-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/favicon-intelliwan-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/images/favicon-intelliwan-32.png",
    apple: "/images/apple-touch-icon-intelliwan.png",
  },
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
        <CookieConsent />
      </body>
    </html>
  )
}
