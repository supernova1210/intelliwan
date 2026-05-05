"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Jean-Christophe Aupoil",
    role: "Associé · CTO",
    specialty: "Expertise voix grands systèmes",
    linkedin: "https://www.linkedin.com/in/jean-christophe-aupoil-1242aa10/",
    image: "/images/team/jc-aupoil.jpeg",
  },
  {
    name: "Nicolas Leveque",
    role: "Associé · CEO",
    specialty: "Expertise Communications unifiées & Santé",
    linkedin: "https://www.linkedin.com/in/nicolas-leveque-ctr/",
    image: "/images/team/nicolas-leveque.jpeg",
  },
  {
    name: "Pierre Chapat",
    role: "Associé · CFO",
    specialty: "Expertise santé",
    linkedin: "https://www.linkedin.com/in/pierre-chapat/",
    image: "/images/team/pierre-chapat.jpeg",
  },
]

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function AboutSection() {
  return (
    <section className="relative bg-[#fdfcfa] py-24 lg:py-32 overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-[-15%] left-[-8%] w-[50%] h-[60%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.1) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-8%] w-[40%] h-[50%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
          animationDelay: "-10s",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-sans text-gray-900">
            À propos<br />d'Intelliwan
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#0891b2]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#0891b2]/30" />
          </div>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl font-sans">
            Intelliwan accompagne depuis plusieurs années les entreprises et collectivités dans la modernisation
            de leurs infrastructures télécom et réseau. Notre approche repose sur l'expertise technique,
            l'écoute et l'exigence.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group flex flex-col items-center text-center rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 p-8 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full mb-6 shadow-md overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#004467]/20 transition-all duration-300">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Photo de ${member.name}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1 font-sans">{member.name}</h3>
              <p className="text-sm font-semibold text-[#004467] mb-1 font-sans">{member.role}</p>
              <p className="text-sm text-gray-400 mb-5 font-sans">{member.specialty}</p>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label={`Profil LinkedIn de ${member.name}`}
              >
                <LinkedInLogo className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#004467] font-semibold hover:gap-3 transition-all duration-200 font-sans"
          >
            Nous contacter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
