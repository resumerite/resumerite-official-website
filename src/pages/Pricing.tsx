import { PricingHeroSection } from '@/components/pricing/HeroSection'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'

export const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <PricingHeroSection />
        </main>
        <Footer />
    </div>
  )
}
