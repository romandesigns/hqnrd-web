import { categories } from "./categories";

// Hotel details
const details = {
  name: {
    short: "HQNRD",
    long: "Hotel Quinto Nivel RD",
    slogan: "Como estar en casa!",
  },
};

// Contact details
const contact = {
  contact: {
    address: "Calle de la Mujer #2, Urb, Salcedo 34000, Dominican Republic",
    whatsapp: "https://wa.link/hqnrd",
    phoneNumber: "+1809-753-7500",
    domain: "https://hotelquintonivelrd.com",
    developerEmail: "roman@wavystyle.io",
    googleMap:
      "//www.google.com/maps/place/Hotel+Quinto+Nivel+RD/@19.3805972,-70.4256792,17z/data=!4m9!3m8!1s0x8eae296e50e06303:0x4141e3bda5d73fec!5m2!4m1!1i2!8m2!3d19.3805922!4d-70.4231043!16s%2Fg%2F11h18w_m9k?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
    email:
      "mailto:hotelquintonivelrd@gmail.com?cc=roman@wavystyle.io, ayelin.delacruz@gmail.com&subject=HQNRD Website Visitor",
  },
};

// Social media links
const social = {
  social: {
    facebook: "https://www.facebook.com/hotelquintonivelsalcedo/",
    instagram: "https://www.instagram.com/rdhotelquintonivel",
  },
};

// Platform locales
const locales = ["en", "es"];

// Main object to be exported
export const hqnrd = {
  locales,
  ...details,
  ...contact,
  ...social,
  categories: categories,
};
