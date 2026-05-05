"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"

const solutions = [
  { label: "Communications & Collaborations", href: "/solutions/communications-collaborations" },
  { label: "Centre de contact", href: "/solutions/contact-center" },
  { label: "Audit & Accompagnement", href: "/solutions/audit-accompagnement" },
  { label: "Gestion de crise", href: "/solutions/gestion-de-crise" },
]

const pages = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#04111d] text-white overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,180,180,0.4), rgba(0,68,103,0.6), rgba(0,180,180,0.4), transparent)",
        }}
      />

      {/* Background blob */}
      <div
        className="absolute top-[-30%] left-[-10%] w-[50%] h-[80%] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.25) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-5%] w-[35%] h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 168, 107, 0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 pt-16 lg:pt-20 pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-5">
            <Image
              src="/images/intelliwan-logo.png"
              alt="Intelliwan"
              width={150}
              height={38}
              className="h-9 w-auto brightness-0 invert mb-5"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs font-sans mb-8">
              Intégrateur télécom et réseau au service des entreprises, collectivités et établissements de santé depuis plus de 10 ans.
            </p>

            {/* Certif badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] flex-shrink-0" />
              <span className="text-xs text-white/60 font-sans">Certifié Qualiopi</span>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="tel:+33487629500"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group font-sans"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                04 87 62 95 00
              </a>
              <a
                href="mailto:contact@intelliwan.fr"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group font-sans"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                contact@intelliwan.fr
              </a>
              <div className="flex items-start gap-3 text-sm text-white/50 font-sans">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                </div>
                <span>4 place Berthe Morisot<br />69800 Saint-Priest, France</span>
              </div>
            </div>
          </div>

          {/* Col 2 — Solutions */}
          <div className="lg:col-span-4 lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6 font-sans">
              Solutions
            </p>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="group flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors font-sans"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#00a86b] transition-colors flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Pages + CTA */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6 font-sans">
              Navigation
            </p>
            <ul className="space-y-3 mb-10">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="group flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors font-sans"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#00a86b] transition-colors flex-shrink-0" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/15 hover:text-white transition-all duration-200 font-sans group"
            >
              Nous contacter
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 font-sans">
            © {new Date().getFullYear()} Intelliwan. Tous droits réservés.
          </p>
          <p className="text-xs text-white/25 font-sans">
            Intégrateur télécom & réseau
          </p>
        </div>
      </div>
    </footer>
  )
}
