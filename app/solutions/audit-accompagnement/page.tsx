import { AuditStratHero } from "@/components/audit-strat-hero"
import { AuditStratPositionnement } from "@/components/audit-strat-positionnement"
import { AuditStratAudit } from "@/components/audit-strat-audit"
import { AuditStratAmo } from "@/components/audit-strat-amo"
import { AuditStratParcours } from "@/components/audit-strat-parcours"
import { AuditStratEvolutivite } from "@/components/audit-strat-evolutivite"
import { AuditStratCta } from "@/components/audit-strat-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Audit & accompagnement stratégique | Intelliwan",
  description:
    "Audit d'infrastructure télécom, conseil, reprise d'existant et accompagnement stratégique pour sécuriser, structurer et faire évoluer des systèmes de communication à grande échelle.",
}

export default function AuditAccompagnementPage() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <main>
        <AuditStratHero />
        <AuditStratPositionnement />
        <AuditStratAudit />
        <AuditStratAmo />
        <AuditStratParcours />
        <AuditStratEvolutivite />
        <AuditStratCta />
      </main>
      <Footer />
    </div>
  )
}
