/**
 * Configuration centrale du restaurant
 * Dupliquer ce fichier et adapter les valeurs pour un nouveau resto
 */
export const siteConfig = {
  name: "PLAZA",
  slogan: "Sensation Unique",
  category: "Café • Restaurant • Glacier",
  phone: "+212719461064",
  phoneDisplay: "+212 719 461 064",
  address: {
    line1: "Medina Mall Saïdia",
    line2: "Saïdia, Maroc 63600",
  },
  maps: {
    place:
      "https://www.google.com/maps/place/PLAZA/@35.10803,-2.295796,16z/data=!4m6!3m5!1s0xd78335d8e4727e7:0xc953fadfe69f10d8!8m2!3d35.10803!4d-2.2957959!16s%2Fg%2F11v3h3wtn_?hl=fr&entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D",
    reviews:
      "https://www.google.com/maps/place/4P53%2B6M8+PLAZA,+Saidia/reviews",
    embed:
      "https://maps.google.com/maps?q=4P53%2B6M8+PLAZA,+Saidia&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
  images: {
    logo: "/assets/images/logo.png",
    hero: "/assets/images/img3.png",
    aboutMain: "/assets/images/img3.png",
    aboutSecondary: "/assets/images/img1.png",
    whyUs: "/assets/images/hero.png",
    openMic: "/assets/images/restaurant-2.jpg",
  },
  seo: {
    title: "PLAZA — Sensation Unique | Café • Restaurant • Glacier à Saïdia",
    description:
      "PLAZA — Café, Restaurant & Glacier à Saïdia. Découvrez une expérience culinaire unique au Medina Mall avec cuisine variée, glaces artisanales, desserts et soirées Open Mic.",
    keywords:
      "PLAZA, restaurant Saïdia, café Saïdia, glacier Maroc, Medina Mall, cuisine halal, Open Mic Saïdia, restaurant Saidia",
    ogTitle: "PLAZA — Sensation Unique | Café • Restaurant • Glacier",
    ogDescription:
      "Expérience culinaire unique à Saïdia. Cuisine variée, glaces artisanales, desserts et soirées Open Mic au Medina Mall.",
    locale: "fr_FR",
  },
  schema: {
    latitude: 35.0889,
    longitude: -2.2317,
    ratingValue: "4.8",
    reviewCount: "350",
    priceRange: "$$",
    servesCuisine: ["Marocaine", "Internationale", "Glaces", "Desserts"],
    openingHours: { opens: "09:00", closes: "23:00" },
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
  copyright: {
    year: 2026,
    tagline: "Café • Restaurant • Glacier — Saïdia, Maroc",
  },
};
