import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductHighlights from './components/ProductHighlights'
import ProductVariants from './components/ProductVariants'
// import ScarcitySection from './components/ScarcitySection'
import TestimonialSection from './components/TestimonialSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="noise-overlay">
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
