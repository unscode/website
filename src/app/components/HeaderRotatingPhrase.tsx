'use client'

import { useEffect, useState } from 'react'

const PHRASES = [
  'produtos digitais',
  'aplicações na nuvem',
  'software sob medida',
  'integrações robustas',
] as const

const INTERVAL_MS = 3200

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
    <span className='inline-block min-w-[19ch] border-b-2 border-purple-500/50 pb-1 text-purple-600 dark:border-purple-400/60 dark:text-purple-400 sm:min-w-[21ch]'>
      <span key={text} className='hero_phrase_anim inline-block'>
        {text}
      </span>
    </span>
  )
}
