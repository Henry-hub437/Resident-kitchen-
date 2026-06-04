import { Navbar, Footer, FloatingActions } from './components/HeaderFooter';
import { Hero, About, Features } from './components/Sections';
import { Menu, Gallery } from './components/MenuGallery';
import { Testimonials, FAQ, ContactSection } from './components/ContactReviews';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Menu />
        <Gallery />
        <Testimonials />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
