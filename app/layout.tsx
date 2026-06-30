import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Outfit, Playfair_Display, Geist_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Podo Reflex | Rubén Uribe, Podocosmiatra en Caballito',
  description:
    'Podo Reflex — Rubén Uribe, Podocosmiatra en Caballito: podocosmiatría, reflexología y masajes terapéuticos con atención personalizada. Reservá tu turno por WhatsApp.',
  generator: 'v0.app',
  keywords: [
    'podocosmiatra Caballito',
    'podo reflex',
    'reflexología Caballito',
    'uña encarnada',
    'masajes terapéuticos',
    'onicomicosis',
  ],
  openGraph: {
    title: 'Podo Reflex | Rubén Uribe, Podocosmiatra en Caballito',
    description:
      'Podocosmiatría, reflexología y masajes terapéuticos con atención personalizada en el corazón de Caballito, CABA.',
    type: 'website',
    locale: 'es_AR',
    images: ['/images/ruben-podoreflex.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1f3c',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${outfit.variable} ${playfair.variable} ${geistMono.variable} bg-background`}
    >
      <body className="overflow-x-hidden font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
