import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "Jean-Christophe Aupoil",
    role: "Associé — CTO",
    specialty: "Expertise voix grands systèmes",
    linkedin: "https://www.linkedin.com/in/jean-christophe-aupoil-1242aa10/",
    image: "/images/team/jc-aupoil.jpeg",
  },
  {
    name: "Nicolas Leveque",
    role: "Associé — CEO",
    specialty: "Expertise Communications unifiées & Santé",
    linkedin: "https://www.linkedin.com/in/nicolas-leveque-ctr/",
    image: "/images/team/nicolas-leveque.jpeg",
  },
  {
    name: "Pierre Chapat",
    role: "Associé — CFO",
    specialty: "Expertise santé",
    linkedin: "https://www.linkedin.com/in/pierre-chapat/",
    image: "/images/team/pierre-chapat.jpeg",
  },
]

function LinkedInLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-intelliwan-text mb-6">À propos d'Intelliwan</h2>
          <p className="text-lg text-intelliwan-text-secondary max-w-3xl mx-auto leading-relaxed">
            Intelliwan accompagne depuis plusieurs années les entreprises et collectivités dans la modernisation de
            leurs infrastructures télécom et réseau. Notre approche repose sur l'expertise technique, l'écoute et
            l'exigence pour garantir des communications fiables et sécurisées.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-14">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-intelliwan-light mb-5 shadow-sm overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Photo de ${member.name}`}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-intelliwan-text mb-1">{member.name}</h3>

              {/* Role */}
              <p className="text-sm font-medium text-intelliwan-text-secondary mb-1">{member.role}</p>

              {/* Specialty */}
              <p className="text-sm text-intelliwan-text-secondary/80 mb-4">{member.specialty}</p>

              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={`Profil LinkedIn de ${member.name}`}
              >
                <LinkedInLogo className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 text-intelliwan-primary font-medium hover:underline underline-offset-4 transition-all"
          >
            En savoir plus sur Intelliwan
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
