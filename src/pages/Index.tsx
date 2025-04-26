import CTASection from '@/components/home/CTASection'
import FeatureSection from '@/components/home/FeatureSection'
import HeroSection from '@/components/home/HeroSection'
import TemplateShowcase from '@/components/home/TemplateShowcase'
import TestimonialSection from '@/components/home/TestimonialSection'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'

export const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <HeroSection />
            <FeatureSection />
            <TemplateShowcase />
            <TestimonialSection />
            <CTASection />
        </main>
        <Footer />
    </div>
  )
}
