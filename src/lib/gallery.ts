export type GalleryImage = {
  type: "image";
  src: string;
  alt: string;
  caption: string;
};

export type GalleryVideo = {
  type: "video";
  /** Path under /public, e.g. /galeri/etkinlik.mp4 */
  src: string;
  caption: string;
  /** Optional preview image, e.g. /galeri/etkinlik.jpg */
  poster?: string;
};

export type GalleryYoutube = {
  type: "youtube";
  /** Full YouTube watch/share URL or just the video id */
  src: string;
  caption: string;
};

export type GalleryItem = GalleryImage | GalleryVideo | GalleryYoutube;

/**
 * Galeri öğeleri
 *
 * Fotoğraf eklemek:
 * 1. Dosyayı public/galeri/ klasörüne koyun (örn. ders.jpg)
 * 2. Aşağıya type: "image" satırı ekleyin
 *
 * Video eklemek (dosya):
 * 1. .mp4 dosyasını public/galeri/ klasörüne koyun
 * 2. İsterseniz aynı isimde bir .jpg poster ekleyin
 * 3. Aşağıya type: "video" satırı ekleyin
 *
 * YouTube videosu eklemek:
 * 1. type: "youtube" ve src olarak video linkini veya id'yi yazın
 */
export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: "/galeri/video1_th.jpg",
    alt: "Özel Başak Akademi logosu",
    caption: "Minik kutlamamızdan kareler.",
  },
  {
    type: "video",
    src: "/galeri/video1.mp4",
    poster: "/galeri/video1_th.jpg",
    caption: "Minik bir kutlamamız.",
  },
  {
    type: "video",
    src: "/galeri/video2.mp4",
    poster: "/galeri/video2_th.jpg",
    caption: "Aktivite zamanımız.",
  },
  {
    type: "image",
    src: "/galeri/image1.jpg",
    alt: "Özel Başak Akademi logosu",
    caption: "Etkinlik anlarından kareler.",
  },
  {
    type: "image",
    src: "/galeri/image2.jpg",
    alt: "Özel Başak Akademi logosu",
    caption: "Karne günümüzden kareler.",
  },
  {
    type: "image",
    src: "/galeri/image3.jpg",
    alt: "Özel Başak Akademi logosu",
    caption: "Satranç etkinliğimizden kareler.",
  },
  // Örnek yerel video (dosyayı public/galeri/ altına koyduktan sonra yorumu kaldırın):
  // {
  //   type: "video",
  //   src: "/galeri/etkinlik-1.mp4",
  //   poster: "/galeri/etkinlik-1.jpg",
  //   caption: "Etkinlik anlarından bir kare",
  // },
  // Örnek YouTube:
  // {
  //   type: "youtube",
  //   src: "https://www.youtube.com/watch?v=VIDEO_ID",
  //   caption: "Tanıtım videosu",
  // },
];

export function youtubeEmbedId(src: string): string {
  if (/^[a-zA-Z0-9_-]{11}$/.test(src)) return src;
  try {
    const url = new URL(src);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "");
    }
    return url.searchParams.get("v") ?? src;
  } catch {
    return src;
  }
}
