import { useEffect, useRef, useState } from 'react';

const PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function LazyImage({ src, alt, className = '', width, height }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            img.onload = () => setLoaded(true);
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={PLACEHOLDER}
      alt={alt}
      className={`lazy ${loaded ? 'loaded' : ''} ${className}`.trim()}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}
