"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Filter,
  Gauge,
  Headphones,
  Inbox,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PhoneOutgoing,
  Server,
  Settings2,
  Share2,
  ShieldCheck,
  Smartphone,
  Snowflake,
  Unplug,
  Users,
  Zap,
} from "lucide-react"

const ORANGE = "#F2611A"
const NAVY = "#1B2A4A"

const chiffres = [
  { value: "15 ans", label: "de croissance à deux chiffres" },
  { value: "380+", label: "clients, parc doublé en 4 ans" },
  { value: "18 000+", label: "utilisateurs actifs au quotidien" },
  { value: "100 %", label: "du produit développé en France" },
]

const souverainete = [
  {
    icon: MapPin,
    title: "Développée en France, à Bordeaux",
    text: "R&D, support et exploitation maîtrisés en interne, sans dépendance à un éditeur tiers.",
  },
  {
    icon: Unplug,
    title: "Indépendante de votre téléphonie",
    text: "Architecture découplée des opérateurs et du PABX, interopérable avec tous les systèmes du marché.",
  },
  {
    icon: Server,
    title: "On-premise ou cloud",
    text: "Hébergement au choix, selon vos contraintes réglementaires, sectorielles ou internes.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité RGPD assurée",
    text: "SSO SAML 2.0 et LDAP, gestion centralisée des accès, sécurisation des données clients.",
  },
]

const etapes = [
  {
    num: "01",
    icon: Inbox,
    title: "Capturez",
    text: "Voix, e-mail, chat, web, SMS, réseaux sociaux : tous les flux entrent dans un seul moteur.",
  },
  {
    num: "02",
    icon: Filter,
    title: "Triez",
    text: "Priorisation automatique de chaque flux selon vos critères métiers : valeur client, urgence, SLA.",
  },
  {
    num: "03",
    icon: Users,
    title: "Distribuez",
    text: "La tâche la plus importante est attribuée en temps réel au bon conseiller, au bon moment.",
  },
  {
    num: "04",
    icon: LineChart,
    title: "Analysez",
    text: "Mesure détaillée de l'activité pour optimiser en continu votre stratégie omnicanale.",
  },
]

const canaux = [
  { icon: Phone, label: "Voix" },
  { icon: Mail, label: "E-mail" },
  { icon: MessageSquare, label: "Chat & Web" },
  { icon: Smartphone, label: "SMS" },
  { icon: Share2, label: "Réseaux sociaux" },
]

const flux = [
  {
    icon: Zap,
    title: "Flux chauds",
    text: "Appel, chat, messaging : distribution immédiate au conseiller disponible et compétent.",
  },
  {
    icon: Snowflake,
    title: "Flux froids",
    text: "E-mail, courrier, formulaire : traités entre deux flux chauds, sans interrompre le service.",
  },
  {
    icon: PhoneOutgoing,
    title: "Flux sortants",
    text: "Campagnes d'appels, rappels programmés, débordement et webcallback gérés nativement.",
  },
]

const consoles = [
  {
    icon: Headphones,
    role: "Conseiller",
    name: "Console Kiwi",
    points: [
      "Toutes les interactions omnicanales dans une interface unique",
      "Fiche contact, interactions liées et suivi en trois onglets",
      "Thème, couleurs et avatar personnalisables",
    ],
    highlight: "2 h de formation suffisent en moyenne pour rendre un conseiller autonome.",
  },
  {
    icon: Gauge,
    role: "Superviseur",
    name: "Pilotage temps réel",
    points: [
      "800+ indicateurs natifs, sans développement spécifique",
      "Tableaux de bord personnalisables par équipe et par métier",
      "Action directe sur le planning et la disponibilité des conseillers",
    ],
    highlight: "Qualité de service moyenne observée : jusqu'à 98 % chez les clients Kiamo.",
  },
  {
    icon: Settings2,
    role: "Administrateur",
    name: "Paramétrage & flux",
    points: [
      "Configuration des médias, compétences et priorités",
      "Gestion centralisée des accès et des habilitations",
      "Connecteurs, API et Web Services natifs",
    ],
    highlight: "Vous gardez la maîtrise de votre infrastructure et de vos données.",
  },
]

const telephonie = ["Alcatel-Lucent", "Cisco", "Avaya", "Mitel", "Microsoft", "Linphone"]
const applicatifs = ["Salesforce", "Microsoft Dynamics", "Oracle", "Verint", "NICE", "Adobe Campaign"]

export function ContactCenterKiamo() {
  return (
    <section id="kiamo" className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60" />
        <div className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#F2611A]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#1B2A4A]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* ---------- En-tête ---------- */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                Partenariat technologique
              </span>
              <span className="h-4 w-px bg-gray-200" />
              <span className="text-lg font-bold lowercase leading-none tracking-tight" style={{ color: ORANGE }}>
                kiamo
              </span>
            </div>

            <h2 className="font-sans text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              {"Le centre de contact omnicanal "}
              <span style={{ color: ORANGE }}>souverain</span>
            </h2>

            <p className="mt-6 font-sans text-lg leading-relaxed text-gray-600">
              {
                "Éditée et hébergée en France, Kiamo pilote l'ensemble de vos interactions clients — voix, e-mail, chat, SMS, réseaux sociaux — depuis un moteur unique, indépendant de votre opérateur comme de votre PABX."
              }
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {chiffres.map((c, i) => (
                <motion.div
                  key={c.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                >
                  <div className="font-sans text-2xl font-bold text-gray-900 lg:text-3xl">{c.value}</div>
                  <div className="mt-1.5 font-sans text-xs leading-snug text-gray-500">{c.label}</div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 font-sans text-sm text-gray-400">
              {"Soutenu par Bpifrance · classé Deloitte Technology Fast 50"}
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 shadow-xl">
              <Image
                src="/images/kiamo-console-conseiller.webp"
                alt="Console conseiller Kiamo : interactions omnicanales, fiche contact et historique client"
                width={1012}
                height={725}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-center font-sans text-sm text-gray-400">
              {"Console conseiller — toutes les interactions dans une interface unique"}
            </p>
          </motion.div>
        </div>

        {/* ---------- Souveraineté ---------- */}
        <div className="mt-24">
          <motion.h3
            className="font-sans text-2xl font-bold text-gray-900 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {"Une solution maîtrisée de bout en bout"}
          </motion.h3>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {souverainete.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2611A]/30 hover:shadow-lg"
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
                  <h4 className="mb-2 font-sans text-base font-bold text-gray-900">{item.title}</h4>
                  <p className="font-sans text-sm leading-relaxed text-gray-600">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ---------- Moteur de distribution ---------- */}
        <div className="mt-24 overflow-hidden rounded-3xl border border-gray-200 bg-slate-50">
          <div className="p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-sans text-2xl font-bold text-gray-900 md:text-3xl">
                {"Un seul moteur, du premier contact à la mesure de la performance"}
              </h3>
              <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-gray-600">
                {
                  "Chaque interaction entre dans le même flux de traitement, quel que soit le canal, puis repart vers le conseiller le mieux placé pour la traiter."
                }
              </p>
            </motion.div>

            {/* Canaux */}
            <div className="mt-8 flex flex-wrap gap-3">
              {canaux.map((c, i) => {
                const Icon = c.icon
                return (
                  <motion.span
                    key={c.label}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 font-sans text-sm text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Icon className="h-4 w-4" style={{ color: ORANGE }} />
                    {c.label}
                  </motion.span>
                )
              })}
            </div>

            {/* Étapes */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {etapes.map((e, i) => {
                const Icon = e.icon
                return (
                  <motion.div
                    key={e.num}
                    className="relative rounded-2xl border border-gray-200 bg-white p-6"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.09 }}
                  >
                    <span className="font-mono text-xs font-bold tracking-widest text-gray-300">{e.num}</span>
                    <div className="mt-4 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${NAVY}0F` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: NAVY }} />
                      </div>
                      <h4 className="font-sans text-lg font-bold text-gray-900">{e.title}</h4>
                    </div>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-gray-600">{e.text}</p>
                    {i < etapes.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-gray-300 lg:block" />
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Types de flux */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {flux.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.title}
                    className="flex gap-4 rounded-2xl bg-white/70 p-5"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: ORANGE }} />
                    <div>
                      <h4 className="font-sans text-sm font-bold text-gray-900">{f.title}</h4>
                      <p className="mt-1 font-sans text-sm leading-relaxed text-gray-600">{f.text}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ---------- Trois consoles ---------- */}
        <div className="mt-24">
          <motion.h3
            className="font-sans text-2xl font-bold text-gray-900 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {"Trois consoles, trois métiers"}
          </motion.h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {consoles.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div
                  key={c.role}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${ORANGE}14` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: ORANGE }} />
                    </div>
                    <div>
                      <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {c.role}
                      </div>
                      <div className="font-sans text-base font-bold text-gray-900">{c.name}</div>
                    </div>
                  </div>

                  <ul className="mb-6 space-y-2.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-3 font-sans text-sm leading-relaxed text-gray-600">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: ORANGE }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <p
                    className="mt-auto border-l-2 pl-4 font-sans text-sm font-medium italic"
                    style={{ borderColor: `${ORANGE}55`, color: NAVY }}
                  >
                    {c.highlight}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ---------- Écosystème ---------- */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            className="order-2 overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 shadow-lg lg:order-1"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/kiamo-supervision.webp"
              alt="Supervision Kiamo : indicateurs temps réel et suivi de l'activité des conseillers"
              width={1060}
              height={950}
              className="h-auto w-full"
            />
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-sans text-2xl font-bold text-gray-900 md:text-3xl">
              {"Ouverte sur votre système d'information"}
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-gray-600">
              {
                "Couplage CTI natif pour les flux entrants et sortants, quel que soit l'opérateur, et distribution des appels vers des agents multi-sites ou en télétravail sans remettre en cause l'existant."
              }
            </p>

            <div className="mt-8">
              <div className="mb-3 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-gray-400">
                <Phone className="h-3.5 w-3.5" />
                Téléphonie compatible
              </div>
              <div className="flex flex-wrap gap-2">
                {telephonie.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 font-sans text-sm text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <div className="mb-3 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-gray-400">
                <BarChart3 className="h-3.5 w-3.5" />
                {"Connecteurs, API et Web Services"}
              </div>
              <div className="flex flex-wrap gap-2">
                {applicatifs.map((a) => (
                  <span
                    key={a}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 font-sans text-sm text-gray-700"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-7 font-sans text-sm text-gray-500">
              {"CRM, ERP, GED, Workforce Management, Quality Monitoring : Kiamo s'interface avec votre SI existant."}
            </p>
          </motion.div>
        </div>

        {/* ---------- CTA ---------- */}
        <motion.div
          className="mt-24 overflow-hidden rounded-3xl p-10 lg:p-14"
          style={{ backgroundColor: NAVY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="font-sans text-2xl font-bold leading-tight text-white md:text-3xl">
                {"Simplifiez la gestion de votre centre de contacts avec Kiamo"}
              </h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/60">
                {
                  "Souveraine, omnicanale et pensée pour vos conseillers, superviseurs et administrateurs. Nous étudions avec vous l'intégration dans votre environnement existant."
                }
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full px-7 py-4 font-sans text-base font-bold text-white transition-all hover:gap-4"
              style={{ backgroundColor: ORANGE }}
            >
              {"Parler de votre projet"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
