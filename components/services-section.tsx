'use client'

import Image from 'next/image'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServiceIcon, WhatsAppIcon } from '@/components/icons'
import { services, buildServiceWhatsAppUrl, type Service } from '@/lib/data'

export function ServicesSection() {
  const featured = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)

  return (
    <section id="servicios" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracota">
            Nuestros servicios
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Atención integral del pie, con foco en la podocosmiatría
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Nuestro servicio principal es la podocosmiatría. También sumamos
            reflexología y masajes terapéuticos para tu bienestar completo.
          </p>
        </Reveal>

        {featured && <FeaturedService service={featured} />}

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
          {rest.map((service, i) => (
            <SecondaryService key={service.slug} service={service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedService({ service }: { service: Service }) {
  return (
    <Reveal className="mt-12">
      <article className="overflow-hidden rounded-[2rem] border border-sage/40 bg-card shadow-[0_20px_60px_-25px_rgba(26,138,140,0.4)] ring-1 ring-sage/10">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src={service.image}
              alt={`Servicio de ${service.name} de Rubén Uribe en Caballito`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-md">
              Servicio principal
            </span>
          </div>

          <div className="flex flex-col p-6 md:p-9">
            <div className="flex flex-wrap items-start gap-x-4 gap-y-3">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage/15 text-sage">
                  <ServiceIcon name={service.iconName} className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-3xl font-semibold text-foreground">
                  {service.name}
                </h3>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-heading text-2xl font-semibold text-sage">
                  ${service.price.toLocaleString('es-AR')}
                </p>
                <p className="text-xs text-muted-foreground">por sesión</p>
              </div>
            </div>

            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              {service.description}
            </p>

            {service.steps && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
                {service.steps.map((step, i) => (
                  <div
                    key={step.title}
                    className="flex flex-1 items-center gap-3 sm:flex-col sm:items-start"
                  >
                    <div className="flex flex-1 gap-3 rounded-2xl border border-border bg-secondary/60 p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage text-primary-foreground">
                        <ServiceIcon name={step.iconName} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-heading text-sm font-semibold text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {i < service.steps!.length - 1 && (
                      <ArrowRight
                        className="hidden h-5 w-5 shrink-0 self-center text-sage sm:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                  <span className="text-sm text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildServiceWhatsAppUrl(service)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-6 py-4 text-base font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:bg-sage-dark hover:shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Reservá tu turno
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function SecondaryService({
  service,
  delay,
}: {
  service: Service
  delay: number
}) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-[0_18px_40px_-20px_rgba(26,138,140,0.5)]">
        <div className="relative h-52 overflow-hidden sm:h-56">
          <Image
            src={service.image}
            alt={`Servicio de ${service.name} de Rubén Uribe en Caballito`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/95 text-sage shadow-md backdrop-blur">
            <ServiceIcon name={service.iconName} className="h-6 w-6" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              {service.name}
            </h3>
            <div className="shrink-0 sm:text-right">
              <p className="font-heading text-2xl font-semibold text-sage">
                ${service.price.toLocaleString('es-AR')}
              </p>
              <p className="text-xs text-muted-foreground">por sesión</p>
            </div>
          </div>

          <p className="mt-3 text-muted-foreground leading-relaxed">
            {service.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                <span className="text-sm text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={buildServiceWhatsAppUrl(service)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-sage-dark hover:shadow-lg"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Consultar por WhatsApp
          </a>
        </div>
      </article>
    </Reveal>
  )
}
