import { HeroPositioningWrapper } from "@/components/hero-positioning-wrapper"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { SolutionsSection } from "@/components/solutions-section"
import { FormationsWhyWrapper } from "@/components/formations-why-wrapper"
import { ClientsSection } from "@/components/clients-section"
import { PartnersSection } from "@/components/partners-section"
import { AboutSection } from "@/components/about-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <main>
        <HeroPositioningWrapper />
        <TargetAudienceSection />
        <SolutionsSection />
        <FormationsWhyWrapper />
        <ClientsSection />
        <PartnersSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
