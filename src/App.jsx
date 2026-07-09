import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import Gallery from './components/sections/Gallery';
import Menu from './components/sections/Menu';
import Reviews from './components/sections/Reviews';
import OpenMic from './components/sections/OpenMic';
import MapSection from './components/sections/MapSection';
import Contact from './components/sections/Contact';
import BackToTop from './components/ui/BackToTop';
import IconSprite from './components/ui/IconSprite';

export default function App() {
  return (
    <>
      <IconSprite />
      <Preloader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Menu />
        <Reviews />
        <OpenMic />
        <MapSection />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
