'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, RevealStagger, staggerItem } from '@/components/reveal'
import { ServiceIcon } from '@/components/icons'
import { guarantees, testimonials } from '@/lib/data'

export function SocialProof() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Guarantees band */}
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-6 md:grid-cols-[1fr_0.7fr] md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
                Por qué elegirnos
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
                Nuestros diferenciales
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {guarantees.map((g) => (
                  <li
                    key={g.title}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage">
                      <ServiceIcon name={g.iconName} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-foreground/90 leading-snug">
                      {g.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] shadow-md ring-1 ring-sage/10">
              <Image
                src="/images/estudio-pie.jpg"
                alt="Rubén Uribe explicando la estructura del pie y realizando un estudio de la pisada"
                width={444}
                height={788}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
            Lo que dicen los pacientes
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Confianza que se construye paciente a paciente
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={staggerItem}
              className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lg"
            >
              {t.isPlaceholder && (
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Ejemplo — reemplazar
                </span>
              )}
              <Quote className="h-8 w-8 text-sage/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-terracota text-terracota"
                  />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm text-foreground/85 leading-relaxed">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 font-heading text-sm font-semibold text-muted-foreground">
                {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
