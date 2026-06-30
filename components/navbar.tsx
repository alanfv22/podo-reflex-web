'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { buildWhatsAppUrl } from '@/lib/data'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Sobre Rubén', href: '#sobre-ruben' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/85 shadow-[0_8px_30px_rgba(42,42,40,0.08)] backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a
          href="#inicio"
          className="flex items-center gap-2.5 font-brand text-2xl font-semibold tracking-tight text-accent md:text-3xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 2c2.5 3 4 5.5 4 8.5a4 4 0 0 1-8 0C8 7.5 9.5 5 12 2Z" opacity=".85" />
              <circle cx="6.5" cy="15.5" r="1.6" />
              <circle cx="10" cy="17.5" r="1.6" />
              <circle cx="14" cy="17.5" r="1.6" />
              <circle cx="17.5" cy="15.5" r="1.6" />
            </svg>
          </span>
          Podo Reflex
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-sage"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer hidden items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-sage-dark hover:shadow-lg sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Reservá tu turno
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-foreground lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[80%] flex-col bg-cream p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <span className="font-brand text-2xl font-semibold text-accent">
                  Podo Reflex
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-foreground"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-sage-light hover:text-sage"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-shimmer mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-sage px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-sage-dark"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Reservá tu turno
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
