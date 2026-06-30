'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { buildWhatsAppUrl } from '@/lib/data'

export function Hero() {
  return (
    <section
      id="inicio"
      className="mesh-sage relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-sage/20 bg-cream/70 px-4 py-1.5 text-sm font-medium text-sage shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Podo Reflex · Rubén Uribe, Podocosmiatra · Caballito
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Cuidá tus pies.{' '}
            <span className="text-sage">Cuidá tu cuerpo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Podocosmiatría, reflexología y masajes terapéuticos con atención
            personalizada, en el corazón de Caballito. Atención seria, prolija y
            de confianza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-sage px-7 py-4 text-base font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-sage-dark hover:shadow-xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Reservá por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sage/25 bg-cream/60 px-7 py-4 text-base font-semibold text-sage transition-all duration-300 hover:border-sage/50 hover:bg-cream"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <p className="sr-only">
            Podología y masajes terapéuticos en Caballito
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(74,124,111,0.45)] ring-1 ring-sage/10">
            <Image
              src="/images/hero-masaje.jpg"
              alt="Rubén Uribe realizando un masaje terapéutico en camilla a una paciente"
              width={832}
              height={1216}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
