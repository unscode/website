import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unscode',
  description: 'Software development blog',
  generator: 'Unscode Blog, software development blog',
  category: 'Software development',
  authors: {
    name: 'Unscode',
    url: 'https://unscode.com',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <a
          href="#main-content"
          className='sr-only rounded-lg bg-neutral-800 px-4 py-3 text-sm font-semibold text-white shadow-lg outline-none ring-neutral-400 transition-none focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:ring-2 focus:ring-offset-2 focus:ring-offset-[rgb(var(--background-rgb))] dark:bg-neutral-100 dark:text-neutral-900 dark:ring-neutral-600'
        >
          Pular para o conteúdo principal
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
