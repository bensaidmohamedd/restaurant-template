import { siteConfig } from '../../config/site.config';
import { usePreloader } from '../../hooks/usePreloader';

export default function Preloader() {
  const hidden = usePreloader();

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''} aria-hidden="true">
      <img
        src={siteConfig.images.logo}
        alt={siteConfig.name}
        className="preloader-logo"
        width="120"
        height="120"
      />
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
}
