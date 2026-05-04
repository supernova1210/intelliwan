import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { FormationsHero } from "@/components/formations-hero"
import { FormationsIntro } from "@/components/formations-intro"
import { FormationsOffers } from "@/components/formations-offers"

export const metadata = {
  title: "Formations | Intelliwan",
  description:
    "Formations personnalisées certifiées Qualiopi en téléphonie d'entreprise et outils collaboratifs. Financement OPCO possible.",
}

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <main>
        <FormationsHero />
        <FormationsIntro />
        <FormationsOffers />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
