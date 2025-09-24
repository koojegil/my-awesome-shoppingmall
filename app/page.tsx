import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { BusinessOverview } from "@/components/business-overview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <BusinessOverview />
      <Footer />
    </main>
  )
}
