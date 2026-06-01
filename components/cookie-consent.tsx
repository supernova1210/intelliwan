'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type ConsentStatus = 'accepted' | 'rejected' | null
const STORAGE_KEY = 'intelliwan_cookie_consent'

function getStoredConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null
  return (localStorage.getItem(STORAGE_KEY) as ConsentStatus) ?? null
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getStoredConsent()
    setConsent(stored)
    setVisible(stored === null)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setConsent('rejected')
    setVisible(false)
  }

  function openPreferences() {
    setVisible(true)
  }

  // Inutilisé pour l'instant mais prêt si on branche GA plus tard
  void consent

  return (
    <>
      {visible && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Gestion des cookies"
          style={{
            position: 'fixed',
            bottom: '1.25rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(92vw, 540px)',
            background: '#04111d',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '1rem',
            padding: '1.5rem',
            zIndex: 9999,
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Ligne lumineuse en haut */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,168,107,0.5), transparent)',
          }} />

          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
            Nous utilisons des cookies analytiques pour mesurer l&apos;audience du site et améliorer nos contenus.
            Ces cookies ne sont déposés qu&apos;avec votre consentement.{' '}
            <Link href="/politique-confidentialite" style={{ color: '#00a86b', textDecoration: 'underline' }}>
              En savoir plus
            </Link>
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={reject}
              style={{
                flex: 1,
                minWidth: '120px',
                padding: '0.65rem 1rem',
                borderRadius: '0.625rem',
                border: '1.5px solid rgba(255,255,255,0.2)',
                background: 'transparent',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Refuser
            </button>
            <button
              onClick={accept}
              style={{
                flex: 1,
                minWidth: '120px',
                padding: '0.65rem 1rem',
                borderRadius: '0.625rem',
                border: 'none',
                background: '#004467',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Accepter
            </button>
          </div>
        </div>
      )}

      {/* Bouton discret de réouverture */}
      {!visible && (
        <button
          onClick={openPreferences}
          aria-label="Gérer mes préférences cookies"
          title="Gérer les cookies"
          style={{
            position: 'fixed',
            bottom: '1rem',
            left: '1rem',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            border: '1px solid rgba(0,68,103,0.3)',
            background: 'rgba(4,17,29,0.85)',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9998,
            backdropFilter: 'blur(8px)',
          }}
        >
          🍪
        </button>
      )}
    </>
  )
}
