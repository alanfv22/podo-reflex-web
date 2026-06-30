'use client'

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WhatsAppIcon } from '@/components/icons'
import { buildWhatsAppUrl, store } from '@/lib/data'

const highlights = [
  'Podocosmiatra, Reflexólogo y Masajista Profesional',
  'Análisis profesional antes de cada tratamiento',
  'Atención personalizada, prolija y de confianza',
  'Consultorio equipado en Caballito',
]

export function AboutSection() {
  return (
    <section id="sobre-ruben" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-sage/10">
              <Image
                src="/images/ruben-consultorio.jpg"
                alt="Rubén Uribe en su consultorio PODOREFLEX en Caballito"
                width={895}
                height={1184}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 mt-10 overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-sage/10">
              <Image
                src="/images/ruben.jpeg"
                alt="Rubén Uribe, Podocosmiatra"
                width={882}
                height={406}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
              Sobre Rubén
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Hola, soy Rubén Uribe
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <strong className="text-foreground">Podocosmiatra,
                Reflexólogo y Masajista Profesional</strong>. Hace años que me
                dedico a cuidar la salud de los pies y el bienestar del cuerpo de
                mis pacientes en Caballito.
              </p>
              <p>
                En cada consulta primero hago un análisis profesional para
                entender tu caso y, recién después, realizo el tratamiento a tu
                medida. Mi compromiso es que te vayas sin dolor y con la
                tranquilidad de estar en buenas manos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <span className="text-sm text-foreground/85">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={buildWhatsAppUrl(
                `${store.whatsappTemplate}\n\nHola Rubén, quería hacerte una consulta.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-sage-dark hover:shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hablá con Rubén
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
