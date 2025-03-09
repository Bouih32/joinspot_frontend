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

export const unique = [
  {
    title: "For Organizers",
    para: "Whether you're a pro offering paid workshops or a casual user hosting free events, JoinSpot gives you the tools to share your passion with others.",
  },
  {
    title: "For Participants",
    para: "From surfing in Agadir to cooking classes in Marrakech, JoinSpot helps you find activities that match your interests.",
  },
  {
    title: "For Everyone",
    para: "JoinSpot is more than just a booking platform—it's a community where users share their experiences and inspire others.",
  },
];

export const values = [
  {
    title: "Community First",
    para: "We’re all about bringing people together and fostering connections.",
  },
  {
    title: "Authenticity",
    para: "We celebrate local experiences and encourage users to share their unique perspectives.",
  },
  {
    title: "Trust & Safety",
    para: "We prioritize user safety with verified accounts, secure payments, and clear guidelines.",
  },
  {
    title: "Inclusivity",
    para: "Everyone is welcome on JoinSpot, whether you're a seasoned pro or a first-timer",
  },
];
