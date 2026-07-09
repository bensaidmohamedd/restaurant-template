import { siteConfig } from '../../config/site.config';
import { openMicContent } from '../../data/reviews';
import ScrollAnimate from '../ui/ScrollAnimate';

export default function OpenMic() {
  return (
    <section
      id="openmic"
      className="relative py-32 lg:py-40 px-6 lg:px-12 open-mic-bg"
      style={{ backgroundImage: `url('${siteConfig.images.openMic}')` }}
      aria-label="Soirées Open Mic"
    >
      <div className="absolute inset-0 bg-black/75" />

      <ScrollAnimate animation="fade-up" className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="section-label text-gold mb-4">{openMicContent.label}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          {openMicContent.title}
        </h2>
        <div className="gold-line mx-auto mb-8" />
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {openMicContent.description}
        </p>
        <a
          href="#contact"
          className="btn-gold inline-flex px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide"
        >
          {openMicContent.cta}
        </a>
      </ScrollAnimate>
    </section>
  );
}
