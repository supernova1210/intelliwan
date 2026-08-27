"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Bell,
  Clock3,
  Filter,
  Gauge,
  Headphones,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Phone,
  PhoneOutgoing,
  Plug,
  Server,
  Settings2,
  Share2,
  ShieldCheck,
  Smartphone,
  Snowflake,
  Users,
  Zap,
} from "lucide-react"

const ORANGE = "#F2611A"

const canaux = [
  { icon: Phone, label: "Appels" },
  { icon: Mail, label: "E-mails" },
  { icon: MessageSquare, label: "Chat & web" },
  { icon: Smartphone, label: "SMS" },
  { icon: Share2, label: "Réseaux sociaux" },
]

const moteur = [
  {
    num: "01",
    title: "Qualification",
    text: "Chaque interaction est identifiée, rattachée à son contact et à son historique.",
  },
  {
    num: "02",
    title: "Priorisation",
    text: "Valeur client, urgence, engagement de service : vos règles métiers décident de l'ordre de traitement.",
  },
  {
    num: "03",
    title: "Distribution",
    text: "La tâche part vers le conseiller compétent et disponible, sur site ou en télétravail.",
  },
]

const flux = [
  {
    icon: Zap,
    title: "Flux chauds",
    tag: "Temps réel",
    text: "Appel, chat, messaging : distribués immédiatement au conseiller disponible et compétent.",
  },
  {
    icon: Snowflake,
    title: "Flux froids",
    tag: "Différé",
    text: "E-mails, formulaires, courriers : traités entre deux flux chauds, sans dégrader la prise d'appel.",
  },
  {
    icon: PhoneOutgoing,
    title: "Flux sortants",
    tag: "Proactif",
    text: "Campagnes d'appels, rappels programmés, débordement et webcallback gérés dans le même outil.",
  },
]

const posteConseiller = [
  "Tous les canaux dans une seule interface : plus de bascule entre le softphone, la boîte mail et le CRM",
  "Fiche contact, interactions liées et historique accessibles sans quitter l'écran de traitement",
  "Qualification, notes et base de connaissances au moment de l'échange",
  "Notifications et indicateurs personnels intégrés au poste de travail",
]

const supervision = [
  { icon: LayoutDashboard, label: "Tableaux de bord par équipe, groupe ou file d'attente" },
  { icon: Gauge, label: "800+ indicateurs natifs, sans développement spécifique" },
  { icon: Clock3, label: "Temps d'attente, temps de traitement et taux de décroché en direct" },
  { icon: Bell, label: "Action immédiate sur le planning et la disponibilité des conseillers" },
]

const administration = [
  { icon: Settings2, title: "Paramétrage métier", text: "Médias, compétences, priorités et règles de distribution modifiables sans recourir à l'éditeur." },
  { icon: Plug, title: "Couplage CTI natif", text: "Entrant et sortant, quel que soit l'opérateur, sur votre téléphonie actuelle." },
  { icon: Server, title: "On-premise ou cloud", text: "Hébergement en France, choisi selon vos contraintes internes et réglementaires." },
  { icon: ShieldCheck, title: "Accès et conformité", text: "SSO SAML 2.0, LDAP, gestion centralisée des habilitations, conformité RGPD." },
]

const telephonie = ["Alcatel-Lucent", "Cisco", "Avaya", "Mitel", "Microsoft", "Linphone"]
const applicatifs = ["Salesforce", "Microsoft Dynamics", "Oracle", "Verint", "NICE", "Adobe Campaign"]

export function ContactCenterKiamo() {
  return (
    <section id="kiamo" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* ---------- En-tête ---------- */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Solution partenaire
            </span>
            <span className="h-4 w-px bg-gray-200" />
            <span className="font-sans text-base font-bold lowercase leading-none" style={{ color: ORANGE }}>
              kiamo
            </span>
          </div>

          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            {"Quand le routage d'appels ne suffit plus, nous déployons "}
            <span style={{ color: ORANGE }}>Kiamo</span>
          </h2>

          <p className="mt-6 font-sans text-lg leading-relaxed text-gray-600">
            {
              "Kiamo rassemble appels, e-mails, chat, SMS et messages sociaux dans un même flux de traitement, se branche sur votre téléphonie existante et donne à chaque métier l'écran dont il a besoin. Nous l'intégrons, le paramétrons et l'exploitons avec vos équipes."
            }
          </p>
        </motion.div>

        {/* ---------- Le flux ---------- */}
        <motion.div
          className="mt-14 overflow-hidden rounded-3xl border border-[#004467]/15 bg-[#00293F]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-[0.85fr_1.3fr_0.85fr]">
            {/* Entrées */}
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Ce qui entre
              </span>
              <div className="mt-6 space-y-2.5">
                {canaux.map((c, i) => {
                  const Icon = c.icon
                  return (
                    <motion.div
                      key={c.label}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <Icon className="h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                      <span className="font-sans text-sm text-white/80">{c.label}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Moteur */}
            <div className="relative border-b border-white/10 bg-white/[0.03] p-8 lg:border-b-0 lg:border-r lg:p-10">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Le moteur Kiamo
              </span>

              <div className="relative mt-6 space-y-5">
                <span className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#F2611A]/60 via-[#F2611A]/30 to-transparent" />
                {moteur.map((m, i) => (
                  <motion.div
                    key={m.num}
                    className="relative flex gap-5"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
                  >
                    <span
                      className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-sans text-[11px] font-bold"
                      style={{ backgroundColor: "#00293F", borderColor: `${ORANGE}55`, color: ORANGE }}
                    >
                      {m.num}
                    </span>
                    <div>
                      <h4 className="font-sans text-base font-bold text-white">{m.title}</h4>
                      <p className="mt-1.5 font-sans text-sm leading-relaxed text-white/50">{m.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sorties */}
            <div className="p-8 lg:p-10">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Ce qui en sort
              </span>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-2.5">
                    <Headphones className="h-4 w-4" style={{ color: ORANGE }} />
                    <span className="font-sans text-sm font-bold text-white">Le bon conseiller</span>
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/50">
                    {"Compétence, disponibilité, multi-sites ou télétravail."}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-2.5">
                    <Gauge className="h-4 w-4" style={{ color: ORANGE }} />
                    <span className="font-sans text-sm font-bold text-white">La mesure</span>
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/50">
                    {"Chaque interaction alimente la supervision temps réel et le reporting."}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4" style={{ color: ORANGE }} />
                    <span className="font-sans text-sm font-bold text-white">Le contexte client</span>
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/50">
                    {"Historique et fiche remontés dans votre CRM au moment de l'échange."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Types de flux */}
          <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">
            {flux.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-[#00293F] px-8 py-7">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" style={{ color: ORANGE }} />
                    <h4 className="font-sans text-sm font-bold text-white">{f.title}</h4>
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-sans text-[10px] uppercase tracking-wider text-white/50">
                      {f.tag}
                    </span>
                  </div>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">{f.text}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* ---------- Poste conseiller ---------- */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ORANGE }}>
              Poste conseiller
            </span>
            <h3 className="mt-4 font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              {"Un seul écran pour traiter toutes les demandes"}
            </h3>
            <ul className="mt-8 space-y-4">
              {posteConseiller.map((p) => (
                <li key={p} className="flex gap-4 font-sans text-[15px] leading-relaxed text-gray-600">
                  <span className="mt-2.5 h-px w-5 shrink-0" style={{ backgroundColor: ORANGE }} />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 pl-5 font-sans text-[15px] font-medium text-gray-900" style={{ borderColor: ORANGE }}>
              {"Deux heures de prise en main suffisent en moyenne pour rendre un conseiller autonome."}
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 shadow-xl">
              <Image
                src="/images/kiamo-console-conseiller.webp"
                alt="Poste de travail conseiller Kiamo : traitement omnicanal, fiche contact et historique des interactions"
                width={1012}
                height={725}
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>

        {/* ---------- Supervision ---------- */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
              <Image
                src="/images/kiamo-supervision.webp"
                alt="Supervision Kiamo : indicateurs temps réel et suivi de l'activité des conseillers"
                width={1060}
                height={950}
                className="h-auto w-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ORANGE }}>
              Supervision
            </span>
            <h3 className="mt-4 font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              {"Piloter l'activité pendant qu'elle se déroule"}
            </h3>
            <p className="mt-6 font-sans text-base leading-relaxed text-gray-600">
              {"Le superviseur voit l'état des files, la charge des équipes et la tenue des engagements de service, et agit sans attendre le rapport du lendemain."}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {supervision.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-[#F2611A]/30 hover:shadow-md"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                  >
                    <Icon className="mb-3 h-5 w-5" style={{ color: ORANGE }} />
                    <p className="font-sans text-sm leading-relaxed text-gray-600">{s.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* ---------- Administration & intégration ---------- */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: ORANGE }}>
              Administration & intégration
            </span>
            <h3 className="mt-4 max-w-2xl font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              {"Kiamo se branche sur ce que vous avez déjà"}
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {administration.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2611A]/30 hover:shadow-lg"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${ORANGE}14` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: ORANGE }} />
                  </div>
                  <h4 className="mb-2 font-sans text-base font-bold text-gray-900">{a.title}</h4>
                  <p className="font-sans text-sm leading-relaxed text-gray-600">{a.text}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-gray-200 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-50 p-7">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Compatible avec votre téléphonie
              </span>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {telephonie.map((t) => (
                  <span key={t} className="font-sans text-[15px] font-medium text-gray-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-7">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Connecteurs CRM, ERP et Web Services
              </span>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {applicatifs.map((a) => (
                  <span key={a} className="font-sans text-[15px] font-medium text-gray-800">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------- CTA ---------- */}
        <motion.div
          className="mt-20 flex flex-col items-start justify-between gap-8 rounded-3xl border border-gray-200 bg-slate-50 p-10 lg:flex-row lg:items-center lg:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <h3 className="font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              {"Kiamo est-il adapté à votre centre de contact ?"}
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">
              {"Nous partons de vos volumes, de vos canaux et de votre téléphonie actuelle pour vous dire ce que l'intégration implique, concrètement."}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gray-900 px-8 py-4 font-sans text-base font-bold text-white shadow-lg transition-all duration-300 hover:gap-4 hover:bg-gray-800"
          >
            {"Étudier votre cas"}
            <ArrowRight className="h-5 w-5" style={{ color: ORANGE }} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
