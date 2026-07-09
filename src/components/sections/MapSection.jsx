import { siteConfig } from '../../config/site.config';
import { mapContent } from '../../data/reviews';
import ScrollAnimate from '../ui/ScrollAnimate';

export default function MapSection() {
  return (
    <section id="carte" className="py-16 lg:py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimate animation="fade-up" className="text-center mb-12">
          <p className="section-label mb-3">{mapContent.label}</p>
          <h2 className="section-title font-display mb-4">{mapContent.title}</h2>
          <div className="gold-line mx-auto" />
        </ScrollAnimate>

        <ScrollAnimate animation="zoom" className="map-container">
          <iframe
            src={siteConfig.maps.embed}
            title={`Localisation ${siteConfig.name} — ${siteConfig.address.line1}`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" className="text-center mt-8">
          <a
            href={siteConfig.maps.place}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-dark text-sm font-medium transition-colors inline-flex items-center gap-2"
          >
            {mapContent.linkText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </ScrollAnimate>
      </div>
    </section>
  );
}
