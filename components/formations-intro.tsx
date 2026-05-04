"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FormationsIntro() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with blobs - continuing from hero */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-20%] right-[-5%] w-[50%] h-[60%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.35) 0%, rgba(0, 200, 180, 0.2) 30%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-[20%] left-[-10%] w-[45%] h-[50%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.3) 0%, rgba(0, 100, 150, 0.15) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.3) 0%, rgba(0, 200, 120, 0.15) 35%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-10s",
          }}
        />
        <div
          className="absolute top-[30%] left-[30%] w-[25%] h-[30%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 180, 100, 0.15) 0%, rgba(255, 200, 120, 0.08) 40%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-sans">
              Un accompagnement complet
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 font-sans">
              <span className="font-semibold text-gray-900">INTELLIWAN</span> met à votre disposition son savoir-faire
              pour vous accompagner dans l'utilisation, la mise en service et la maintenance des systèmes de téléphonie
              que nous vous proposons à la vente.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 font-sans">
              Nous proposons des formations personnalisées, adaptées à tous les utilisateurs en tenant compte des
              différents niveaux de connaissances et des besoins de chacun.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 font-sans">
              Dans le cadre de notre démarche qualité, nous avons fait le choix de passer la certification{" "}
              <span className="font-semibold text-gray-900">Qualiopi</span> afin de vous permettre de faire financer
              vos formations par votre <span className="font-semibold">OPCO</span> (Opérateur de compétences agréés par
              {"l'État"}). Cette certification vous garantit, également, notre niveau de qualité.
            </p>

            {/* Download button */}
            <div className="pt-2">
              <Button
                asChild
                className="group bg-gray-900 hover:bg-gray-800 text-white px-6 py-5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/documents/intelliwan-certificat-qualiopi.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger notre certification
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right column - Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glass card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/60 shadow-xl shadow-gray-200/30">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] via-[#0284c7] to-[#10b981] opacity-20" />
                    <div className="absolute inset-[2px] rounded-full bg-white" />
                    <Clock className="relative z-10 w-6 h-6 text-[#0891b2]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-sans">
                      Formations accessibles sous 20 jours*
                    </h3>
                    <p className="text-gray-600 font-sans">Vous souhaitez vous former, contactez-nous :</p>
                  </div>
                </div>

                {/* Contact options */}
                <div className="flex flex-col gap-4 mb-8">
                  <Link
                    href="mailto:contact@intelliwan.fr"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-[#fdfcfa] border border-gray-100 hover:border-[#0891b2]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-15 group-hover:opacity-25 transition-opacity" />
                      <div className="absolute inset-[2px] rounded-full bg-white" />
                      <Mail className="relative z-10 w-5 h-5 text-[#0891b2]" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-[#0891b2] transition-colors font-sans">
                      contact@intelliwan.fr
                    </span>
                  </Link>
                  <Link
                    href="tel:0487629500"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-[#fdfcfa] border border-gray-100 hover:border-[#0891b2]/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-15 group-hover:opacity-25 transition-opacity" />
                      <div className="absolute inset-[2px] rounded-full bg-white" />
                      <Phone className="relative z-10 w-5 h-5 text-[#0891b2]" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-[#0891b2] transition-colors font-sans">
                      04 87 62 95 00
                    </span>
                  </Link>
                </div>

                {/* Footnote */}
                <div className="pt-6 border-t border-gray-200/60">
                  <p className="text-sm text-gray-500 italic font-sans">
                    *Afin de préparer au mieux votre formation, {"l'idéal"} est de prévoir un délai minimum de 20 jours.
                    Ce délai vous permet de monter votre dossier de financement et de planifier votre formation.
                  </p>
                </div>
              </div>

              {/* Decorative glow behind card */}
              <div
                className="absolute -inset-4 -z-10 rounded-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, rgba(0, 180, 180, 0.15) 0%, rgba(0, 168, 107, 0.1) 40%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
