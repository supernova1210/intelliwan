import { CommunicationsHero } from "@/components/communications-hero"
import { ProblemsSolutionsTransition } from "@/components/problems-solutions-transition"
import { CommunicationsTechSolutionsSection } from "@/components/communications-tech-solutions-section"
import { CommunicationsAdaptedSection } from "@/components/communications-adapted-section"
import { CommunicationsTimelineSection } from "@/components/communications-timeline-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Communications & Collaborations | Intelliwan",
  description:
    "Téléphonie d'entreprise et outils collaboratifs conçus pour les organisations multi-sites, à forte volumétrie d'utilisateurs et aux exigences élevées de disponibilité.",
}

export default function CommunicationsCollaborationsPage() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <main>
        <CommunicationsHero />
        <ProblemsSolutionsTransition />
        <CommunicationsTechSolutionsSection />
        <CommunicationsAdaptedSection />
        <CommunicationsTimelineSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
