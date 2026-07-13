import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { GalleryGrid } from "@/components/GalleryGrid";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: pageMeta.galeri.title },
  description: pageMeta.galeri.description,
  alternates: { canonical: "/galeri" },
  openGraph: {
    title: pageMeta.galeri.title,
    description: pageMeta.galeri.description,
    url: "/galeri",
  },
};

export default function GaleriPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
          Galeri
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          Kurumumuzdan Kareler
        </h1>
     

        <GalleryGrid />
      </section>
      <CtaBanner />
    </>
  );
}
