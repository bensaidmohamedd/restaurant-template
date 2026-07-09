import { services, servicesContent } from '../../data/services';
import Icon from '../ui/Icon';
import ScrollAnimate from '../ui/ScrollAnimate';
import SectionHeader from '../ui/SectionHeader';

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label={servicesContent.label}
          title={servicesContent.title}
          description={servicesContent.description}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ScrollAnimate
              key={service.title}
              as="article"
              animation="fade-up"
              delay={service.delay}
              className="service-card"
            >
              <div className="service-icon mb-4">
                <Icon name={service.icon} className="icon icon-lg" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
