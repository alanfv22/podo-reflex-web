'use client'

import { MapPin, Clock, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon } from '@/components/icons'
import { store } from '@/lib/data'

export function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-20 bg-sage-light/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
            Ubicación y horarios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Te esperamos en Caballito
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="overflow-hidden rounded-[2rem] border border-border shadow-sm">
            <iframe
              src={store.mapsEmbed}
              title={`Mapa de ${store.name} en ${store.address}`}
              className="h-72 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-light text-sage">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Dirección
                  </h3>
                  <p className="mt-1 text-muted-foreground">{store.address}</p>
                  <p className="text-sm text-muted-foreground">
                    {store.addressNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-light text-sage">
                  <Clock className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Horarios
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {store.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-4 text-sm"
                      >
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-medium text-foreground">
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={store.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-sage-dark hover:shadow-lg"
              >
                <MapPin className="h-4 w-4" />
                Cómo llegar
              </a>
              <a
                href={`https://instagram.com/${store.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-sage/25 bg-card px-6 py-3.5 text-sm font-semibold text-sage transition-all duration-300 hover:border-sage/50 hover:bg-sage-light"
              >
                <InstagramIcon className="h-4 w-4" />
                Seguinos
              </a>
            </div>

            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-sage" />
              {store.phoneDisplay}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
