import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  sujet: z.enum(['telephonie', 'reseau', 'securite', 'formation', 'audit', 'autre']),
  message: z.string().min(10),
  rgpd: z.boolean(),
  // Anti-spam
  _hp: z.string().optional(),
  _loadTime: z.number().optional(),
})

const sujetLabels: Record<string, string> = {
  telephonie: 'Téléphonie & Communications unifiées',
  reseau: 'Réseau & Internet',
  securite: 'Sécurité',
  formation: 'Formation (Qualiopi)',
  audit: 'Audit & Accompagnement',
  autre: 'Autre demande',
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const data = schema.parse(body)

    // Anti-spam : honeypot rempli = bot
    if (data._hp && data._hp.length > 0) {
      console.warn('[spam] honeypot :', data.email)
      return NextResponse.json({ success: true })
    }

    // Anti-spam : soumission trop rapide = bot (< 3 secondes)
    if (data._loadTime && Date.now() - data._loadTime < 3000) {
      console.warn('[spam] trop rapide :', data.email)
      return NextResponse.json({ success: true })
    }

    // Email principal vers l'équipe Intelliwan
    await resend.emails.send({
      from: 'Intelliwan <noreply@intelliwan.fr>',
      to: ['contact@intelliwan.fr', 'vincentchpt@gmail.com'],
      replyTo: data.email,
      subject: `[Intelliwan] Nouveau contact : ${sujetLabels[data.sujet]}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f2f7fb;">
          <div style="background: #004467; padding: 20px 24px; border-radius: 12px 12px 0 0; border-bottom: 3px solid #00a86b;">
            <h1 style="color: white; font-size: 20px; margin: 0;">Nouveau message — Intelliwan</h1>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #d9e2ea; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #44515a; width: 140px; font-weight: 600;">Prénom</td>
                <td style="padding: 8px 0; font-size: 13px; color: #1c1c1c;">${data.prenom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #44515a; font-weight: 600;">Nom</td>
                <td style="padding: 8px 0; font-size: 13px; color: #1c1c1c;">${data.nom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #44515a; font-weight: 600;">Email</td>
                <td style="padding: 8px 0; font-size: 13px;"><a href="mailto:${data.email}" style="color: #004467;">${data.email}</a></td>
              </tr>
              ${data.telephone ? `
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #44515a; font-weight: 600;">Téléphone</td>
                <td style="padding: 8px 0; font-size: 13px; color: #1c1c1c;">${data.telephone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #44515a; font-weight: 600;">Sujet</td>
                <td style="padding: 8px 0; font-size: 13px; color: #1c1c1c;">${sujetLabels[data.sujet]}</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 16px 0 8px; border-top: 1px solid #d9e2ea;">
                  <p style="font-size: 13px; color: #44515a; font-weight: 600; margin: 0 0 8px;">Message</p>
                  <p style="font-size: 13px; color: #1c1c1c; line-height: 1.7; margin: 0; white-space: pre-wrap;">${data.message}</p>
                </td>
              </tr>
            </table>
          </div>
          <p style="font-size: 11px; color: #7f95a7; text-align: center; margin-top: 16px;">
            Intelliwan · 4 place Berthe Morisot, 69800 Saint-Priest
          </p>
        </div>
      `,
    })

    // Email de confirmation automatique à l'expéditeur
    await resend.emails.send({
      from: 'Intelliwan <noreply@intelliwan.fr>',
      to: [data.email],
      subject: 'Votre message a bien été reçu — Intelliwan',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f2f7fb;">
          <div style="background: #004467; padding: 20px 24px; border-radius: 12px 12px 0 0; border-bottom: 3px solid #00a86b;">
            <img src="https://www.intelliwan.fr/images/intelliwan-logo.png" alt="Intelliwan" style="height: 36px;">
          </div>
          <div style="background: white; padding: 28px 24px; border-radius: 0 0 12px 12px; border: 1px solid #d9e2ea; border-top: none;">
            <h2 style="color: #004467; font-size: 18px; margin: 0 0 12px;">Bonjour ${data.prenom},</h2>
            <p style="font-size: 14px; color: #44515a; line-height: 1.7; margin: 0 0 16px;">
              Nous avons bien reçu votre message concernant <strong style="color: #1c1c1c;">${sujetLabels[data.sujet]}</strong>.
            </p>
            <p style="font-size: 14px; color: #44515a; line-height: 1.7; margin: 0 0 24px;">
              Notre équipe vous répondra <strong style="color: #1c1c1c;">sous 24 h</strong>.
            </p>
            <a href="https://www.intelliwan.fr" style="display: inline-block; background: #004467; color: white; font-weight: 600; font-size: 13px; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
              Retour sur le site →
            </a>
          </div>
          <p style="font-size: 11px; color: #7f95a7; text-align: center; margin-top: 16px;">
            Intelliwan · 4 place Berthe Morisot, 69800 Saint-Priest · contact@intelliwan.fr
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
