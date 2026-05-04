import { ContactCenterHero } from "@/components/contact-center-hero"
import { ContactCenterEnjeux } from "@/components/contact-center-enjeux"
import { ContactCenterArchitecture } from "@/components/contact-center-architecture"
import { ContactCenterSolutions } from "@/components/contact-center-solutions"
import { ContactCenterBenefices } from "@/components/contact-center-benefices"
import { ContactCenterCta } from "@/components/contact-center-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Centre de contact & Expérience client | Intelliwan",
  description:
    "Transformez chaque interaction en avantage concurrentiel grâce à une plateforme de centre de contact omnicanal intelligente. Solutions Mitel CX, MiContact Center Business, Workflow Studio.",
}

export default function ContactCenterPage() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <main>
        <ContactCenterHero />
        <ContactCenterEnjeux />
        <ContactCenterArchitecture />
        <ContactCenterSolutions />
        <ContactCenterBenefices />
        <ContactCenterCta />
      </main>
      <Footer />
    </div>
  )
}
