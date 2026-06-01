"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

const sujets = [
  { value: "telephonie", label: "Téléphonie & Communications unifiées" },
  { value: "reseau", label: "Réseau & Internet" },
  { value: "securite", label: "Sécurité" },
  { value: "formation", label: "Formation (Qualiopi)" },
  { value: "audit", label: "Audit & Accompagnement" },
  { value: "autre", label: "Autre demande" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const loadTimeRef = useRef<number>(0)

  useEffect(() => {
    loadTimeRef.current = Date.now()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      prenom: data.get("prenom") as string,
      nom: data.get("nom") as string,
      email: data.get("email") as string,
      telephone: data.get("telephone") as string,
      sujet: data.get("sujet") as string,
      message: data.get("message") as string,
      rgpd: data.get("rgpd") === "on",
      _hp: data.get("_hp") as string,
      _loadTime: loadTimeRef.current,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Erreur serveur")
      setIsSubmitted(true)
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#E8FFF6] border border-[#004467]/20 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-[#004467] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Message envoyé !</h3>
        <p className="text-[#44515A]">
          Merci pour votre message. Notre équipe vous répondra sous 24 h.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#D9E2EA] rounded-2xl p-8 bg-white shadow-sm">

      {/* Honeypot — champ invisible pour détecter les bots */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div className="space-y-1.5">
          <Label htmlFor="prenom" className="text-[#1C1C1C] font-medium text-sm">Prénom *</Label>
          <Input id="prenom" name="prenom" placeholder="Jean" required
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="nom" className="text-[#1C1C1C] font-medium text-sm">Nom *</Label>
          <Input id="nom" name="nom" placeholder="Dupont" required
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-[#1C1C1C] font-medium text-sm">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="jean@societe.fr" required
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="telephone" className="text-[#1C1C1C] font-medium text-sm">Téléphone</Label>
          <Input id="telephone" name="telephone" type="tel" placeholder="04 00 00 00 00"
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]" />
        </div>
      </div>

      <div className="space-y-1.5 mb-5">
        <Label htmlFor="sujet" className="text-[#1C1C1C] font-medium text-sm">Sujet *</Label>
        <select id="sujet" name="sujet" required
          className="w-full h-10 rounded-md border border-[#D9E2EA] bg-white px-3 py-2 text-sm text-[#1C1C1C] focus:outline-none focus:border-[#004467] focus:ring-1 focus:ring-[#004467]">
          <option value="" disabled>Sélectionner un sujet</option>
          {sujets.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5 mb-6">
        <Label htmlFor="message" className="text-[#1C1C1C] font-medium text-sm">Message *</Label>
        <Textarea id="message" name="message" placeholder="Décrivez votre projet ou votre demande..." rows={5} required
          className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467] resize-none" />
      </div>

      <div className="flex items-start gap-3 mb-6">
        <input id="rgpd" name="rgpd" type="checkbox" required
          className="mt-0.5 h-4 w-4 rounded border-[#D9E2EA] accent-[#004467] cursor-pointer" />
        <Label htmlFor="rgpd" className="text-xs text-[#44515A] leading-relaxed cursor-pointer">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande, conformément à la politique de confidentialité d&apos;Intelliwan. *
        </Label>
      </div>

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting}
        className="w-full bg-[#004467] hover:bg-[#003352] text-white font-semibold py-6 rounded-xl cursor-pointer transition-colors">
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  )
}
