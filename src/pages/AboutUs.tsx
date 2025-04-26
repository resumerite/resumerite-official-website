import { AboutUsHeroSection } from '@/components/aboutus/HeroSection'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'

export const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <AboutUsHeroSection />
        </main>
        <Footer />
    </div>
  )
}
