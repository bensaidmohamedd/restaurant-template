import { menuCategories, menuContent } from '../../data/menu';
import ScrollAnimate from '../ui/ScrollAnimate';
import SectionHeader from '../ui/SectionHeader';

export default function Menu() {
  return (
    <section id="menu" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label={menuContent.label}
          title={menuContent.title}
          description={menuContent.description}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <ScrollAnimate
              key={category.title}
              as="article"
              animation="fade-up"
              delay={category.delay}
              className="menu-card"
            >
              <div className="menu-card-header">
                <h3 className="font-display text-xl">{category.title}</h3>
                <p className="text-white/60 text-sm mt-1">{category.subtitle}</p>
              </div>
              <div className="menu-card-body">
                {category.items.map((item) => (
                  <div key={item.name} className="menu-item">
                    <span className="menu-item-name">
                      {item.name}
                      {item.note && <span className="text-gray-400 text-xs"> {item.note}</span>}
                    </span>
                    <span className="menu-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
