"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#E8FFF6] border border-[#004467]/20 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-[#004467] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Message envoyé !</h3>
        <p className="text-[#44515A]">
          Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[#D9E2EA] rounded-xl p-8 bg-white shadow-sm">
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[#1C1C1C] font-medium">
            Prénom
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Prénom"
            required
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#1C1C1C] font-medium">
            Nom
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Nom"
            required
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1C1C1C] font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@exemple.com"
            required
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#1C1C1C] font-medium">
            Téléphone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="04 00 00 00 00"
            className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]"
          />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <Label htmlFor="subject" className="text-[#1C1C1C] font-medium">
          Sujet
        </Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Sujet de votre message"
          required
          className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467]"
        />
      </div>

      <div className="space-y-2 mb-8">
        <Label htmlFor="message" className="text-[#1C1C1C] font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Décrivez votre projet ou votre demande..."
          rows={5}
          required
          className="border-[#D9E2EA] focus:border-[#004467] focus:ring-[#004467] resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#004467] hover:bg-[#003352] text-white font-medium py-6 rounded-lg cursor-pointer transition-colors"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  )
}
