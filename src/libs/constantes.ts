export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Activities", href: "/activities" },
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
    para: "We’re all about bringing people from around the world together and fostering connections .",
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
    para: "Everyone is welcome on JoinSpot, whether you're a seasoned pro or a first time organiser.",
  },
];

export const questions = [
  {
    title: "How do I create an account?",
    para: "Click on the 'Sign Up' button at the top right corner of the page. Follow the prompts to create your account as either a Pro or Normal User.",
  },
  {
    title: "How do I organize an activity?",
    para: "To organize an activity, log in to your account and navigate to the Activity Page using the header menu or from your profile. Click on 'Add Activity,' fill in the details (e.g., title, description, date, price, etc.), and submit your activity.Please note that only Pro users can add activities. If you’re a Normal user and would like to organize paid activities, you’ll need to upgrade your profile to Pro by completing the verification process. Normal users can still participate in free community events and share their experiences on the community page.",
  },
  {
    title: "How do I verify my Pro account?",
    para: "To verify your Pro account, click on your profile in the header and select Upgrade to Pro. Follow the prompts to upload the required documents (e.g., ID, certifications, or proof of expertise). Our team will review your submission and notify you once your account is verified.",
  },
  {
    title: "Can I edit or cancel an activity I’ve organized?",
    para: "Yes, you can edit or cancel an activity from your dashboard. If participants have already booked, they will be automatically notified of any changes or cancellations. We recommend providing clear and timely updates to ensure a smooth experience for everyone involved.",
  },
  {
    title: "What payment methods are accepted for paid activities?",
    para: "Lorem ipsum dolor sit amet consectetur. Ac cras suspendisse ultricies egestas nunc facilisis vel dolor massa.",
  },
  {
    title: "What happens if an activity is canceled by the organizer?",
    para: "If an activity is canceled, you’ll receive a full refund (for paid activities) and a notification with the reason for cancellation.",
  },
  {
    title: "Can I organize an activity in multiple cities?",
    para: "Yes, you can organize activities in multiple cities. When creating an activity, simply specify the location where it will take place.",
  },
  {
    title: "How do I report an issue with an activity or organizer?",
    para: "If you encounter any issues, go to the activity page and click 'Report Issue.' Our support team will investigate and take appropriate action.",
  },
  {
    title: "Is there a limit to how many activities I can join?",
    para: "No, there’s no limit! You can join as many activities as you like, as long as there’s availability.",
  },
  {
    title: "Does JoinSpot charge any fees for paid activities?",
    para: "Yes, for paid activities organized by Pro users, JoinSpot takes a 10% commission from the total price of each booking. This fee helps us maintain and improve the platform, ensuring a great experience for both organizers and participants.",
  },
  {
    title: "How do I become a featured organizer?",
    para: "Featured organizers are selected based on the quality of their activities and user reviews. If you’re interested, contact our support team for more details.",
  },
  {
    title: "What languages does JoinSpot support?",
    para: "Currently, the JoinSpot platform is available in English. We’re working on adding more languages in the future to make the platform accessible to more users worldwide.",
  },
];
