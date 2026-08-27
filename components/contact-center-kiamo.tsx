"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Bell,
  Clock3,
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
const PETROL = "#00293F"

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

const sorties = [
  { icon: Headphones, title: "Le bon conseiller", text: "Compétence, disponibilité, multi-sites ou télétravail." },
  { icon: Gauge, title: "La mesure", text: "Chaque interaction alimente la supervision temps réel et le reporting." },
  { icon: Users, title: "Le contexte client", text: "Historique et fiche remontés dans votre CRM au moment de l'échange." },
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
  { icon: Clock3, label: "Temps d'attente, de traitement et taux de décroché en direct" },
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

/* Chrome sombre commun aux deux captures */
function ScreenFrame({
  label,
  src,
  alt,
  width,
  height,
}: {
  label: string
  src: string
  alt: string
  width: number
  height: number
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl" style={{ backgroundColor: PETROL }}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ORANGE }} />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 font-sans text-[10px] uppercase tracking-[0.18em] text-white/35">{label}</span>
      </div>
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
    </div>
  )
}

export function ContactCenterKiamo() {
  return (
    <section id="kiamo" className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 lg:px-8 lg:py-24">
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
            {"Toutes vos interactions clients dans "}
            <span style={{ color: ORANGE }}>un seul flux de traitement</span>
          </h2>

          <p className="mt-6 font-sans text-lg leading-relaxed text-gray-600">
            {
              "Appels, e-mails, chat, SMS et messages sociaux : Kiamo les rassemble, les priorise selon vos règles métiers et les distribue au bon conseiller, en se branchant sur la téléphonie que vous avez déjà. Nous l'intégrons, le paramétrons et l'exploitons avec vos équipes."
            }
          </p>
        </motion.div>

        {/* ---------- Le flux ---------- */}
        <motion.div
          className="mt-14 overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_-40px_rgba(0,41,63,0.8)]"
          style={{ backgroundColor: PETROL }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-[0.85fr_1.3fr_0.85fr]">
            {/* Entrées */}
            <div className="relative border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Ce qui entre
              </span>
              <div className="mt-6 space-y-2.5">
                {canaux.map((c, i) => {
                  const Icon = c.icon
                  return (
                    <motion.div
                      key={c.label}
                      className="relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      {/* balayage lumineux cyclique */}
                      <motion.span
                        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${ORANGE}22, transparent)`,
                        }}
                        animate={{ x: ["0%", "400%"] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          repeatDelay: 4.4,
                          delay: i * 0.45,
                          ease: "easeInOut",
                        }}
                      />
                      <Icon className="relative h-4 w-4 shrink-0" style={{ color: ORANGE }} />
                      <span className="relative font-sans text-sm text-white/80">{c.label}</span>
                      <motion.span
                        className="relative ml-auto h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: ORANGE }}
                        animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.35, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 4.4, delay: i * 0.45 }}
                      />
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
                <span className="absolute bottom-2 left-[15px] top-2 w-px bg-gradient-to-b from-[#F2611A]/60 via-[#F2611A]/30 to-transparent" />
                {/* impulsion qui descend le long de l'axe */}
                <motion.span
                  className="absolute left-[13px] h-2 w-[5px] rounded-full"
                  style={{ backgroundColor: ORANGE, boxShadow: `0 0 12px ${ORANGE}` }}
                  animate={{ top: ["2%", "96%"], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 3.4, ease: "easeInOut", delay: 1.4 }}
                />

                {moteur.map((m, i) => (
                  <motion.div
                    key={m.num}
                    className="relative flex gap-5"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
                  >
                    <motion.span
                      className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-sans text-[11px] font-bold"
                      style={{ backgroundColor: PETROL, borderColor: `${ORANGE}55`, color: ORANGE }}
                      animate={{
                        borderColor: [`${ORANGE}55`, ORANGE, `${ORANGE}55`],
                        boxShadow: ["0 0 0 rgba(242,97,26,0)", `0 0 16px ${ORANGE}55`, "0 0 0 rgba(242,97,26,0)"],
                      }}
                      transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 4.6, delay: 1.6 + i * 0.7 }}
                    >
                      {m.num}
                    </motion.span>
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
                {sorties.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <motion.div
                      key={s.title}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                      animate={{
                        borderColor: ["rgba(255,255,255,0.10)", `${ORANGE}4D`, "rgba(255,255,255,0.10)"],
                        backgroundColor: ["rgba(255,255,255,0.04)", "rgba(242,97,26,0.07)", "rgba(255,255,255,0.04)"],
                      }}
                      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 4.4, delay: 3.4 + i * 0.25 }}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4" style={{ color: ORANGE }} />
                        <span className="font-sans text-sm font-bold text-white">{s.title}</span>
                      </div>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-white/50">{s.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Types de flux */}
          <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-3">
            {flux.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="group px-8 py-7 transition-colors duration-500 hover:bg-white/[0.03]"
                  style={{ backgroundColor: PETROL }}
                >
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
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: ORANGE }} />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                Poste conseiller
              </span>
            </div>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              {"Un seul écran pour traiter toutes les demandes"}
            </h3>
            <ul className="mt-8 space-y-4">
              {posteConseiller.map((p, i) => (
                <motion.li
                  key={p}
                  className="flex gap-4 font-sans text-[15px] leading-relaxed text-gray-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <span className="mt-2.5 h-px w-5 shrink-0" style={{ backgroundColor: ORANGE }} />
                  {p}
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 inline-flex items-baseline gap-3 rounded-2xl px-5 py-4" style={{ backgroundColor: `${ORANGE}0F` }}>
              <span className="font-sans text-2xl font-bold tracking-tight" style={{ color: ORANGE }}>
                2 h
              </span>
              <span className="font-sans text-[15px] text-gray-700">
                {"de prise en main pour rendre un conseiller autonome"}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div
              className="absolute -right-4 -top-4 h-32 w-32 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: ORANGE }}
            />
            <div className="relative">
              <ScreenFrame
                label="poste conseiller"
                src="/images/kiamo-console-conseiller.webp"
                alt="Poste de travail conseiller Kiamo : traitement omnicanal, fiche contact et historique des interactions"
                width={1012}
                height={725}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Supervision, bande contrastée ---------- */}
      <div className="relative overflow-hidden" style={{ backgroundColor: PETROL }}>
        <div
          className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[130px]"
          style={{ backgroundColor: ORANGE }}
        />
        <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
          >
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl">
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
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: ORANGE }} />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                Supervision
              </span>
            </div>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              {"Piloter l'activité pendant qu'elle se déroule"}
            </h3>
            <p className="mt-6 font-sans text-base leading-relaxed text-white/55 lg:text-lg">
              {
                "Le superviseur voit l'état des files, la charge des équipes et la tenue des engagements de service, et agit sans attendre le rapport du lendemain."
              }
            </p>

            <div className="mt-9 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
              {supervision.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.label}
                    className="p-5 transition-colors duration-500 hover:bg-white/[0.06]"
                    style={{ backgroundColor: PETROL }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                  >
                    <Icon className="mb-3 h-5 w-5" style={{ color: ORANGE }} />
                    <p className="font-sans text-sm leading-relaxed text-white/60">{s.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Administration & intégration ---------- */}
      <div className="bg-[#F6F8FA]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: ORANGE }} />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
                Administration & intégration
              </span>
            </div>
            <h3 className="max-w-2xl font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              {"Kiamo se branche sur ce que vous avez déjà"}
            </h3>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {administration.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div
                  key={a.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F2611A]/40 hover:shadow-[0_20px_40px_-24px_rgba(0,41,63,0.45)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span
                    className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: ORANGE }}
                  />
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
            <div className="bg-white p-7">
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Compatible avec votre téléphonie
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {telephonie.map((t) => (
                  <span key={t} className="font-sans text-[15px] font-medium text-gray-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-7">
              <div className="flex items-center gap-2.5">
                <Plug className="h-3.5 w-3.5" style={{ color: ORANGE }} />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Connecteurs CRM, ERP et Web Services
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {applicatifs.map((a) => (
                  <span key={a} className="font-sans text-[15px] font-medium text-gray-800">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------- CTA ---------- */}
          <motion.div
            className="relative mt-16 flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl p-10 lg:flex-row lg:items-center lg:p-12"
            style={{ backgroundColor: PETROL }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-25 blur-[100px]"
              style={{ backgroundColor: ORANGE }}
            />
            <div className="relative max-w-2xl">
              <h3 className="font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
                {"Kiamo est-il adapté à votre centre de contact ?"}
              </h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-white/55">
                {
                  "Nous partons de vos volumes, de vos canaux et de votre téléphonie actuelle pour vous dire ce que l'intégration implique, concrètement."
                }
              </p>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex shrink-0 items-center gap-3 rounded-full px-8 py-4 font-sans text-base font-bold text-white shadow-lg transition-all duration-300 hover:gap-4"
              style={{ backgroundColor: ORANGE }}
            >
              {"Étudier votre cas"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
