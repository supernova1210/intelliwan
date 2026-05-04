"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"

export function AuditStratCta() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#E8FFF6] relative overflow-hidden">
      {/* Decorative curves */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(0, 68, 103, 0.08) 0%, transparent 70%)",
          borderRadius: "0 0 100% 0",
        }}
      />
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "rgba(0, 68, 103, 0.05)",
          borderRadius: "0 0 100% 0",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(0, 68, 103, 0.08) 0%, transparent 70%)",
          borderRadius: "100% 0 0 0",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "rgba(0, 68, 103, 0.05)",
          borderRadius: "100% 0 0 0",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 68, 103, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#004467]/10 flex items-center justify-center">
              <Search className="w-8 h-8 text-[#004467]" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 text-balance font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {"Besoin d'un regard expert sur votre infrastructure ?"}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[#44515A] mb-10 leading-relaxed text-pretty font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {"Audit technique, conseil stratégique ou accompagnement de projet : échangeons sur vos enjeux de communication."}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#004467] hover:bg-[#003552] text-white font-medium px-8 py-6 text-base rounded-lg font-sans"
            >
              <Link href="/contact">{"Échanger avec un expert"}</Link>
            </Button>

            <Link
              href="/contact"
              className="text-[#004467] font-medium hover:underline underline-offset-4 transition-all flex items-center gap-2 group font-sans"
            >
              {"Demander un audit"}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
