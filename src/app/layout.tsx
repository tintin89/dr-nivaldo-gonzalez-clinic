import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Nivaldo Gonzalez - Mental Health Professional | 30+ Years Experience',
  description: 'Dr. Nivaldo Gonzalez offers professional mental health services with over 30 years of experience. Compassionate therapy, counseling, and psychiatric care in English and Spanish.',
  keywords: 'Dr. Nivaldo Gonzalez, mental health, therapy, counseling, psychiatry, depression, anxiety, wellness, bilingual, spanish, english',
  authors: [{ name: 'Dr. Nivaldo Gonzalez' }],
  openGraph: {
    title: 'Dr. Nivaldo Gonzalez - Mental Health Professional',
    description: 'Professional mental health services with 30+ years of experience',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
