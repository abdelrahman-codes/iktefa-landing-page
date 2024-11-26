import {
  FaChalkboardTeacher,
  FaIndustry,
  FaShippingFast,
  FaChartLine,
} from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";

import {
  jam1,
  jam2,
  jam3,
  jam4,
  jam5,
  jam6,
  sauce1,
  sauce2,
  sauce3,
  sauce4,
  sauce5,
  sauce6,
  sauce7,
  sauce8,
  tomato1,
  tomato3,
  tomato4,
  tomato5,
  tomato6,
  tomato7,
  tomato8,
  syrup1,
  syrup2,
  syrup3,
  syrup4,
  syrup5,
  syrup6,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#quote", label: "Request Quote" },
];

export const products = [
  // Tomato
  {
    id: 3,
    imgURL: tomato3,
    name: "Tin Can 3 kg",
    category: "Tomato Paste",
    width: "w-[300px]",
  },
  {
    id: 8,
    imgURL: tomato8,
    name: "Tin Can 800 gm",
    category: "Tomato Paste",
    width: "w-[250px]",
  },
  {
    id: 4,
    imgURL: tomato4,
    name: "Tin Can 400 gm",
    category: "Tomato Paste",
    width: "w-[200px]",
  },
  {
    id: 6,
    imgURL: tomato6,
    name: "Tin Can 70 gm",
    category: "Tomato Paste",
    width: "w-[150px]",
  },
  {
    id: 1,
    imgURL: tomato1,
    name: "Glass Jar 300 gm",
    category: "Tomato Paste",
    width: "w-[140px]",
  },

  {
    id: 7,
    imgURL: tomato7,
    name: "Sachet 70 gm",
    category: "Tomato Paste",
    width: "w-[250px]",
  },
  {
    id: 5,
    imgURL: tomato5,
    name: "Sachet 50 gm",
    category: "Tomato Paste",
    width: "w-[200px]",
  },
  // Condiments
  {
    id: 9,
    imgURL: sauce1,
    name: "BBQ Squeeze",
    category: "Condiments",
    width: "w-[75px]",
  },
  {
    id: 12,
    imgURL: sauce4,
    name: "ketchup Squeeze",
    category: "Condiments",
    width: "w-[75px]",
  },
  {
    id: 13,
    imgURL: sauce5,
    name: "Mayonnaise Squeeze",
    category: "Condiments",
    width: "w-[75px]",
  },
  {
    id: 15,
    imgURL: sauce7,
    name: "Mustard Squeeze",
    category: "Condiments",
    width: "w-[75px]",
  },
  {
    id: 10,
    imgURL: sauce2,
    name: "BBQ Sachet",
    category: "Condiments",
    width: "w-[250px]",
  },
  {
    id: 11,
    imgURL: sauce3,
    name: "ketchup Sachet",
    category: "Condiments",
    width: "w-[250px]",
  },
  {
    id: 14,
    imgURL: sauce6,
    name: "Mayonnaise Sachet",
    category: "Condiments",
    width: "w-[250px]",
  },
  {
    id: 16,
    imgURL: sauce8,
    name: "Mustard Sachet",
    category: "Condiments",
    width: "w-[250px]",
  },
  // Jam
  {
    id: 17,
    imgURL: jam1,
    name: "Apricot Glass Jar",
    category: "Fruit Jam",
    width: "w-[250px]",
  },
  {
    id: 19,
    imgURL: jam3,
    name: "Strawberry Glass Jar",
    category: "Fruit Jam",
    width: "w-[250px]",
  },
  {
    id: 21,
    imgURL: jam5,
    name: "Fig Glass Jar",
    category: "Fruit Jam",
    width: "w-[250px]",
  },
  {
    id: 18,
    imgURL: jam2,
    name: "Apricot Sachet",
    category: "Fruit Jam",
    width: "w-[250px]",
  },
  {
    id: 20,
    imgURL: jam4,
    name: "Strawberry Sachet",
    category: "Fruit Jam",
    width: "w-[250px]",
  },
  {
    id: 22,
    imgURL: jam6,
    name: "Fig Sachet",
    category: "Fruit Jam",
    width: "w-[250px]",
  },
  
  // Syrup
  {
    id: 23,
    imgURL: syrup1,
    name: "Sugarcane Syrup",
    category: "Syrup",
    width: "w-[60px]",
  },
  {
    id: 24,
    imgURL: syrup2,
    name: "Passion Fruit Syrup",
    category: "Syrup",
    width: "w-[60px]",
  },
  {
    id: 25,
    imgURL: syrup3,
    name: "Chocolate Sauce",
    category: "Syrup",
    width: "w-[60px]",
  },
  {
    id: 26,
    imgURL: syrup4,
    name: "Caramel Sauce",
    category: "Syrup",
    width: "w-[60px]",
  },
  {
    id: 27,
    imgURL: syrup5,
    name: "Strawberry Puree",
    category: "Syrup",
    width: "w-[60px]",
  },
  {
    id: 28,
    imgURL: syrup6,
    name: "Mango Puree",
    category: "Syrup",
    width: "w-[60px]",
  },
];

export const services = [
  {
    icon: <FaChalkboardTeacher className="w-6 h-6 text-white" />,
    label: "Consult",
    subtext:
      "Tailored consulting services to optimize operations, improve quality, and increase profitability for food manufacturers.",
  },
  {
    icon: <FaIndustry className="w-6 h-6 text-white" />,
    label: "Manufacture",
    subtext:
      "Efficient “Science-Based” Contract Manufacturing, ensuring premium quality and compliance for your food products with top confidentiality to your recipes.",
  },
  {
    icon: <FaShippingFast className="w-6 h-6 text-white" />,
    label: "Export",
    subtext:
      "Find my Top 5 Potential Markets” is a game changing service; We offer seamless export solutions, handling logistics and regulations to expand your market globally.",
  },

  {
    icon: <MdLightbulbOutline className="w-6 h-6 text-white" />,
    label: "Innovate",
    subtext:
      "Drive product innovation and development with our expert R&D team, helping you stay ahead in the market.",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-white" />,
    label: "Invest",
    subtext:
      "Empower your business with smart, tailored investment strategies that fuel growth and ensure long-term success, turning opportunities into tangible results.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Tomato Paste", href: "#products" },
      { name: "Condiments", href: "#products" },
      { name: "Fruit Jam", href: "#products" },
      { name: "Syrup", href: "#products" },
    ],
  },
];

export const footerWhatsAppMesage = {
  phone: "+201143275741",
  message:
    "Hello, I am interested in learning more about your products. Could you please provide more details? Thank you.",
};

export const socialMedia = {
  facebook: "https://www.facebook.com/61566851945737/",
  linkedin: "https://www.linkedin.com/company/iktefa/",
};
