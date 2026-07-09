import { siteConfig } from '../../config/site.config';
import { aboutContent } from '../../data/about';
import Icon from '../ui/Icon';
import ScrollAnimate from '../ui/ScrollAnimate';

export default function About() {
  const { images } = siteConfig;

  return (
    <section id="apropos" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollAnimate animation="fade-left">
            <p className="section-label mb-3">{aboutContent.label}</p>
            <h2 className="section-title font-display mb-4">{aboutContent.title}</h2>
            <div className="gold-line mb-8" />

            <p className="text-gray-600 leading-relaxed mb-6">
              Au cœur du <strong>Medina Mall Saïdia</strong>, Plaza vous accueille dans un cadre moderne et chaleureux pour une expérience gastronomique inoubliable. Notre établissement allie élégance contemporaine et convivialité marocaine.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">{aboutContent.paragraphs[1]}</p>

            <ul className="grid grid-cols-2 gap-3" role="list">
              {aboutContent.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <Icon name="dot" className="icon icon-dot text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-right" className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.aboutMain}
                alt={`Intérieur du restaurant ${siteConfig.name} à Saïdia`}
                className="w-full h-[500px] object-cover"
                width="800"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl hidden md:block border-4 border-cream">
              <img
                src={images.aboutSecondary}
                alt={`Plats gastronomiques ${siteConfig.name}`}
                className="w-full h-full object-cover"
                width="192"
                height="192"
                loading="lazy"
              />
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
