"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Filter,
  Inbox,
  LineChart,
  Mail,
  MessageSquare,
  Phone,
  PhoneOutgoing,
  Share2,
  Smartphone,
  Snowflake,
  Users,
  Zap,
} from "lucide-react"

const INK = "#001A28"
const PETROL = "#004467"
const ORANGE = "#F2611A"

const chiffres = [
  { value: "15", unit: "ans", label: "de croissance à deux chiffres" },
  { value: "380", unit: "+", label: "clients, parc doublé en 4 ans" },
  { value: "18 000", unit: "+", label: "utilisateurs actifs par jour" },
  { value: "100", unit: "%", label: "du produit développé en France" },
]

const souverainete = [
  {
    index: "01",
    title: "Développée à Bordeaux",
    text: "R&D, support et exploitation maîtrisés en interne. Aucune dépendance à un éditeur tiers, aucun maillon hors de France.",
  },
  {
    index: "02",
    title: "Indépendante de votre téléphonie",
    text: "Architecture découplée des opérateurs et du PABX. Elle s'installe sur l'existant plutôt que de le remplacer.",
  },
  {
    index: "03",
    title: "On-premise ou cloud",
    text: "L'hébergement suit vos contraintes réglementaires et sectorielles, pas l'inverse.",
  },
  {
    index: "04",
    title: "Conforme RGPD",
    text: "SSO SAML 2.0 et LDAP, gestion centralisée des accès, sécurisation des données clients de bout en bout.",
  },
]

const canaux = [
  { icon: Phone, label: "Voix" },
  { icon: Mail, label: "E-mail" },
  { icon: MessageSquare, label: "Chat & web" },
  { icon: Smartphone, label: "SMS" },
  { icon: Share2, label: "Réseaux sociaux" },
]

const etapes = [
  { num: "01", icon: Inbox, title: "Capturez", text: "Tous les canaux entrent dans un moteur unique." },
  { num: "02", icon: Filter, title: "Triez", text: "Priorisation selon vos critères métiers : valeur client, urgence, SLA." },
  { num: "03", icon: Users, title: "Distribuez", text: "La tâche la plus importante part vers le bon conseiller, en temps réel." },
  { num: "04", icon: LineChart, title: "Analysez", text: "Mesure détaillée de l'activité pour ajuster en continu." },
]

const flux = [
  { icon: Zap, color: ORANGE, title: "Flux chauds", text: "Appel, chat, messaging : distribution immédiate au conseiller disponible et compétent." },
  { icon: Snowflake, color: "#0891b2", title: "Flux froids", text: "E-mail, courrier, formulaire : traités entre deux flux chauds, sans interrompre le service." },
  { icon: PhoneOutgoing, color: "#00a86b", title: "Flux sortants", text: "Campagnes d'appels, rappels programmés, débordement et webcallback, gérés nativement." },
]

const consoles = [
  {
    role: "Conseiller",
    name: "Console Kiwi",
    points: [
      "Toutes les interactions omnicanales dans une seule interface",
      "Fiche contact, interactions liées et suivi en trois onglets",
      "Thème, couleurs et avatar personnalisables",
    ],
    stat: "2 h",
    statLabel: "pour rendre un conseiller autonome",
  },
  {
    role: "Superviseur",
    name: "Pilotage temps réel",
    points: [
      "Indicateurs natifs disponibles sans développement",
      "Tableaux de bord par équipe et par métier",
      "Action directe sur le planning et la disponibilité",
    ],
    stat: "800+",
    statLabel: "indicateurs natifs, jusqu'à 98 % de QS",
  },
  {
    role: "Administrateur",
    name: "Paramétrage & flux",
    points: [
      "Configuration des médias, compétences et priorités",
      "Gestion centralisée des accès et habilitations",
      "Connecteurs, API et Web Services natifs",
    ],
    stat: "100 %",
    statLabel: "de votre infrastructure sous contrôle",
  },
]

const telephonie = ["Alcatel-Lucent", "Cisco", "Avaya", "Mitel", "Microsoft", "Linphone"]
const applicatifs = ["Salesforce", "Microsoft Dynamics", "Oracle", "Verint", "NICE", "Adobe Campaign"]

export function ContactCenterKiamo() {
  return (
    <section id="kiamo" className="relative bg-[#FBFAF8]">
      {/* ═══════════ Bandeau d'ouverture ═══════════ */}
      <div className="relative overflow-hidden" style={{ backgroundColor: INK }}>
        {/* Halo pétrole */}
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[560px] w-[560px] rounded-full opacity-60 blur-[130px]"
          style={{ backgroundColor: PETROL }}
        />
        {/* Lame orange diagonale */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block"
          style={{
            backgroundColor: ORANGE,
            opacity: 0.09,
            clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        {/* Filet orange */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: `${ORANGE}55` }} />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-40 pt-24 lg:px-8 lg:pb-52 lg:pt-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10 flex items-center gap-4">
                <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
                  Partenariat technologique
                </span>
              </div>

              <h2 className="font-sans text-[13vw] font-bold leading-[0.85] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
                <span className="lowercase" style={{ color: ORANGE }}>
                  kiamo
                </span>
              </h2>
              <p className="mt-6 max-w-xl font-sans text-2xl font-semibold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl">
                {"Le centre de contact omnicanal, souverain de bout en bout."}
              </p>

              <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-white/55 lg:text-lg">
                {
                  "Éditée et hébergée en France, Kiamo pilote toutes vos interactions clients depuis un moteur unique, indépendant de votre opérateur comme de votre PABX."
                }
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
                <span>Bpifrance</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Deloitte Technology Fast 50</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span style={{ color: ORANGE }}>100 % français</span>
              </div>
            </motion.div>

            {/* Console conseiller */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1.6 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div
                className="absolute -inset-3 rounded-[28px] opacity-25 blur-2xl"
                style={{ backgroundColor: ORANGE }}
              />
              <div
                className="relative overflow-hidden rounded-2xl border shadow-2xl"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ORANGE }} />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
                    console conseiller
                  </span>
                </div>
                <Image
                  src="/images/kiamo-console-conseiller.webp"
                  alt="Console conseiller Kiamo : interactions omnicanales, fiche contact et historique client"
                  width={1012}
                  height={725}
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════ Chiffres, en chevauchement ═══════════ */}
      <div className="relative z-20 mx-auto -mt-24 max-w-[1400px] px-6 lg:-mt-28 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/5 shadow-[0_24px_70px_-30px_rgba(0,26,40,0.5)] lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {chiffres.map((c) => (
            <div key={c.label} className="bg-white px-6 py-8 lg:px-8 lg:py-10">
              <div className="flex items-baseline gap-1">
                <span
                  className="font-sans text-4xl font-bold tabular-nums tracking-tight lg:text-5xl"
                  style={{ color: INK }}
                >
                  {c.value}
                </span>
                <span className="font-sans text-xl font-bold lg:text-2xl" style={{ color: ORANGE }}>
                  {c.unit}
                </span>
              </div>
              <p className="mt-3 font-sans text-[13px] leading-snug text-gray-500">{c.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ═══════════ Souveraineté ═══════════ */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gray-400">Souveraineté</span>
            </div>
            <h3
              className="font-sans text-3xl font-bold leading-[1.05] tracking-tight lg:text-[2.75rem]"
              style={{ color: INK }}
            >
              {"Maîtrisée de bout"}
              <br />
              {"en bout."}
            </h3>
            <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-gray-500">
              {"Quatre engagements qui expliquent pourquoi nous la déployons sur les environnements sensibles."}
            </p>
          </motion.div>

          <div>
            {souverainete.map((item, i) => (
              <motion.div
                key={item.index}
                className="group relative border-t border-gray-200 py-8 first:border-t-0 first:pt-0 lg:py-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <div className="flex gap-6 lg:gap-10">
                  <span
                    className="font-mono text-sm font-bold tabular-nums transition-colors duration-300"
                    style={{ color: `${ORANGE}66` }}
                  >
                    {item.index}
                  </span>
                  <div className="flex-1">
                    <h4
                      className="font-sans text-xl font-bold tracking-tight lg:text-2xl"
                      style={{ color: INK }}
                    >
                      {item.title}
                    </h4>
                    <p className="mt-3 max-w-2xl font-sans text-[15px] leading-relaxed text-gray-500">{item.text}</p>
                  </div>
                </div>
                <span
                  className="absolute left-0 top-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: ORANGE }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ Le moteur ═══════════ */}
      <div className="relative overflow-hidden" style={{ backgroundColor: PETROL }}>
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-25 blur-[120px]"
          style={{ backgroundColor: ORANGE }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">Le moteur</span>
            </div>
            <h3 className="font-sans text-3xl font-bold leading-[1.05] tracking-tight text-white lg:text-[2.75rem]">
              {"Un seul flux, du premier contact à la mesure de la performance."}
            </h3>
          </motion.div>

          {/* Canaux entrants */}
          <div className="mt-14 flex flex-wrap items-center gap-3">
            <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">Entrées</span>
            {canaux.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.span
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-sans text-sm text-white/80 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                  {c.label}
                </motion.span>
              )
            })}
          </div>

          {/* Pipeline */}
          <div className="relative mt-12">
            <motion.span
              className="absolute left-0 top-[38px] hidden h-px origin-left lg:block"
              style={{ backgroundColor: `${ORANGE}70`, width: "100%" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
            <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
              {etapes.map((e, i) => {
                const Icon = e.icon
                return (
                  <motion.div
                    key={e.num}
                    className="relative"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
                  >
                    <div
                      className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl border"
                      style={{ backgroundColor: INK, borderColor: `${ORANGE}40` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: ORANGE }} />
                    </div>
                    <div className="mt-6 flex items-baseline gap-3">
                      <span className="font-mono text-xs tabular-nums text-white/30">{e.num}</span>
                      <h4 className="font-sans text-xl font-bold tracking-tight text-white">{e.title}</h4>
                    </div>
                    <p className="mt-3 max-w-[15rem] font-sans text-sm leading-relaxed text-white/50">{e.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Types de flux */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
            {flux.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="px-7 py-8" style={{ backgroundColor: PETROL }}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" style={{ color: f.color }} />
                    <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-white">{f.title}</h4>
                  </div>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">{f.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ═══════════ Trois consoles ═══════════ */}
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-8 lg:py-32">
        <motion.div
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gray-400">Les consoles</span>
            </div>
            <h3
              className="max-w-xl font-sans text-3xl font-bold leading-[1.05] tracking-tight lg:text-[2.75rem]"
              style={{ color: INK }}
            >
              {"Trois métiers, trois interfaces."}
            </h3>
          </div>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-gray-200 lg:grid-cols-3">
          {consoles.map((c, i) => (
            <motion.div
              key={c.role}
              className="group flex flex-col bg-white p-8 transition-colors duration-500 hover:bg-[#FBFAF8] lg:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.24em]" style={{ color: ORANGE }}>
                {c.role}
              </span>
              <h4 className="mt-3 font-sans text-2xl font-bold tracking-tight" style={{ color: INK }}>
                {c.name}
              </h4>

              <ul className="mt-7 space-y-3.5">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 font-sans text-[15px] leading-relaxed text-gray-500">
                    <span className="mt-2 h-px w-4 shrink-0" style={{ backgroundColor: `${ORANGE}80` }} />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <div className="flex items-baseline gap-3 border-t border-gray-200 pt-6">
                  <span
                    className="font-sans text-3xl font-bold tabular-nums tracking-tight"
                    style={{ color: PETROL }}
                  >
                    {c.stat}
                  </span>
                  <span className="font-sans text-[13px] leading-snug text-gray-400">{c.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════ Écosystème ═══════════ */}
      <div className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: ORANGE }}
            />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
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
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10" style={{ backgroundColor: ORANGE }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gray-400">Écosystème</span>
            </div>
            <h3
              className="font-sans text-3xl font-bold leading-[1.05] tracking-tight lg:text-[2.75rem]"
              style={{ color: INK }}
            >
              {"Ouverte sur votre SI."}
            </h3>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-gray-500">
              {
                "Couplage CTI natif en entrant comme en sortant, quel que soit l'opérateur, et distribution vers des agents multi-sites ou en télétravail sans remettre en cause l'existant."
              }
            </p>

            <div className="mt-10 border-t border-gray-200 pt-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">Téléphonie</span>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {telephonie.map((t) => (
                  <span key={t} className="font-sans text-[15px] font-medium" style={{ color: INK }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Connecteurs & API
              </span>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {applicatifs.map((a) => (
                  <span key={a} className="font-sans text-[15px] font-medium" style={{ color: INK }}>
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 font-sans text-sm text-gray-400">
              {"CRM, ERP, GED, Workforce Management, Quality Monitoring."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ═══════════ CTA ═══════════ */}
      <div className="relative overflow-hidden" style={{ backgroundColor: ORANGE }}>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[38%] lg:block"
          style={{ backgroundColor: INK, opacity: 0.07, clipPath: "polygon(0 0, 72% 0, 100% 100%, 0 100%)" }}
        />
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-8 lg:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="font-sans text-3xl font-bold leading-[1.05] tracking-tight lg:text-[2.5rem]"
              style={{ color: INK }}
            >
              {"Simplifiez la gestion de votre centre de contacts."}
            </h3>
            <p className="mt-5 font-sans text-base leading-relaxed lg:text-lg" style={{ color: "rgba(0,26,40,0.7)" }}>
              {"Nous étudions avec vous l'intégration de Kiamo dans votre environnement existant."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full px-8 py-5 font-sans text-base font-bold text-white transition-all duration-300 hover:gap-6"
              style={{ backgroundColor: INK }}
            >
              {"Parler de votre projet"}
              <ArrowRight className="h-5 w-5" style={{ color: ORANGE }} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
