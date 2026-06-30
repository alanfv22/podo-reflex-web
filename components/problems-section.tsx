'use client'

import Image from 'next/image'
import { Reveal, RevealStagger, staggerItem } from '@/components/reveal'
import { motion } from 'framer-motion'
import { ServiceIcon, WhatsAppIcon } from '@/components/icons'
import { problems, buildWhatsAppUrl } from '@/lib/data'

export function ProblemsSection() {
  return (
    <section className="bg-sage-light/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-sage/10">
            <Image
              src="/images/senal-pies.jpg"
              alt="Atención profesional de un problema en el pie: no ignores las señales"
              width={1080}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
              ¿Por qué consultar?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              No ignores las señales de tu cuerpo
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Lo que hoy parece molesto, mañana puede complicarse. La solución
              siempre es la atención profesional a tiempo.
            </p>
          </Reveal>

          <RevealStagger className="mt-8 space-y-4">
            {problems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={staggerItem}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-light text-sage transition-colors group-hover:bg-sage group-hover:text-primary-foreground">
                  <ServiceIcon name={problem.iconName} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </RevealStagger>

          <Reveal delay={0.1}>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-sage-dark hover:shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Consultá tu caso
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
