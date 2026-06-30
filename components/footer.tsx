import { MapPin, Clock } from 'lucide-react'
import { WhatsAppIcon, InstagramIcon } from '@/components/icons'
import { store, buildWhatsAppUrl } from '@/lib/data'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Sobre Rubén', href: '#sobre-ruben' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-brand text-3xl font-semibold text-accent">
              {store.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
              {store.professional} — {store.role}. Podocosmiatría, reflexología
              y masajes terapéuticos en Caballito.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-sage transition-colors hover:bg-sage hover:text-primary-foreground"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={`https://instagram.com/${store.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-light text-sage transition-colors hover:bg-sage hover:text-primary-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-sage"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Visitanos
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>
                  {store.address}
                  <br />
                  {store.addressNote}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>
                  {store.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {store.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  )
}
