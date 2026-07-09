import { useEffect, useState } from 'react';

export function useNavbarScroll(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return scrolled;
}
