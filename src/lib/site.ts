export const siteConfig = {
  name: "Özel Başak Akademi",
  shortName: "Başak Akademi",
  domain: "basakakademi20.com",
  url: "https://basakakademi20.com",
  description:
    "Denizli Merkezefendi'de çocuk bakım evi. İlkokul öğrencilerine özel ders, ödev takibi, sınav hazırlığı, resim, müzik, spor ve dil dersleri.",
  phoneDisplay: "0533 330 00 07",
  phoneTel: "+905333300007",
  whatsapp: "905333300007",
  email: "basakcocukakademi@gmail.com",
  address: {
    street: "Gerzele, 528 Sk. No:3/A",
    postalCode: "20040",
    district: "Merkezefendi",
    city: "Denizli",
    full: "Gerzele, 528 Sk. No:3/A, 20040 Denizli Merkezefendi/Denizli",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Gerzele%2C%20528%20Sk.%20No%3A3%2FA%2C%2020040%20Denizli%20Merkezefendi&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Gerzele%2C%20528%20Sk.%20No%3A3%2FA%2C%2020040%20Denizli%20Merkezefendi",
  keywords: [
    "çocuk bakım evi denizli",
    "kreş denizli",
    "gündüz bakımevi denizli",
    "çocuk bakım evi merkezefendi",
    "ilkokul etüt denizli",
    "özel ders denizli çocuk",
    "başak akademi",
    "özel başak akademi",
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/programlar", label: "Programlar" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const aboutText =
  "Özel Başak Akademi, ilkokula giden çocuklarınızı güvenle emanet edebileceğiniz bir kurumdur. Birebir özel dersler, ödev takibi, test çözümü ve sınavlara hazırlık programlarımızın yanı sıra resim, müzik, zeka oyunları, spor aktiviteleri ve dil dersleriyle çocuklarınızın akademik ve kişisel gelişimini bir arada destekliyoruz.";

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ?? "Merhaba, Özel Başak Akademi hakkında bilgi almak istiyorum."
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
};
