import { useEffect, useState } from 'react';

export function usePreloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const onLoad = () => {
      setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
      }, 1800);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    const fallback = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = '';
    }, 4000);

    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return hidden;
}
