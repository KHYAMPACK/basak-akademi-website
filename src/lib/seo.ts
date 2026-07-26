import { siteConfig } from "./site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: `${siteConfig.url}/logo2.png`,
    logo: `${siteConfig.url}/logo2.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    areaServed: {
      "@type": "City",
      name: "Denizli",
    },
    sameAs: [],
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "Ara",
        target: `tel:${siteConfig.phoneTel}`,
      },
      {
        "@type": "CommunicateAction",
        name: "WhatsApp",
        target: `https://wa.me/${siteConfig.whatsapp}`,
      },
      {
        "@type": "FindAction",
        name: "Yol tarifi",
        target: siteConfig.mapLink,
      },
    ],
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
    title: "Özel Başak Akademi | Etüt Merkezi Denizli",
    description:
      "Denizli Merkezefendi'de etüt merkezi. İlkokul öğrencilerine özel ders, ödev takibi, sınav hazırlığı, resim, müzik, spor ve dil dersleri. Özel Başak Akademi.",
  },
  hakkimizda: {
    title: "Hakkımızda | Özel Başak Akademi Denizli",
    description:
      "Özel Başak Akademi'yi tanıyın. Denizli'de çocuklarınıza akademik destek sunan etüt merkezimiz hakkında bilgi alın.",
  },
  programlar: {
    title: "Programlar ve Yaş Grupları | Başak Akademi Denizli",
    description:
      "Özel ders, ödev takibi, sınav hazırlığı, resim, müzik, zeka oyunları, spor ve dil dersleri. Denizli etüt merkezi programlarımız.",
  },
  galeri: {
    title: "Galeri | Özel Başak Akademi Denizli",
    description:
      "Özel Başak Akademi'nin Denizli Merkezefendi'deki kurum ortamından kareler.",
  },
  iletisim: {
    title: "İletişim | Etüt Merkezi Denizli — Başak Akademi",
    description:
      "Özel Başak Akademi iletişim: Gerzele, 528 Sk. No:3/A, Merkezefendi/Denizli. Telefon ve WhatsApp: 0533 330 00 07.",
  },
} as const;
