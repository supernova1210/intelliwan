import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#004467] text-white">
      {/* Bloc Infos + Navigation */}
      <div className="px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:items-start">
            {/* Informations */}
            <div className="text-center lg:text-left">
              <div className="mb-4">
                <Image
                  src="/images/intelliwan-logo.png"
                  alt="Intelliwan"
                  width={140}
                  height={35}
                  className="h-8 w-auto brightness-0 invert mx-auto lg:mx-0"
                />
              </div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-start justify-center gap-2 lg:justify-start">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>
                    4 place Berthe Morisot
                    <br />
                    69800 Saint-Priest
                    <br />
                    France
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  <a href="tel:+33487629500" className="hover:text-white transition-colors">
                    04 87 62 95 00
                  </a>
                </div>
              </div>
            </div>

            {/* Mini navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-[#0A3B52]" />
      </div>

      {/* Copyright */}
      <div className="px-6 py-6">
        <p className="text-center text-sm text-[#AFC3CF]">
          © {new Date().getFullYear()} Intelliwan. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
