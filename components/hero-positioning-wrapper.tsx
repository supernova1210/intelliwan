"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Building2, Network, Zap } from "lucide-react"
import Image from "next/image"

export function HeroPositioningWrapper() {
  const positioningRef = useRef(null)
  const isPositioningInView = useInView(positioningRef, { once: true, margin: "-100px" })

  const keyPoints = [
    {
      icon: Building2,
      title: "Spécialiste des grands systèmes",
      description: "Infrastructure téléphonique à grande échelle pour les organisations exigeantes",
      color: "#004AAD",
      bgColor: "rgba(0, 74, 173, 0.15)",
    },
    {
      icon: Award,
      title: "Expert Mitel Gold",
      description: "Certification Gold et maîtrise approfondie des architectures Mitel MyVoice 5000",
      color: "#00D084",
      bgColor: "rgba(0, 208, 132, 0.15)",
    },
    {
      icon: Network,
      title: "Environnements critiques",
      description: "Solutions robustes pour les déploiements complexes et haute disponibilité",
      color: "#0891b2",
      bgColor: "rgba(8, 145, 178, 0.15)",
    },
    {
      icon: Zap,
      title: "Agilité d'une PME",
      description: "La réactivité et la proximité sans compromis sur la compétence technique",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.15)",
    },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Shared background for both Hero and Positioning - one continuous canvas */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        {/* Large teal/cyan blob - moved to top area */}
        <div
          className="absolute top-[-5%] left-[-10%] w-[55%] h-[70%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.4) 0%, rgba(0, 200, 180, 0.25) 30%, rgba(0, 180, 160, 0.1) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Blue blob - moved higher */}
        <div
          className="absolute top-[5%] left-[10%] w-[40%] h-[50%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 68, 103, 0.35) 0%, rgba(0, 100, 150, 0.2) 35%, transparent 65%)",
            filter: "blur(70px)",
            animationDelay: "-3s",
          }}
        />

        {/* Green/emerald blob - moved higher on right side */}
        <div
          className="absolute top-[0%] right-[-5%] w-[50%] h-[65%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 168, 107, 0.35) 0%, rgba(0, 200, 120, 0.2) 35%, transparent 65%)",
            filter: "blur(75px)",
            animationDelay: "-7s",
          }}
        />

        {/* Soft purple/lavender blob - mid section */}
        <div
          className="absolute top-[40%] right-[15%] w-[35%] h-[45%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(120, 100, 180, 0.25) 0%, rgba(150, 120, 200, 0.12) 40%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-12s",
          }}
        />

        {/* Warm accent blob - visible in hero area */}
        <div
          className="absolute top-[15%] left-[30%] w-[30%] h-[35%] animate-blob-drift"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 180, 100, 0.2) 0%, rgba(255, 200, 120, 0.1) 40%, transparent 60%)",
            filter: "blur(55px)",
          }}
        />

        {/* Additional teal blob at bottom for positioning area */}
        <div
          className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 180, 180, 0.3) 0%, rgba(0, 200, 180, 0.15) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-15s",
          }}
        />

        {/* Subtle top gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(253, 252, 250, 0.3) 0%, transparent 15%, transparent 85%, rgba(253, 252, 250, 0.3) 100%)",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl xl:text-7xl">
              L'expertise télécom{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#00a86b] via-[#00c77a] to-[#00a86b] bg-clip-text text-transparent">
                  au service
                </span>
              </span>{" "}
              <br className="hidden lg:block" />
              des systèmes complexes
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl max-w-3xl">
              Téléphonie d'entreprise, communications unifiées et centres de contact multicanal dédiés aux ETI,
              collectivités et grands sites industriels.
            </p>

            <div className="mt-8 flex items-start gap-5">
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#004467]/10 via-cyan-500/10 to-[#004467]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-xl border border-gray-200/80 px-5 py-4 shadow-sm hover:border-[#004467]/30 hover:shadow-md transition-all duration-500">
                    <div className="flex flex-col items-center gap-3">
                      <Image
                        src="/images/mitel-logo.svg"
                        alt="Mitel"
                        width={120}
                        height={40}
                        className="h-8 w-auto opacity-80"
                      />
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#00a86b]" />
                        <span className="text-[#00a86b] font-bold text-sm tracking-wide">Gold</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 border-l-2 border-[#004467]/20 pl-5">
                <p className="text-sm leading-relaxed text-gray-600 font-medium">
                  Expert certifié Mitel Gold – Spécialiste des environnements Mitel MyVoice 5000 et des architectures
                  télécoms complexes (+200 utilisateurs, systèmes critiques).
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="relative group bg-gray-900 px-8 py-5 text-base font-bold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 border-0 rounded-full"
              >
                <Link href="/solutions/audit-accompagnement">
                  <span className="relative z-10 flex items-center">
                    Demander un audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="relative group border-gray-300 px-8 py-5 text-base font-semibold text-gray-700 hover:text-gray-900 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-gray-400 transition-all duration-300 rounded-full"
              >
                <Link href="/contact">
                  <span className="relative z-10">Découvrir notre expertise</span>
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8 border-t border-gray-200/50 pt-8">
              <div className="group">
                <p className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-[#004467] transition-colors duration-300">
                  15+
                </p>
                <p className="text-sm text-gray-500 mt-1">Années d'expertise</p>
              </div>
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="group">
                <p className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-[#004AAD] transition-colors duration-300">
                  500+
                </p>
                <p className="text-sm text-gray-500 mt-1">Clients accompagnés</p>
              </div>
              <div className="h-10 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              <div className="group">
                <p className="text-3xl font-bold text-gray-900 tracking-tight group-hover:text-[#004AAD] transition-colors duration-300">
                  Qualiopi
                </p>
                <p className="text-sm text-gray-500 mt-1">Certifié</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== POSITIONING CONTENT ===== */}
      <div ref={positioningRef} className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isPositioningInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold tracking-tight text-gray-900 leading-[1.1]">
              Des systèmes de téléphonie conçus pour les environnements complexes.
            </h2>
          </motion.div>

          {/* Features - Liftoff style with icons on blurred color blobs */}
          <div className="grid gap-12 md:gap-16 grid-cols-2 lg:grid-cols-4">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isPositioningInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group text-center"
                >
                  {/* Icon on blurred color blob */}
                  <div className="relative mx-auto mb-6 w-28 h-28 flex items-center justify-center">
                    {/* Blurred background blob */}
                    <motion.div
                      className="absolute inset-0 rounded-full transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${point.bgColor} 0%, transparent 70%)`,
                        filter: "blur(20px)",
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    />
                    {/* Outer glow on hover */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${point.color}20 0%, transparent 60%)`,
                        filter: "blur(25px)",
                        transform: "scale(1.3)",
                      }}
                    />
                    {/* Icon */}
                    <Icon
                      className="relative z-10 w-10 h-10 transition-all duration-300 group-hover:scale-110"
                      style={{ color: point.color }}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-[#004AAD]">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[220px] mx-auto">{point.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom decorative element */}
          <motion.div
            className="mt-20 flex justify-center items-center gap-3"
            initial={{ opacity: 0 }}
            animate={isPositioningInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#004AAD]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00D084]/50" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#004AAD]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
