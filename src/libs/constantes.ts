export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Activities", href: "/activities" },
  { name: "Community", href: "/community" },
  { name: "Support", href: "/support" },
];

export const footerLinks = [
  { name: "Support", href: "/support" },
  { name: "Rights", href: "#" },
  { name: "Team", href: "#" },
  { name: "Contacts", href: "#" },
];

export const categories = [
  "Sport",
  "Gaming",
  "Programming",
  "cooking",
  "Education",
];

const isProduction = process.env.NODE_ENV === "production";

export const API_URL = isProduction
  ? "https://backend.joinspots.com"
  : "http://localhost:4000";

export const reviewsData = [
  {
    name: "Cheyenne Calzoni",
    category: "Sport",
    text: "Lorem ipsum dolor sit amet consectetur. Cras tortor sit nam odio. Mi bibendum gravida malesuada lectus turpis gravida praesent est.. In risus lacus aliquet suscipit dignissim ",
    stars: 4,
  },
  {
    name: "Justin Ekstrom Bothman",
    category: "learning",
    text: "Lorem ipsum dolor sit amet consectetur. Cras tortor sit nam odio. Mi bibendum gravida malesuada lectus turpis gravida praesent est.. In risus lacus aliquet suscipit dignissim ",
    stars: 5,
  },
  {
    name: "Lydia Botosh",
    category: "cuisine",
    text: "Lorem ipsum dolor sit amet consectetur. Cras tortor sit nam odio. Mi bibendum gravida malesuada lectus turpis gravida praesent est.. In risus lacus aliquet suscipit dignissim ",
    stars: 4,
  },
];
