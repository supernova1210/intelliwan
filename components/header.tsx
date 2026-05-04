"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const solutions = [
  {
    title: "Communications & Collaborations",
    href: "/solutions/communications-collaborations",
  },
  {
    title: "Centre de contact",
    href: "/solutions/contact-center",
  },
  {
    title: "Gestion de crise & alertes",
    href: "/solutions/gestion-de-crise",
  },
  {
    title: "Audit & Accompagnement",
    href: "/solutions/audit-accompagnement",
  },
]

const navItems = [
  { label: "Formations", href: "/formations" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSolutionsOpen(false)
  }, [pathname])

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setSolutionsOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setSolutionsOpen(false), 150)
  }

  const isActive = (href: string) => pathname === href
  const isSolutionActive = solutions.some((s) => pathname === s.href)

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      />

      <div className="relative z-10 mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/intelliwan-logo.png"
            alt="Intelliwan"
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isSolutionActive || solutionsOpen
                  ? "text-gray-900 bg-gray-100/70"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              aria-expanded={solutionsOpen}
            >
              Solutions
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  className="absolute left-0 top-full pt-2"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="w-[320px] overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl shadow-xl shadow-gray-200/50 ring-1 ring-gray-100 p-2">
                    {solutions.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150 group ${
                          isActive(s.href)
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span>{s.title}</span>
                        <ChevronRight
                          className={`h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 ${
                            isActive(s.href) ? "text-white/60" : "text-gray-400"
                          }`}
                        />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other links */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "text-gray-900 bg-gray-100/70"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gray-900 text-white hover:bg-gray-800 border-0 px-5 text-sm font-medium transition-all duration-200"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-gray-900" />
          ) : (
            <Menu className="h-5 w-5 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mx-auto max-w-7xl px-6 py-4 space-y-1">
              {/* Solutions accordion */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="pl-4 space-y-0.5 pb-2">
                        {solutions.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                              isActive(s.href)
                                ? "text-gray-900 font-medium bg-gray-50"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-gray-900 bg-gray-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-3">
                <Button
                  asChild
                  className="w-full rounded-full bg-gray-900 text-white hover:bg-gray-800 border-0 text-sm font-medium"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
