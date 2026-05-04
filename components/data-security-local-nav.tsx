"use client"

import { useEffect, useState } from "react"
import { Network, Wifi, ShieldCheck, Globe } from "lucide-react"

const navItems = [
  { id: "infrastructure-lan", label: "Infrastructure réseau (LAN)", icon: Network },
  { id: "wifi-mobilite", label: "Wi-Fi & mobilité", icon: Wifi },
  { id: "securite-donnees", label: "Sécurité des données", icon: ShieldCheck },
  { id: "sdwan", label: "SD-WAN intelligent", icon: Globe },
]

export function DataSecurityLocalNav() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if nav should be sticky (after hero section)
      const heroHeight = 600
      setIsSticky(window.scrollY > heroHeight)

      // Determine active section
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))

      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={`w-full z-40 transition-all duration-300 ${isSticky ? "fixed top-[72px] left-0 right-0" : "relative"}`}
    >
      <div className="backdrop-blur-md bg-[#F2F7FB]/70 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-2 md:gap-4 py-3 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#004467] text-white shadow-md"
                      : "text-gray-600 hover:text-[#004467] hover:bg-white/80"
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>
      {/* Spacer when sticky to prevent content jump */}
      {isSticky && <div className="h-[60px]" />}
    </div>
  )
}
