import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { ProblemsSection } from '@/components/problems-section'
import { TreatmentsSection } from '@/components/treatments-section'
import { MassageSection } from '@/components/massage-section'
import { AboutSection } from '@/components/about-section'
import { SocialProof } from '@/components/social-proof'
import { LocationSection } from '@/components/location-section'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ProblemsSection />
        <TreatmentsSection />
        <MassageSection />
        <AboutSection />
        <SocialProof />
        <LocationSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
