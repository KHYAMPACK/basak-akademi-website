export const siteConfig = {
  name: "Özel Başak Akademi",
  shortName: "Başak Akademi",
  domain: "basakakademi20.com",
  url: "https://www.basakakademi20.com",
  description:
    "Gerzele'de yarı zamanlı etüt merkezi. Denizli Merkezefendi Gerzele Mahallesi'nde ilkokul öğrencilerine ödev takibi, özel ders, sınav hazırlığı ve gelişim aktiviteleri.",
  phoneDisplay: "0533 330 00 07",
  phoneTel: "+905333300007",
  whatsapp: "905333300007",
  email: "basakcocukakademi@gmail.com",
  address: {
    street: "Gerzele Mahallesi, 528 Sk. No:3/A",
    neighborhood: "Gerzele",
    postalCode: "20040",
    district: "Merkezefendi",
    city: "Denizli",
    full: "Gerzele Mahallesi, 528 Sk. No:3/A, 20040 Merkezefendi/Denizli, Türkiye",
  },
  /** Özel Başak Akademi Çocuk Kulübü — Google Business pin */
  geo: {
    lat: 37.7473714,
    lng: 29.0606991,
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=37.7473714,29.0606991&z=18&hl=tr&output=embed",
  mapLink:
    "https://www.google.com/maps/place/%C3%96zel+Ba%C5%9Fak+Akademi+%C3%87ocuk+Kul%C3%BCb%C3%BC/@37.7473714,29.0606991,18z/data=!4m6!3m5!1s0x14c73f37d6aa86eb:0x32044a8c12524958!8m2!3d37.7473714!4d29.0606991!16s%2Fg%2F11ht5__g9y?hl=tr",
  keywords: [
    "gerzele etüt merkezi",
    "gerzele etüt",
    "yarı zamanlı etüt merkezi gerzele",
    "gerzele yarı zamanlı etüt",
    "gerzele mahallesi etüt merkezi",
    "etüt merkezi gerzele denizli",
    "etüt merkezi merkezefendi",
    "etüt merkezi denizli",
    "ilkokul etüt gerzele",
    "ödev takibi gerzele",
    "okul sonrası etüt gerzele",
    "başak akademi gerzele",
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
  "Özel Başak Akademi, Denizli Gerzele Mahallesi'nde hizmet veren yarı zamanlı bir etüt merkezidir. İlkokula giden çocuklarınızı güvenle emanet edebileceğiniz kurumumuzda birebir özel dersler, ödev takibi, test çözümü ve sınavlara hazırlık programlarımızın yanı sıra resim, müzik, zeka oyunları, spor aktiviteleri ve dil dersleriyle çocuklarınızın akademik ve kişisel gelişimini bir arada destekliyoruz.";

export const whatsappLink = (message?: string) => {
  const text = encodeURIComponent(
    message ?? "Merhaba, Özel Başak Akademi hakkında bilgi almak istiyorum."
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
};
