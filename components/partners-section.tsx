const partners = [
  { name: "Mitel" },
  { name: "Wazo" },
  { name: "Ascom" },
  { name: "Fortinet" },
  { name: "VMware" },
  { name: "Ruckus" },
]

export function PartnersSection() {
  return (
    <section className="bg-[#F2F7FB] py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1C1C1C] lg:text-4xl">Partenaires technologiques</h2>
          <p className="text-lg leading-relaxed text-[#44515A]">
            Nous travaillons avec des fournisseurs reconnus pour garantir performance, fiabilité et sécurité.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {partners.map((partner, index) => (
            <div key={index} className="group flex h-20 items-center justify-center">
              {/* Placeholder logo with hover effect */}
              <div className="flex h-14 w-full items-center justify-center rounded-lg bg-white px-4 shadow-sm transition-all group-hover:shadow-md group-hover:ring-1 group-hover:ring-[#004467]/10">
                <span className="text-sm font-semibold text-[#004467] opacity-70 transition-opacity group-hover:opacity-100">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
