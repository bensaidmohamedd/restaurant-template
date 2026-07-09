import { useCallback, useEffect, useState } from 'react';

export function useMobileMenu() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById('mobile-menu');
      const hamburger = document.getElementById('hamburger');
      if (
        open &&
        menu &&
        hamburger &&
        !menu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open, close]);

  return { open, toggle, close };
}
