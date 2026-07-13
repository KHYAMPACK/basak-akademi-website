"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  galleryItems,
  type GalleryItem,
  youtubeEmbedId,
} from "@/lib/gallery";

function AutoPlayVideo({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Autoplay may still be blocked in some browsers
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="h-auto w-full"
      controls
      playsInline
      muted
      loop
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Tarayıcınız video oynatmayı desteklemiyor.
    </video>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="mb-6 break-inside-avoid overflow-hidden border border-line bg-white/70">
      {item.type === "image" && (
        <div className="bg-black/[0.03]">
          <Image
            src={item.src}
            alt={item.alt}
            width={1600}
            height={1200}
            className="h-auto w-full"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}

      {item.type === "video" && (
        <div className="bg-black/[0.03]">
          <AutoPlayVideo src={item.src} poster={item.poster} />
        </div>
      )}

      {item.type === "youtube" && (
        <div className="relative aspect-video bg-black/[0.03]">
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube.com/embed/${youtubeEmbedId(item.src)}?autoplay=0&mute=1`}
            title={item.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      )}

      <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
        {item.type === "video" || item.type === "youtube" ? (
          <span className="mr-2 inline-block rounded bg-brand/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand">
            Video
          </span>
        ) : null}
        {item.caption}
      </figcaption>
    </figure>
  );
}

export function GalleryGrid() {
  if (galleryItems.length === 0) {
    return (
      <p className="mt-12 text-muted">
        Galeri yakında güncellenecek. Fotoğraf ve video eklemek için{" "}
        <code className="text-sm text-ink">src/lib/gallery.ts</code> dosyasına
        bakın.
      </p>
    );
  }

  return (
    <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
      {galleryItems.map((item) => (
        <GalleryCard key={`${item.type}-${item.src}-${item.caption}`} item={item} />
      ))}
    </div>
  );
}
