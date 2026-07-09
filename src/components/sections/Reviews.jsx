import { siteConfig } from '../../config/site.config';
import { reviews, reviewsContent } from '../../data/reviews';
import { useReviewsSlider } from '../../hooks/useReviewsSlider';
import ScrollAnimate from '../ui/ScrollAnimate';
import Stars from '../ui/Stars';

export default function Reviews() {
  const { sliderRef, trackRef, currentIndex, totalPages, goToSlide } = useReviewsSlider(reviews.length);

  return (
    <section id="avis" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimate animation="fade-up" className="text-center mb-12">
          <p className="section-label mb-3">{reviewsContent.label}</p>
          <h2 className="section-title font-display mb-4">{reviewsContent.title}</h2>
          <div className="gold-line mx-auto mb-6" />
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up">
          <div id="reviews-slider" ref={sliderRef} className="overflow-hidden">
            <div id="reviews-track" ref={trackRef} className="reviews-track">
              {reviews.map((review) => (
                <div key={review.author} className="review-card">
                  <div className="review-inner">
                    <Stars />
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">&quot;{review.text}&quot;</p>
                    <p className="font-semibold text-sm">{review.author}</p>
                    <p className="text-gray-400 text-xs">{review.country}</p>
                  </div>
                </div>
              ))}
            </div>

            <div id="slider-dots" className="slider-dots" role="tablist" aria-label="Navigation des avis">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`slider-dot ${i === currentIndex ? 'active' : ''}`}
                  aria-label={`Avis page ${i + 1}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate animation="fade-up" className="text-center mt-10">
          <a
            href={siteConfig.maps.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex px-8 py-3 rounded-full text-sm font-semibold tracking-wide"
          >
            {reviewsContent.googleButton}
          </a>
        </ScrollAnimate>
      </div>
    </section>
  );
}
