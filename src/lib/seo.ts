import { siteConfig } from "./site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "TR",
    },
    areaServed: {
      "@type": "City",
      name: "Denizli",
    },
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
}

export const pageMeta = {
  home: {
    title: "Özel Başak Akademi | Çocuk Bakım Evi Denizli",
    description:
      "Denizli Merkezefendi'de çocuk bakım evi. İlkokul öğrencilerine özel ders, ödev takibi, sınav hazırlığı, resim, müzik, spor ve dil dersleri. Özel Başak Akademi.",
  },
  hakkimizda: {
    title: "Hakkımızda | Özel Başak Akademi Denizli",
    description:
      "Özel Başak Akademi'yi tanıyın. Denizli'de çocuklarınıza akademik destek ve güvenli bakım sunan kurumumuz hakkında bilgi alın.",
  },
  programlar: {
    title: "Programlar ve Yaş Grupları | Başak Akademi Denizli",
    description:
      "Özel ders, ödev takibi, sınav hazırlığı, resim, müzik, zeka oyunları, spor ve dil dersleri. Denizli çocuk bakım evi programlarımız.",
  },
  galeri: {
    title: "Galeri | Özel Başak Akademi Denizli",
    description:
      "Özel Başak Akademi'nin Denizli Merkezefendi'deki kurum ortamından kareler.",
  },
  iletisim: {
    title: "İletişim | Çocuk Bakım Evi Denizli — Başak Akademi",
    description:
      "Özel Başak Akademi iletişim: Gerzele, 528 Sk. No:3/A, Merkezefendi/Denizli. Telefon ve WhatsApp: 0533 330 00 07.",
  },
} as const;
