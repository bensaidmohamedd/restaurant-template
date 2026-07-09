import { useCallback, useEffect, useRef, useState } from 'react';

function getSlidesPerView() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

export function useReviewsSlider(reviewCount) {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

  const updatePages = useCallback(() => {
    const spv = getSlidesPerView();
    setSlidesPerView(spv);
    setTotalPages(Math.ceil(reviewCount / spv));
  }, [reviewCount]);

  useEffect(() => {
    updatePages();
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updatePages();
        setCurrentIndex(0);
      }, 250);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, [updatePages]);

  const goToSlide = useCallback(
    (index) => {
      const container = sliderRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      setCurrentIndex(index);
      track.style.transform = `translateX(-${index * container.offsetWidth}px)`;
    },
    []
  );

  useEffect(() => {
    goToSlide(currentIndex);
  }, [currentIndex, slidesPerView, goToSlide]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    const stop = () => clearInterval(interval);
    const start = () => {
      stop();
      return setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }, 5000);
    };

    let activeInterval = interval;
    const onEnter = () => {
      clearInterval(activeInterval);
    };
    const onLeave = () => {
      activeInterval = start();
    };

    slider.addEventListener('mouseenter', onEnter);
    slider.addEventListener('mouseleave', onLeave);

    return () => {
      clearInterval(activeInterval);
      slider.removeEventListener('mouseenter', onEnter);
      slider.removeEventListener('mouseleave', onLeave);
    };
  }, [totalPages]);

  return { sliderRef, trackRef, currentIndex, totalPages, goToSlide };
}
