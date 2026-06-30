export const store = {
  name: 'Podo Reflex',
  professional: 'Rubén Uribe',
  role: 'Podocosmiatra · Reflexólogo · Masajista Profesional',
  // Confirmá este número antes de publicar
  whatsappNumber: '5491166252225',
  whatsappTemplate: '¡Hola Podo Reflex! 👋',
  phoneDisplay: '+54 9 11 6625-2225',
  address: 'Hidalgo 25, Caballito, CABA',
  addressNote: 'Frente al Shopping Caballito',
  instagram: '@podocosmiatra_reflexologo',
  hours: [
    { day: 'Lunes a Viernes', time: '10 a 19 hs' },
    { day: 'Sábados', time: '10 a 15 hs' },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hidalgo+25+Caballito+CABA',
  mapsEmbed:
    'https://www.google.com/maps?q=Hidalgo+25+Caballito+CABA&output=embed',
}

export type ServiceStep = {
  title: string
  description: string
  iconName: string
}

export type Service = {
  name: string
  slug: string
  description: string
  price: number
  iconName: string
  image: string
  includes: string[]
  featured?: boolean
  steps?: ServiceStep[]
}

// Orden de prioridad: 1º Podocosmiatría (estrella), 2º Reflexología, 3º Masajes
export const services: Service[] = [
  {
    name: 'Podocosmiatría',
    slug: 'podocosmiatria',
    description:
      'El cuidado clínico e integral de tus pies. Atención especializada en patologías ungueales y plantares, con método profesional: primero analizamos, después tratamos.',
    price: 40000,
    iconName: 'Footprints',
    image: '/images/podologia.jpg',
    featured: true,
    steps: [
      {
        title: 'Paso 1 · Análisis',
        description:
          'Evaluación profesional del pie para detectar el origen de la molestia y definir el tratamiento adecuado.',
        iconName: 'Activity',
      },
      {
        title: 'Paso 2 · Tratamiento',
        description:
          'Realizamos el procedimiento según lo detectado, con técnica clínica y materiales esterilizados.',
        iconName: 'HandHeart',
      },
    ],
    includes: [
      'Análisis profesional del pie en cada consulta',
      'Tratamiento de uña encarnada y hongos',
      'Corte técnico y tratamiento de durezas',
      'Atención personalizada, prolija y de confianza',
    ],
  },
  {
    name: 'Reflexología',
    slug: 'reflexologia',
    description:
      'Estimulación de puntos reflejos del pie para favorecer la relajación, mejorar la circulación y el bienestar integral del cuerpo.',
    price: 40000,
    iconName: 'Footprints',
    image: '/images/estudio-pie.jpg',
    includes: [
      'Sesión sobre puntos reflejos del pie',
      'Favorece la relajación y la circulación',
      'Alivio de tensión y bienestar general',
      'Ambiente tranquilo y atención personalizada',
    ],
  },
  {
    name: 'Masajes Terapéuticos',
    slug: 'masajes',
    description:
      'Sesiones personalizadas en camilla para aliviar contracturas, recuperar el cuerpo y relajarte.',
    price: 40000,
    iconName: 'HandHeart',
    image: '/images/hero-masaje.jpg',
    includes: [
      'Masaje descontracturante y deportivo',
      'Masaje relajante',
      'Sesión adaptada a tu necesidad',
      'Camilla y ambiente preparado',
    ],
  },
]

export type Treatment = {
  name: string
  description: string
  iconName: string
}

export const treatments: Treatment[] = [
  {
    name: 'Onicocriptosis',
    description: 'Uña encarnada: corrección y alivio del dolor.',
    iconName: 'ScissorsLineDashed',
  },
  {
    name: 'Onicomicosis',
    description: 'Hongos en las uñas: tratamiento profesional.',
    iconName: 'ShieldAlert',
  },
  {
    name: 'Dermatomicosis',
    description: 'Hongos en la piel del pie, tratados a fondo.',
    iconName: 'Droplets',
  },
  {
    name: 'Pie de atleta',
    description: 'Infección que pica y arde, bajo control.',
    iconName: 'Activity',
  },
  {
    name: 'Helomas',
    description: 'Callos profundos (ojos de gallo) removidos.',
    iconName: 'Target',
  },
  {
    name: 'Durezas / Hiperqueratosis',
    description: 'Piel engrosada tratada con técnica clínica.',
    iconName: 'Layers',
  },
]

export type MassageType = {
  name: string
  description: string
  iconName: string
}

export const massageTypes: MassageType[] = [
  {
    name: 'Descontracturante',
    description: 'Liberá la tensión acumulada en espalda, cuello y hombros.',
    iconName: 'Hand',
  },
  {
    name: 'Deportivo',
    description: 'Preparación y recuperación muscular para tu actividad física.',
    iconName: 'Dumbbell',
  },
  {
    name: 'Relajante',
    description: 'Un momento de calma profunda para bajar el estrés.',
    iconName: 'Leaf',
  },
]

export type Problem = {
  title: string
  description: string
  iconName: string
}

export const problems: Problem[] = [
  {
    title: '¿Tenés una uña encarnada que no mejora?',
    description:
      'El dolor al caminar no se va solo. Una atención clínica a tiempo evita complicaciones.',
    iconName: 'ScissorsLineDashed',
  },
  {
    title: '¿Hongos o durezas que volvieron una y otra vez?',
    description:
      'Cuando reaparecen, necesitás un tratamiento profesional que vaya a la raíz del problema.',
    iconName: 'ShieldAlert',
  },
  {
    title: '¿Contracturas o dolor muscular que arrastrás hace semanas?',
    description:
      'Un masaje terapéutico personalizado te ayuda a recuperar movilidad y bienestar.',
    iconName: 'Activity',
  },
]

export type Testimonial = {
  name: string
  text: string
  rating: number
  isPlaceholder?: boolean
}

// PLACEHOLDERS: reemplazar por reseñas reales de pacientes antes de publicar.
export const testimonials: Testimonial[] = [
  {
    name: 'Testimonio de ejemplo — reemplazar por reseña real',
    text: 'Acá va una reseña real de un paciente. Reemplazá este texto por un comentario verdadero (por ejemplo, una reseña de Google o de Instagram).',
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: 'Testimonio de ejemplo — reemplazar por reseña real',
    text: 'Acá va otra reseña real. Mantené el comentario tal cual lo dejó el paciente para conservar la autenticidad.',
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: 'Testimonio de ejemplo — reemplazar por reseña real',
    text: 'Un tercer espacio listo para cargar una reseña verdadera cuando la tengas disponible.',
    rating: 5,
    isPlaceholder: true,
  },
]

export type Guarantee = {
  title: string
  iconName: string
}

// Diferenciales reales y verificables (sin cifras inventadas).
export const guarantees: Guarantee[] = [
  { title: 'Atención personalizada y de confianza', iconName: 'HandHeart' },
  { title: 'Análisis profesional antes de cada tratamiento', iconName: 'Activity' },
  { title: 'Materiales esterilizados', iconName: 'Droplets' },
  { title: 'Podocosmiatra profesional, no pedicuría cosmética', iconName: 'Footprints' },
]

export function buildWhatsAppUrl(message?: string) {
  const text = message ?? store.whatsappTemplate
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function buildServiceWhatsAppUrl(service: Service) {
  const message =
    store.whatsappTemplate +
    '\n\n' +
    `Hola Rubén, quería consultar / reservar un turno para: ${service.name} ($${service.price.toLocaleString('es-AR')}).` +
    '\n\n¿Qué disponibilidad de horarios tenés?'
  return buildWhatsAppUrl(message)
}
