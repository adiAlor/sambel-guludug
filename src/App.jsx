import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductHighlights from './components/ProductHighlights'
import ProductVariants from './components/ProductVariants'
import TestimonialSection from './components/TestimonialSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import BubbleBackground from './components/BubbleBackground'

function App() {
  return (
    <div className="relative min-h-screen noise">
      <BubbleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ProductHighlights />
        <section id="varian">
          <ProductVariants />
        </section>
        {/* <ScarcitySection /> */}
        <section id="testimoni">
          <TestimonialSection />
        </section>
        <section id="pesan">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
