import { galleryContent, galleryImages } from '../../data/gallery';
import LazyImage from '../ui/LazyImage';
import ScrollAnimate from '../ui/ScrollAnimate';
import SectionHeader from '../ui/SectionHeader';

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label={galleryContent.label}
          title={galleryContent.title}
          description={galleryContent.description}
        />

        <ScrollAnimate animation="zoom" className="masonry-grid">
          {galleryImages.map((image) => (
            <div key={image.src} className="masonry-item">
              <LazyImage src={image.src} alt={image.alt} width="600" height={image.height} />
            </div>
          ))}
        </ScrollAnimate>
      </div>
    </section>
  );
}
