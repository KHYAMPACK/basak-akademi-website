# Özel Başak Akademi — Website

**Website for a study center and primary-school support program in Merkezefendi, Denizli.**

🌐 Live: [basakakademi20.com](https://basakakademi20.com) · Built by [Ekiz Yazılım](https://ekizyazilim.com)

## Overview

- Pages: home, about, programs, gallery, contact
- Photo, local video and YouTube gallery driven by one config file, so the school can add content without a developer
- Contact form, plus floating WhatsApp and call buttons for quick lead capture
- Local SEO: sitemap, metadata, and a matching Google Business Profile

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · Vercel

---

## Maintenance notes (TR)

### Geliştirme

```bash
npm install
npm run dev
```

### Galeriye fotoğraf / video ekleme

1. Dosyayı `public/galeri/` klasörüne koyun  
   - Fotoğraf: `.jpg` / `.png` / `.webp`  
   - Video: `.mp4` (önerilen)
2. `src/lib/gallery.ts` dosyasındaki `galleryItems` listesine bir satır ekleyin:

**Fotoğraf**
```ts
{
  type: "image",
  src: "/galeri/sinif.jpg",
  alt: "Sınıf ortamı",
  caption: "Çalışma alanımız",
},
```

**Yerel video**
```ts
{
  type: "video",
  src: "/galeri/etkinlik.mp4",
  poster: "/galeri/etkinlik.jpg", // isteğe bağlı önizleme
  caption: "Etkinlik videosu",
},
```

**YouTube**
```ts
{
  type: "youtube",
  src: "https://www.youtube.com/watch?v=VIDEO_ID",
  caption: "Tanıtım videosu",
},
```

3. Sayfayı yenileyin — `/galeri` üzerinde görünür.

> Not: Büyük videolar siteyi yavaşlatabilir. Mümkünse YouTube’a yükleyip `type: "youtube"` kullanın, veya mp4’ü sıkıştırın.

### Deploy (Vercel)

1. Repo'yu GitHub'a push edin
2. [Vercel](https://vercel.com) ile bağlayın
3. Domain: `basakakademi20.com` ekleyin
4. Deploy sonrası [Google Search Console](https://search.google.com/search-console)'a `https://basakakademi20.com/sitemap.xml` ekleyin
5. Google İşletme Profili'nde aynı adres/telefon ve site URL'sini kullanın

### İletişim bilgileri

- Adres: Gerzele, 528 Sk. No:3/A, 20040 Denizli Merkezefendi/Denizli
- E-posta: basakcocukakademi@gmail.com
- Telefon / WhatsApp: 0533 330 00 07
