"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Mitel", logo: "/images/mitel.png" },
  { name: "Wazo", logo: "/images/wazo.png" },
  { name: "Ascom", logo: "/images/ascom.png" },
  { name: "Fortinet", logo: "/images/fortinet.png" },
  { name: "VMware", logo: "/images/vmware-logo-grey.svg" },
  { name: "Ruckus", logo: "/images/ruckus.png" },
]

export function PartnersSection() {
  return (
    <section className="relative bg-[#fdfcfa] py-24 lg:py-32 overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[35%] h-[40%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[35%] animate-blob-slow pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.07) 0%, transparent 65%)",
          filter: "blur(50px)",
          animationDelay: "-7s",
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
            Partenaires<br />technologiques
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#0891b2]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#0891b2]/30" />
          </div>
          <p className="mt-6 text-lg text-gray-500 font-sans">
            Nous travaillons avec des fournisseurs reconnus pour garantir performance, fiabilité et sécurité.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 p-6 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-200 hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="h-14 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-auto max-h-14 w-auto max-w-[110px] object-contain"
                />
              </div>
              <span className="text-xs text-gray-400 font-sans">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
