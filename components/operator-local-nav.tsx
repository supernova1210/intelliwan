"use client"

import { useEffect, useState } from "react"
import { Globe, Phone, Smartphone, ShieldCheck } from "lucide-react"

const navItems = [
  { id: "liens-internet", label: "Liens Internet professionnels", icon: Globe },
  { id: "telephonie-operateur", label: "Téléphonie opérateur (SIP / VoIP)", icon: Phone },
  { id: "operateur-mobile", label: "Opérateur mobile", icon: Smartphone },
  { id: "resilience-continuite", label: "Résilience & continuité", icon: ShieldCheck },
]

export function OperatorLocalNav() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600
      setIsSticky(window.scrollY > heroHeight)

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
      {isSticky && <div className="h-[60px]" />}
    </div>
  )
}
