'use client'

import { motion } from 'framer-motion'
import { Reveal, RevealStagger, staggerItem } from '@/components/reveal'
import { ServiceIcon } from '@/components/icons'
import { massageTypes } from '@/lib/data'

export function MassageSection() {
  return (
    <section className="mesh-dark border-y border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
            Masajes terapéuticos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Liberá la tensión, recuperá tu bienestar
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Sesiones personalizadas en camilla, adaptadas a lo que tu cuerpo
            necesita.
          </p>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {massageTypes.map((m) => (
            <motion.div
              key={m.name}
              variants={staggerItem}
              className="group rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:bg-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/15 text-sage transition-colors group-hover:bg-sage group-hover:text-primary-foreground">
                <ServiceIcon name={m.iconName} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
