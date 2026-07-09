import { siteConfig } from '../../config/site.config';
import { heroContent } from '../../data/about';

export default function Hero() {
  const { images, phone } = siteConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-bg"
      style={{
        backgroundImage: `url('${images.hero}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Accueil"
    >
      <div className="hero-overlay absolute inset-0" />

      <div className="hero-content relative z-10 text-center px-6 max-w-3xl mx-auto">
        <img
          src={images.logo}
          alt={`Logo ${siteConfig.name} — Café Restaurant Glacier`}
          className="hero-logo mx-auto mb-8 rounded-full shadow-2xl"
          width="200"
          height="200"
        />

        <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-[0.3em] mb-3">
          {heroContent.title}
        </h1>

        <p className="text-gold text-lg md:text-xl font-light tracking-[0.4em] uppercase mb-6">
          {heroContent.subtitle}
        </p>

        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-light">
          {heroContent.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${phone}`}
            className="btn-cta px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide w-full sm:w-auto text-center"
          >
            {heroContent.ctaPrimary}
          </a>
          <a
            href={`tel:${phone}`}
            className="btn-outline px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide w-full sm:w-auto text-center"
          >
            {heroContent.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
