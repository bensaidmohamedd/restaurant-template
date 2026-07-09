import { siteConfig } from '../../config/site.config';
import { navLinks, mobileNavLinks } from '../../data/navigation';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const { open, toggle, close } = useMobileMenu();

  return (
    <header>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 ${scrolled ? 'scrolled' : ''}`}
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src={siteConfig.images.logo}
              alt={`Logo ${siteConfig.name}`}
              className="w-10 h-10 rounded-full"
              width="40"
              height="40"
            />
            <span className="nav-logo-text font-display text-xl font-semibold text-white tracking-widest transition-colors duration-300">
              {siteConfig.name}
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-sm font-medium text-white/90 hover:text-gold tracking-wide">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden lg:inline-flex btn-cta px-6 py-2.5 rounded-full text-sm font-medium tracking-wide"
          >
            Réserver
          </a>

          <button
            id="hamburger"
            className={`hamburger lg:hidden ${open ? 'active' : ''}`}
            onClick={toggle}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center lg:hidden ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col items-center gap-8" role="list">
          {mobileNavLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="text-2xl font-display text-white hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={close}
          className="mt-10 btn-cta px-8 py-3 rounded-full text-lg font-medium"
        >
          Réserver
        </a>
      </div>
    </header>
  );
}
