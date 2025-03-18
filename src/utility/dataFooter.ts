// Datos para el footer
import logo from "../assets/image/logo.png";
const dataFooter = {
  ctaSection: {
    title: "Pellentesque suscipit fringilla libero eu.",
    buttonText: "Get a Demo",
    buttonLink: "/demo",
  },
  companyInfo: {
    logo: logo,
    copyright: "Copyright © 2020 Nexcent ltd.",
    allRightsReserved: "All rights reserved",
    socialLinks: [
      {
        id: 1,
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com",
      },
      {
        id: 2,
        name: "Dribbble",
        icon: "dribbble",
        url: "https://dribbble.com",
      },
      { id: 3, name: "Twitter", icon: "twitter", url: "https://twitter.com" },
      { id: 4, name: "YouTube", icon: "youtube", url: "https://youtube.com" },
    ],
  },
  companyLinks: {
    title: "Company",
    links: [
      { id: 1, name: "About us", url: "/about" },
      { id: 2, name: "Blog", url: "/blog" },
      { id: 3, name: "Contact us", url: "/contact" },
      { id: 4, name: "Pricing", url: "/pricing" },
      { id: 5, name: "Testimonials", url: "/testimonials" },
    ],
  },
  supportLinks: {
    title: "Support",
    links: [
      { id: 1, name: "Help center", url: "/help" },
      { id: 2, name: "Terms of service", url: "/terms" },
      { id: 3, name: "Legal", url: "/legal" },
      { id: 4, name: "Privacy policy", url: "/privacy" },
      { id: 5, name: "Status", url: "/status" },
    ],
  },
  newsletter: {
    title: "Stay up to date",
    placeholder: "Your email address",
    buttonAriaLabel: "Subscribe to newsletter",
  },
};

export default dataFooter;
