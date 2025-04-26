import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import { TermsHeroSection } from "@/components/terms/HeroSection"

export const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <TermsHeroSection />
        </main>
        <Footer />
    </div>
  )
}
