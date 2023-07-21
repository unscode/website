import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unscode',
  description: 'Software development blog',
  generator: 'Unscode Blog, software development blog',
  category: 'Software development',
  colorScheme: 'light dark',
  authors: {
    name: 'Unscode',
    url: 'https://unscode.com',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
