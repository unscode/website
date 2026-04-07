'use client'

import { useEffect, useState } from 'react'

const PHRASES = [
  'produtos digitais',
  'aplicações na nuvem',
  'software sob medida',
  'integrações robustas',
] as const

const INTERVAL_MS = 3200

/** Mesmas cores do gradiente do logótipo Unscode (`icons/Unscode.tsx`). */
const brandPhraseText =
  'bg-gradient-to-r from-[#ff9640] via-[#fc4055] to-[#e31587] bg-clip-text text-transparent'
const brandPhraseRule =
  'bg-gradient-to-r from-[#ff9640] via-[#fc4055] to-[#e31587]'

export function HeaderRotatingPhrase() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % PHRASES.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  const text = PHRASES[index]

  return (
    <span className='inline-block min-w-[19ch] pb-1 sm:min-w-[21ch]'>
      <span key={text} className={`hero_phrase_anim inline-block ${brandPhraseText}`}>
        {text}
      </span>
      <span className={`mt-1 block h-0.5 w-full rounded-full ${brandPhraseRule}`} aria-hidden />
    </span>
  )
}
