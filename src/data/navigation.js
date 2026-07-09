export const navLinks = [
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#menu', label: 'Menu' },
  { href: '#avis', label: 'Avis' },
  { href: '#contact', label: 'Contact' },
];

export const mobileNavLinks = [
  ...navLinks.slice(0, 5),
  { href: '#openmic', label: 'Open Mic' },
  navLinks[5],
];

export const footerNavLinks = [
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#menu', label: 'Menu' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
];
