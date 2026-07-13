import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
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

const placeholders = [
  {
    title: "Kurum kimliği",
    caption: "Özel Başak Akademi logosu — Denizli Merkezefendi",
  },
  {
    title: "Akademik destek",
    caption: "Özel ders ve ödev takibi alanları (fotoğraflar yakında)",
  },
  {
    title: "Aktivite zamanı",
    caption: "Resim, müzik ve zeka oyunları (fotoğraflar yakında)",
  },
  {
    title: "Güvenli ortam",
    caption: "Çocuklarınız için güvenli bakım alanı (fotoğraflar yakında)",
  },
];

export default function GaleriPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
          Galeri
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          Kurumumuzdan kareler
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Tesis ve aktivite fotoğrafları yakında eklenecektir. Şimdilik kurum
          kimliğimizi paylaşıyoruz; kendi çekimlerinizi gönderdiğinizde buraya
          yerleştiririz.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {placeholders.map((item, index) => (
            <figure
              key={item.title}
              className="overflow-hidden border border-line bg-white/70"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center wheat-pattern bg-gradient-to-br from-cream to-bronze-soft/30">
                {index === 0 ? (
                  <Image
                    src="/logo.png"
                    alt={item.caption}
                    width={220}
                    height={220}
                    className="h-40 w-40 object-contain sm:h-48 sm:w-48"
                  />
                ) : (
                  <div className="px-6 text-center">
                    <p className="font-serif text-2xl text-brand">{item.title}</p>
                    <p className="mt-2 text-sm text-muted">Fotoğraf yakında</p>
                  </div>
                )}
              </div>
              <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
