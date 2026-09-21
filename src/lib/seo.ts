import { siteConfig } from "./site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Başak Akademi Gerzele"],
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: `${siteConfig.url}/logo2.png`,
    logo: `${siteConfig.url}/logo2.png`,
    inLanguage: "tr",
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
    areaServed: [
      {
        "@type": "Place",
        name: `${siteConfig.address.neighborhood} Mahallesi`,
      },
      {
        "@type": "AdministrativeArea",
        name: "Merkezefendi",
      },
      {
        "@type": "City",
        name: "Denizli",
      },
    ],
    knowsAbout: [
      "yarı zamanlı etüt",
      "etüt merkezi",
      "ödev takibi",
      "birebir özel ders",
      "sınav hazırlığı",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yarı zamanlı etüt ve gelişim programları",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yarı zamanlı etüt" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ödev takibi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Birebir özel ders" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sınav hazırlığı" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Resim, müzik, spor ve dil dersleri" } },
      ],
    },
    sameAs: [siteConfig.mapLink],
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

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export const faqs = [
  {
    q: "Gerzele'de etüt merkezi var mı?",
    a: "Evet. Özel Başak Akademi, Denizli Merkezefendi Gerzele Mahallesi'nde yarı zamanlı etüt merkezi olarak hizmet verir. Adresimiz: Gerzele Mahallesi, 528 Sk. No:3/A.",
  },
  {
    q: "Yarı zamanlı etüt merkezi nedir?",
    a: "Yarı zamanlı etüt, çocukların okul çıkışında ödevlerini tamamladığı, akademik destek aldığı ve güvenli bir ortamda vakit geçirdiği okul sonrası programdır. Gerzele'deki merkezimiz ilkokul öğrencilerine yöneliktir.",
  },
  {
    q: "Gerzele etüt merkezinde hangi hizmetler var?",
    a: "Ödev takibi, birebir özel ders, test çözümü ve sınav hazırlığının yanı sıra resim, müzik, zeka oyunları, spor ve dil dersleri sunuyoruz.",
  },
] as const;

export const pageMeta = {
  home: {
    title: "Gerzele Etüt Merkezi | Yarı Zamanlı Etüt — Başak Akademi",
    description:
      "Gerzele'de yarı zamanlı etüt merkezi. Denizli Merkezefendi Gerzele Mahallesi'nde ilkokul öğrencilerine ödev takibi, özel ders, sınav hazırlığı ve gelişim aktiviteleri. Özel Başak Akademi.",
  },
  hakkimizda: {
    title: "Hakkımızda | Gerzele Etüt Merkezi — Başak Akademi",
    description:
      "Özel Başak Akademi, Gerzele'de yarı zamanlı etüt merkezi olarak ilkokul öğrencilerine akademik destek, ödev takibi ve gelişim programları sunar. Denizli Merkezefendi.",
  },
  programlar: {
    title: "Yarı Zamanlı Etüt Programları | Gerzele — Başak Akademi",
    description:
      "Gerzele etüt merkezinde ödev takibi, özel ders, sınav hazırlığı, resim, müzik, spor ve dil dersleri. İlkokul öğrencileri için yarı zamanlı etüt programları.",
  },
  galeri: {
    title: "Galeri | Gerzele Etüt Merkezi — Başak Akademi",
    description:
      "Özel Başak Akademi'nin Gerzele Mahallesi'ndeki yarı zamanlı etüt merkezinden kareler. Denizli Merkezefendi.",
  },
  iletisim: {
    title: "İletişim | Gerzele Etüt Merkezi — Başak Akademi",
    description:
      "Gerzele etüt merkezi iletişim: Gerzele Mahallesi, 528 Sk. No:3/A, Merkezefendi/Denizli. Telefon ve WhatsApp: 0533 330 00 07.",
  },
} as const;
