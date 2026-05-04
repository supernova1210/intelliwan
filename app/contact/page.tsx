import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated blob background */}
      <div className="fixed inset-0 bg-[#fdfcfa]">
        <div
          className="absolute top-[-10%] left-[-5%] w-[45%] h-[40%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 180, 180, 0.25) 0%, rgba(0, 200, 180, 0.12) 30%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-[40%] right-[-8%] w-[40%] h-[35%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 68, 103, 0.2) 0%, rgba(0, 100, 150, 0.1) 35%, transparent 65%)",
            filter: "blur(65px)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="absolute bottom-[-5%] left-[20%] w-[40%] h-[35%] animate-blob-slow pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(0, 168, 107, 0.2) 0%, rgba(0, 200, 120, 0.1) 35%, transparent 65%)",
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

      {/* Contact Section */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left Column - Info */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6">Contactez-nous</h1>
              <p className="text-lg text-[#44515A] mb-12 max-w-md">
                Nous sommes disponibles pour répondre à vos questions, étudier vos projets ou vous accompagner dans vos
                besoins télécom et réseau.
              </p>

              <div>
                <h2 className="text-xl font-bold text-[#1C1C1C] mb-6">Coordonnées</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />
                    <span className="text-[#44515A]">
                      <span className="font-semibold text-[#1C1C1C]">Téléphone :</span>{" "}
                      <a href="tel:0487629500" className="hover:text-[#004467] transition-colors">
                        04 87 62 95 00
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#004467]" strokeWidth={1.5} />
                    <span className="text-[#44515A]">
                      <span className="font-semibold text-[#1C1C1C]">Email :</span>{" "}
                      <a href="mailto:contact@intelliwan.com" className="hover:text-[#004467] transition-colors">
                        contact@intelliwan.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#004467] mt-0.5" strokeWidth={1.5} />
                    <span className="text-[#44515A]">
                      <span className="font-semibold text-[#1C1C1C]">Adresse :</span>
                      <br />4 place Berthe Morisot
                      <br />
                      69800 Saint-Priest, France
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden border border-[#D9E2EA] shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.5661088799387!2d4.9436!3d45.6975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1b1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2s4%20Place%20Berthe%20Morisot%2C%2069800%20Saint-Priest%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Intelliwan"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
