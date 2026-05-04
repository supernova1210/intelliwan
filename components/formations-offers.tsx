"use client"

import type React from "react"

import { useState } from "react"
import {
  Users,
  MapPin,
  Clock,
  Euro,
  GraduationCap,
  Target,
  BookOpen,
  ClipboardCheck,
  Wrench,
  ChevronDown,
  Phone,
  Monitor,
  CheckCircle2,
  Accessibility,
  Award,
  Smartphone,
} from "lucide-react"

interface AccordionItemProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ title, icon, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={`rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm border transition-all duration-300 ${isOpen ? "border-gray-200 shadow-lg shadow-gray-200/30" : "border-gray-100 hover:border-gray-200"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
            <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${isOpen ? "bg-gradient-to-br from-[#0891b2] via-[#0284c7] to-[#10b981] opacity-20" : "bg-gray-100 opacity-100"}`} />
            <div className="absolute inset-[2px] rounded-full bg-white" />
            <span className="relative z-10">{icon}</span>
          </div>
          <span className="font-semibold text-gray-900 text-base font-sans">{title}</span>
        </div>
        <div
          className={`p-1.5 rounded-full transition-all duration-500 ease-out ${isOpen ? "bg-gray-900 rotate-180" : "bg-gray-100"}`}
        >
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-gray-500"}`} />
        </div>
      </button>
      <div className="grid transition-all duration-500 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5">
            <div className="pt-5 border-t border-gray-100">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FormationCardProps {
  id: string
  icon: React.ReactNode
  badge: string
  title: string
  subtitle: string
  profiles: string
  modalites: {
    participants: string
    lieu: string
    encadrement: string
    duree: string
    tarif: string
    tarifNote: string
  }
  objectifs: string[]
  objectifsIntro?: string
  prerequis: string[]
  programme: {
    title: string
    items: string[]
    note?: string
  }[]
  programmeDate: string
  methodes: string[]
  methodesType?: string
  suivi: string[]
  ressources: string[]
  openAccordion: string | null
  toggleAccordion: (id: string) => void
}

function FormationCard({
  id,
  icon,
  badge,
  title,
  subtitle,
  profiles,
  modalites,
  objectifs,
  objectifsIntro,
  prerequis,
  programme,
  programmeDate,
  methodes,
  methodesType,
  suivi,
  ressources,
  openAccordion,
  toggleAccordion,
}: FormationCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-200/60 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0891b2]/15 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#10b981]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="flex items-start gap-5 relative z-10">
          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0891b2] via-[#0284c7] to-[#10b981] opacity-20" />
            <div className="absolute inset-[2px] rounded-2xl bg-white/10 backdrop-blur-sm" />
            <span className="relative z-10">{icon}</span>
          </div>
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium rounded-full mb-3 border border-white/10 font-sans">
              {badge}
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-sans">{title}</h3>
            <p className="text-white/70 text-lg font-sans">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Profils concernés */}
      <div className="p-6 lg:p-8 border-b border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-3 font-sans">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-15" />
            <div className="absolute inset-[2px] rounded-full bg-white" />
            <Users className="relative z-10 w-4 h-4 text-[#0891b2]" strokeWidth={1.5} />
          </div>
          Profils concernés
        </h4>
        <p className="text-gray-600 mb-4 leading-relaxed text-lg font-sans">{profiles}</p>
        <div className="flex items-center gap-3 p-4 bg-[#fdfcfa] rounded-2xl border border-gray-100">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-15" />
            <div className="absolute inset-[2px] rounded-full bg-white" />
            <Accessibility className="relative z-10 w-4 h-4 text-[#0891b2]" strokeWidth={1.5} />
          </div>
          <p className="text-sm text-gray-600 font-sans">
            <span className="font-semibold text-gray-900">
              Formation ouverte aux personnes en situation de handicap
            </span>
            {" — "}
            <a href="/contact" className="text-[#0891b2] hover:underline font-medium">
              Nous contacter
            </a>{" "}
            {"afin d'envisager les adaptations nécessaires."}
          </p>
        </div>
      </div>

      {/* Modalités */}
      <div className="p-6 lg:p-8 border-b border-gray-100">
        <h4 className="font-semibold text-gray-900 mb-6 flex items-center gap-3 font-sans">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-15" />
            <div className="absolute inset-[2px] rounded-full bg-white" />
            <ClipboardCheck className="relative z-10 w-4 h-4 text-[#0891b2]" strokeWidth={1.5} />
          </div>
          Modalités
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { icon: Users, label: "Participants", value: modalites.participants },
            { icon: MapPin, label: "Lieu", value: modalites.lieu },
            { icon: GraduationCap, label: "Encadrement", value: modalites.encadrement },
            { icon: Clock, label: "Durée", value: modalites.duree },
          ].map((item, i) => (
            <div key={i} className="group flex items-start gap-3 p-4 bg-[#fdfcfa] rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-[2px] rounded-full bg-white" />
                <item.icon className="relative z-10 w-4 h-4 text-[#0891b2]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-sans">{item.label}</p>
                <p className="font-bold text-gray-900 font-sans">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="group flex items-start gap-3 p-4 bg-[#fdfcfa] rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 col-span-2 lg:col-span-1">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="absolute inset-[2px] rounded-full bg-white" />
              <Euro className="relative z-10 w-4 h-4 text-[#0891b2]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-sans">Tarif</p>
              <p className="font-bold text-gray-900 font-sans">{modalites.tarif}</p>
              <p className="text-xs text-gray-500 font-sans">{modalites.tarifNote}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#0891b2]/5 to-[#10b981]/5 rounded-2xl border border-[#0891b2]/15 col-span-2 lg:col-span-1">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0891b2] to-[#10b981] opacity-25" />
              <div className="absolute inset-[2px] rounded-full bg-white" />
              <Award className="relative z-10 w-4 h-4 text-[#0891b2]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-[#0891b2] mb-0.5 uppercase tracking-wide font-semibold font-sans">Financement</p>
              <p className="font-bold text-gray-900 font-sans">Certifié Qualiopi</p>
              <p className="text-xs text-gray-500 font-sans">depuis le 07/11/23 - financement OPCO possible</p>
            </div>
          </div>
        </div>
        <p className="mt-5 text-sm text-gray-500 font-sans">
          <a href="/contact" className="inline-flex items-center gap-2 text-[#0891b2] hover:underline font-medium">
            Nous contacter pour plus {"d'informations"}
            <span>{"→"}</span>
          </a>
        </p>
      </div>

      {/* Accordions */}
      <div className="p-6 lg:p-8 space-y-3">
        {/* Objectifs */}
        <AccordionItem
          title="Objectifs pédagogiques"
          icon={<Target className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />}
          isOpen={openAccordion === `${id}-objectifs`}
          onToggle={() => toggleAccordion(`${id}-objectifs`)}
        >
          {objectifsIntro && <p className="text-[#44515A] mb-4">{objectifsIntro}</p>}
          <ul className="space-y-3">
            {objectifs.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#44515A]">
                <span className="p-1 bg-[#E8FFF6] rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        {/* Prérequis */}
        <AccordionItem
          title="Prérequis"
          icon={<ClipboardCheck className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />}
          isOpen={openAccordion === `${id}-prerequis`}
          onToggle={() => toggleAccordion(`${id}-prerequis`)}
        >
          <ul className="space-y-3">
            {prerequis.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#44515A]">
                <span className="p-1 bg-[#E8FFF6] rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        {/* Programme */}
        <AccordionItem
          title="Programme de la formation"
          icon={<BookOpen className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />}
          isOpen={openAccordion === `${id}-programme`}
          onToggle={() => toggleAccordion(`${id}-programme`)}
        >
          <p className="text-xs text-[#44515A] mb-6 italic">(Mis à jour le {programmeDate})</p>
          <div className="space-y-4">
            {programme.map((module, moduleIndex) => (
              <div
                key={moduleIndex}
                className={`p-5 rounded-xl border border-[#004467]/10 ${moduleIndex % 2 === 0 ? "bg-gradient-to-r from-[#E8FFF6]/40 to-[#F2F7FB]/50" : "bg-gradient-to-r from-[#F2F7FB]/50 to-[#E8FFF6]/40"}`}
              >
                <h5 className="font-semibold text-[#004467] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#004467] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {moduleIndex + 1}
                  </span>
                  {module.title}
                  {module.note && (
                    <span className="text-xs font-normal text-[#44515A] bg-white/80 px-2 py-1 rounded-full">
                      {module.note}
                    </span>
                  )}
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {module.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[#44515A]">
                      <div className="w-2 h-2 bg-[#004467] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AccordionItem>

        {/* Méthodes pédagogiques */}
        <AccordionItem
          title="Méthodes pédagogiques"
          icon={<Monitor className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />}
          isOpen={openAccordion === `${id}-methodes`}
          onToggle={() => toggleAccordion(`${id}-methodes`)}
        >
          {methodesType && <p className="text-[#44515A] mb-4">{methodesType}</p>}
          <ul className="space-y-3">
            {methodes.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#44515A]">
                <span className="p-1 bg-[#E8FFF6] rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-[#E8FFF6]/50 rounded-xl border border-[#004467]/10">
            <h6 className="font-semibold text-[#004467] mb-2 flex items-center gap-2">
              <Accessibility className="w-4 h-4" />
              Accessibilité
            </h6>
            <p className="text-sm text-[#44515A]">
              Si vous êtes en situation de handicap, veuillez nous contacter au{" "}
              <a href="tel:0487629500" className="text-[#004467] font-semibold hover:underline">
                04 87 62 95 00
              </a>{" "}
              afin d'envisager les adaptations possibles.
            </p>
          </div>
        </AccordionItem>

        {/* Suivi & évaluation */}
        <AccordionItem
          title="Suivi & évaluation"
          icon={<ClipboardCheck className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />}
          isOpen={openAccordion === `${id}-suivi`}
          onToggle={() => toggleAccordion(`${id}-suivi`)}
        >
          <ul className="space-y-3">
            {suivi.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#44515A]">
                <span className="p-1 bg-[#E8FFF6] rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>

        {/* Ressources pédagogiques */}
        <AccordionItem
          title="Ressources pédagogiques"
          icon={<Wrench className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />}
          isOpen={openAccordion === `${id}-ressources`}
          onToggle={() => toggleAccordion(`${id}-ressources`)}
        >
          <ul className="space-y-3">
            {ressources.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#44515A]">
                <span className="p-1 bg-[#E8FFF6] rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-[#004467]" strokeWidth={2} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </AccordionItem>
      </div>
    </div>
  )
}

export function FormationsOffers() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("inattend-objectifs")

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  // Formation 1: Standard Inattend
  const formationInattend = {
    id: "inattend",
    icon: <Phone className="w-8 h-8 text-white" strokeWidth={1.5} />,
    badge: "Formation utilisateur",
    title: "Standard Inattend",
    subtitle: "Prise en main de la solution & gestion du standard téléphonique",
    profiles: "Standardistes et toute personne émettant ou recevant des appels au standard.",
    modalites: {
      participants: "1 à 5 personnes",
      lieu: "En présentiel",
      encadrement: "Formateur dédié",
      duree: "4 heures",
      tarif: "À partir de 520,00 € HT",
      tarifNote: "(frais de déplacement inclus - 50 km)",
    },
    objectifsIntro: "À l'issue de la formation, les participants sauront :",
    objectifs: [
      "Recevoir et émettre un appel",
      "Mettre en attente et transférer un appel",
      "Gérer les renvois d'appels",
      "Ajouter un contact",
      "Superviser les postes",
      "Consulter le journal des appels",
    ],
    prerequis: [
      "Disposer d'un identifiant de connexion Inattend",
      "Avoir une ligne téléphonique fonctionnelle pour émettre et recevoir des appels",
    ],
    programmeDate: "24/02/2025",
    programme: [
      {
        title: "Démarrer avec Inattend",
        items: [
          "Connexion / déconnexion",
          "Interface, menus, langues",
          "Panneau de connexion",
          "Boutons de contrôle d'appel",
          "États de ligne",
          "Icônes de disponibilité",
          "Recherche d'un utilisateur",
        ],
      },
      {
        title: "Gestion des appels",
        items: [
          "Répondre & raccrocher",
          "Mise en attente",
          "Appels internes et externes",
          "Transfert (avec / sans consultation)",
          "Reprise d'appel",
          "Affichage du journal",
          "Supervision des postes",
        ],
      },
      {
        title: "Fonctionnalités avancées",
        note: "(selon configuration)",
        items: ["Panneau chat", "Panneau journal", "Enregistrement des communications"],
      },
      {
        title: "Poste Mitel — cas pratiques",
        items: ["Présentation du poste", "Prise en main", "Exercices pratiques"],
      },
      {
        title: "Conclusion",
        items: ["Questions / réponses", "Évaluation", "Ouverture de session (si nécessaire)", "Derniers cas pratiques"],
      },
    ],
    methodes: [
      "Formation réalisée dans les locaux du client",
      "Démonstrations pas-à-pas",
      "Cas pratiques guidés",
      "Échanges et corrections immédiates",
    ],
    suivi: [
      "Exercices pratiques",
      "Questions/réponses",
      "Fiche d'évaluation",
      "Feuille de présence",
      "Attestation de formation",
    ],
    ressources: ["Salle dédiée aux formations avec écran", "Support de cours remis aux stagiaires en fin de formation"],
  }

  const formationMiCollab = {
    id: "micollab",
    icon: <Smartphone className="w-8 h-8 text-white" strokeWidth={1.5} />,
    badge: "Formation utilisateurs",
    title: "MiCollab",
    subtitle: "Prise en main de l'application MiCollab (PC & smartphone)",
    profiles: "Toutes les personnes utilisant l'application MiCollab.",
    modalites: {
      participants: "1 à 5 personnes",
      lieu: "Présentiel OU visio",
      encadrement: "Formateur dédié",
      duree: "2 heures",
      tarif: "À partir de 390,00 € HT",
      tarifNote: "(frais de déplacement inclus - 50 km)",
    },
    objectifs: ["Utiliser efficacement la téléphonie et les outils collaboratifs de l'application MiCollab"],
    prerequis: [
      "Disposer d'un compte MiCollab",
      "Avoir l'application installée sur son smartphone professionnel ou sur son PC",
    ],
    programmeDate: "24/02/2025",
    programme: [
      {
        title: "Démarrer avec l'application MiCollab",
        items: ["Présentation de l'interface", "Personnalisation de l'accueil"],
      },
      {
        title: "Annuaire & conférence",
        items: [
          "Gérer ses contacts",
          "Créer / supprimer un groupe",
          "Lancer une conférence instantanée",
          "Fonctionnalités liées aux conférences instantanées",
          "Recevoir & émettre un appel",
        ],
      },
      {
        title: "Paramétrer son application MiCollab",
        items: [
          "Personnaliser son interface",
          "Modifier son mot de passe",
          "Installer MiCollab sur smartphone via auto-déploiement",
          "Créer et paramétrer la messagerie vocale",
          "Gérer ses états de présence selon son planning",
          "Mettre un appel en attente",
          "Transférer un appel",
        ],
      },
      {
        title: "Gérer les appels téléphoniques",
        items: [
          "Accéder au journal d'appel",
          "Consulter la messagerie vocale",
          "Répondre / émettre des appels",
          "Couper son micro",
          "Transfert (avec / sans consultation)",
          "Établir une conférence",
          "Création de la messagerie vocale",
        ],
      },
      {
        title: "Cas pratiques",
        items: [
          "Émettre un appel via une recherche annuaire",
          "Répondre à un appel + mise en attente",
          "Transfert avec consultation",
          "Activation d'un renvoi d'appel",
          "Gérer son annuaire personnel",
        ],
      },
      {
        title: "Conclusion",
        items: ["Questions / réponses", "Évaluation", "Gestion des renvois d'appels"],
      },
    ],
    methodesType: "Formation dans les locaux du client ou à distance (visioconférence, lien envoyé par mail).",
    methodes: ["Démonstrations pas-à-pas", "Cas pratiques guidés"],
    suivi: [
      "Exercices pratiques",
      "Questions/réponses orales",
      "Fiche d'évaluation de la formation",
      "Feuille de présence",
      "Attestation de formation",
    ],
    ressources: [
      "Salle équipée d'un écran (si présentiel)",
      "Supports de cours remis aux stagiaires en fin de formation",
    ],
  }

  return (
    <section id="formations" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background with blobs */}
      <div className="absolute inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-10%] left-[-5%] w-[45%] h-[40%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.3) 0%, rgba(0, 200, 180, 0.15) 30%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-[30%] right-[-5%] w-[40%] h-[35%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.25) 0%, rgba(0, 100, 150, 0.12) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute bottom-[-5%] left-[15%] w-[40%] h-[35%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 168, 107, 0.25) 0%, rgba(0, 200, 120, 0.12) 35%, transparent 65%)",
            filter: "blur(60px)",
            animationDelay: "-10s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-sans">
            Nos programmes de formation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Découvrez les 2 offres de formation que nous proposons, entièrement adaptables à vos besoins.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#0891b2]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/50" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#0891b2]/30" />
          </div>
        </div>

        <div className="space-y-12">
          <FormationCard {...formationInattend} openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
          <FormationCard {...formationMiCollab} openAccordion={openAccordion} toggleAccordion={toggleAccordion} />
        </div>
      </div>
    </section>
  )
}
