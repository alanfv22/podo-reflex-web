'use client'

import { Reveal } from '@/components/reveal'
import { WhatsAppIcon } from '@/components/icons'
import { buildWhatsAppUrl } from '@/lib/data'

export function FinalCta() {
  return (
    <section
      id="contacto"
      className="scroll-mt-20 px-4 py-20 md:px-6 md:py-24"
    >
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-sage/25 bg-card px-6 py-14 text-center shadow-[0_30px_70px_-30px_rgba(26,138,140,0.4)] md:px-12 md:py-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(at 80% 15%, rgba(212,175,106,0.18) 0px, transparent 55%), radial-gradient(at 12% 90%, rgba(26,138,140,0.22) 0px, transparent 55%)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
              No dejes que el dolor espere. Agendá tu turno hoy.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed text-pretty">
              Escribinos por WhatsApp y coordinamos un horario que te quede
              cómodo. Tu salud no puede esperar.
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-sage-dark hover:shadow-[0_0_28px_-4px_rgba(26,138,140,0.55)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Reservá por WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
