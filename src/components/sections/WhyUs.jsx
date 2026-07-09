import { siteConfig } from '../../config/site.config';
import { whyUsContent, whyUsItems } from '../../data/whyUs';
import Icon from '../ui/Icon';
import ScrollAnimate from '../ui/ScrollAnimate';

export default function WhyUs() {
  return (
    <section id="pourquoi" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimate animation="fade-left">
            <p className="section-label mb-3">{whyUsContent.label}</p>
            <h2 className="section-title font-display mb-4">{whyUsContent.title}</h2>
            <div className="gold-line mb-8" />
            <p className="text-gray-600 leading-relaxed mb-8">{whyUsContent.description}</p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={siteConfig.images.whyUs}
                alt={`Ambiance conviviale au restaurant ${siteConfig.name}`}
                className="w-full h-72 object-cover"
                width="800"
                height="288"
                loading="lazy"
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-right" className="grid sm:grid-cols-2 gap-4">
            {whyUsItems.map((item) => (
              <div key={item} className="why-item">
                <Icon name="check" className="icon icon-check text-gold" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
