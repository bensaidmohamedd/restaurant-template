import { siteConfig } from '../../config/site.config';
import { contactContent } from '../../data/reviews';
import Icon from '../ui/Icon';
import ScrollAnimate from '../ui/ScrollAnimate';

export default function Contact() {
  const { phone, phoneDisplay, address, maps } = siteConfig;

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <ScrollAnimate animation="fade-up" className="text-center mb-16">
          <p className="section-label mb-3">{contactContent.label}</p>
          <h2 className="section-title font-display mb-4">{contactContent.title}</h2>
          <div className="gold-line mx-auto" />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" className="space-y-8">
          <div className="glass-card p-8 md:p-10">
            <h3 className="font-display text-xl font-semibold mb-8 text-center">
              {contactContent.cardTitle}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="contact-icon-wrap">
                  <Icon name="phone" className="icon icon-contact text-gold" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">{contactContent.phoneLabel}</p>
                  <a href={`tel:${phone}`} className="text-gray-500 hover:text-gold transition-colors">
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="contact-icon-wrap">
                  <Icon name="location" className="icon icon-contact text-gold" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">{contactContent.addressLabel}</p>
                  <p className="text-gray-500">
                    {address.line1}<br />{address.line2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="contact-icon-wrap">
                  <Icon name="map" className="icon icon-contact text-gold" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">{contactContent.mapsLabel}</p>
                  <a
                    href={maps.place}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-dark transition-colors text-sm"
                  >
                    {contactContent.mapsLink}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
            <iframe
              src={maps.embed}
              title={`Carte ${siteConfig.name} Saïdia`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
