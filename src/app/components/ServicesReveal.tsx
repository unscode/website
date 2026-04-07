'use client'

import { useEffect, useRef, useState } from 'react'

type ServicesRevealProps = {
  children: React.ReactNode
  className?: string
}

export function ServicesReveal({ children, className = '' }: ServicesRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'services-revealed' : 'services-pending'}`}
    >
      {children}
    </div>
  )
}
