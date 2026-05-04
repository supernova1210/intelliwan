import { CrisisMgmtHero } from "@/components/crisis-mgmt-hero"
import { CrisisMgmtEnjeux } from "@/components/crisis-mgmt-enjeux"
import { CrisisMgmtContinuity } from "@/components/crisis-mgmt-continuity"
import { CrisisMgmtAlert } from "@/components/crisis-mgmt-alert"
import { CrisisMgmtExpertise } from "@/components/crisis-mgmt-expertise"
import { CrisisMgmtContextes } from "@/components/crisis-mgmt-contextes"
import { CrisisMgmtCta } from "@/components/crisis-mgmt-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Gestion de crise & alertes | Intelliwan",
  description:
    "Dispositifs de continuité d'activité, solutions d'alerte et de redondance pour sites sensibles : collectivités, établissements de santé, industrie et infrastructures critiques.",
}

export default function GestionDeCrisePage() {
  return (
    <div className="min-h-screen bg-[#010101]">
      <main>
        <CrisisMgmtHero />
        <CrisisMgmtEnjeux />
        <CrisisMgmtContinuity />
        <CrisisMgmtAlert />
        <CrisisMgmtExpertise />
        <CrisisMgmtContextes />
        <CrisisMgmtCta />
      </main>
      <Footer />
    </div>
  )
}
