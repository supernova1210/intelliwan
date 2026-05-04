import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#E8FFF6] relative overflow-hidden">
      {/* Top-left curve */}
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

      {/* Bottom-right curve */}
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

      {/* Subtle center wave */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse, rgba(0, 68, 103, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6 text-balance">
            Parlons de votre projet
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#44515A] mb-10 leading-relaxed text-pretty">
            Téléphonie, réseau, internet, sécurité, mobilité ou formation : notre équipe est disponible pour vous
            accompagner.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#004467] hover:bg-[#003552] text-white font-medium px-8 py-6 text-base rounded-lg"
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>

            <Link
              href="/solutions"
              className="text-[#004467] font-medium hover:underline underline-offset-4 transition-all flex items-center gap-2 group"
            >
              Découvrir nos solutions
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
