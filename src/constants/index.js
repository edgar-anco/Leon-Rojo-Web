import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  bruno,
  christian,
  edgar,
  facebook,
  file02,
  henry,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  pepe,
  plusSquare,
  logoBarbas,
  logoDharma,
  logoOrange,
  searchMd,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Shows",
    url: "#shows",
  },
  {
    id: "1",
    title: "Bio",
    url: "#bio",
  },
  {
    id: "2",
    title: "Contacto",
    url: "#contacto",
  },
];

export const principalIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const leonRojoContacto = ["José Luis Porras: "];

export const shows = [
  {
    id: "0",
    title: "Orange Rock-Cafe",
    text: "Desde las 11 PM",
    facebookLink: "https://www.facebook.com/OrangeCafeRock",
    instagramLink: "https://www.instagram.com/orangegrillbar/",
    date: "Sáb. 6 Abril",
    imageUrl: logoOrange,
    colorful: true,
  },
  {
    id: "1",
    title: "Dharma Resto Bar",
    text: "Desde las 8 PM",
    facebookLink: "https://www.facebook.com/dharmaplazarestobar",
    instagramLink: "https://www.instagram.com/dharmarestobar/",
    date: "Sáb. 13 Abril",
    imageUrl: logoDharma,
  },
  {
    id: "2",
    title: "Bar'Bas RestoBar",
    text: "Desde las 11 PM",
    facebookLink: "https://www.facebook.com/profile.php?id=100083508004676",
    instagramLink: "https://www.instagram.com/barbasrestobar/",
    date: "Sáb. 13 Abril",
    imageUrl: logoBarbas,
  },
  {
    id: "3",
    title: "Orange Rock-Cafe",
    text: "Desde las 11 PM",
    facebookLink: "https://www.facebook.com/OrangeCafeRock",
    instagramLink: "https://www.instagram.com/orangegrillbar/",
    date: "Vie. 19 Abril",
    imageUrl: logoOrange,
  },
  {
    id: "4",
    title: "Bar'Bas RestoBar",
    text: "Desde las 11 PM. Las previas del Día del Trabajo!",
    facebookLink: "https://www.facebook.com/profile.php?id=100083508004676",
    instagramLink: "https://www.instagram.com/barbasrestobar/",
    date: "Mar. 30 Abril",
    imageUrl: logoBarbas,
  },
];

export const bioText = "Hay apoyo, falta talento... ah no, así no era";

export const bioContent = [
  {
    id: "0",
    title: "Henry Cutipa 'Crazy Dog'",
    text: "Voz principal",
  },
  {
    id: "1",
    title: "Edgar Anco 'Lucky Sax'",
    text: "Saxo y coros",
  },
  {
    id: "2",
    title: "José Luis Porras 'El bajista más fiel'",
    text: "Bajo",
  },
  {
    id: "3",
    title: "Bruno Carmelo 'Sebastián Yatra Funko'",
    text: "Guitarra y coros",
  },
  {
    id: "4",
    title: "Christian Flores 'Koalón Drums'",
    text: "Batería",
  },
  {
    id: "5",
    title: "Jhoel Mamani 'El Mariachi Loco'",
    text: "Trompeta",
  },
];

export const bioMusicians = [
  {
    id: "0",
    title: "Henry",
    icon: henry,
    width: 38,
    height: 38,
  },
  {
    id: "1",
    title: "Pepe",
    icon: pepe,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Christian",
    icon: christian,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Bruno",
    icon: bruno,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Edgar",
    icon: edgar,
    width: 34,
    height: 34,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/LeonRojoSM",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/leonrojosm/",
  },
];
