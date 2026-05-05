"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative bg-[#fdfcfa] py-24 lg:py-32 overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-[-20%] left-[15%] w-[60%] h-[70%] animate-blob-slow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 180, 180, 0.18) 0%, rgba(0, 200, 180, 0.08) 35%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
          animationDelay: "-5s",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[-5%] w-[35%] h-[40%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 168, 107, 0.1) 0%, transparent 65%)",
          filter: "blur(50px)",
          animationDelay: "-12s",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center shadow-sm"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            <MessageCircle className="w-8 h-8 text-[#004467]" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] font-sans text-gray-900 mb-6">
            Parlons de<br />votre projet
          </h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#0891b2]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#0891b2]/30" />
          </div>

          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-sans">
            Téléphonie, réseau, internet, sécurité, mobilité ou formation : notre équipe est disponible pour vous
            accompagner.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="relative group bg-gray-900 px-8 py-6 text-base font-bold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 border-0 rounded-full font-sans"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center">
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-semibold rounded-full border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white/50 transition-all duration-300 font-sans bg-transparent"
            >
              <Link href="/formations">Voir nos formations</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
              <span>Certifié Qualiopi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0891b2]" />
              <span>+10 ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004467]" />
              <span>Réponse sous 24 h</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
