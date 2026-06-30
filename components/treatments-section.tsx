'use client'

import Image from 'next/image'
import { ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, RevealStagger, staggerItem } from '@/components/reveal'
import { ServiceIcon } from '@/components/icons'
import { treatments } from '@/lib/data'

export function TreatmentsSection() {
  return (
    <section id="tratamientos" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
                Podocosmiatría clínica
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
                Tratamientos para la salud de tus pies
              </h2>
            </Reveal>

            <RevealStagger className="mt-8 grid gap-4 sm:grid-cols-2">
              {treatments.map((t) => (
                <motion.div
                  key={t.name}
                  variants={staggerItem}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-light text-sage transition-colors group-hover:bg-sage group-hover:text-primary-foreground">
                    <ServiceIcon name={t.iconName} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {t.description}
                  </p>
                </motion.div>
              ))}
            </RevealStagger>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-sage/10">
              <Image
                src="/images/tratamiento.jpg"
                alt="Rubén Uribe realizando un tratamiento podológico clínico"
                width={1079}
                height={985}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-5">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-terracota" />
            <p className="text-sm font-medium text-foreground/85">
              Atención clínica especializada en la salud del pie.{' '}
              <span className="text-muted-foreground">
                No realizamos pedicuría cosmética.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
