import { PrivacyHeroSection } from '@/components/privacy/HeroSection'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'

export const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <PrivacyHeroSection />
        </main>
        <Footer />
    </div>
  )
}
