import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: pageMeta.programlar.title },
  description: pageMeta.programlar.description,
  alternates: { canonical: "/programlar" },
  openGraph: {
    title: pageMeta.programlar.title,
    description: pageMeta.programlar.description,
    url: "/programlar",
  },
};

const programs = [
  {
    title: "Birebir özel ders",
    text: "Öğrencinin seviyesine göre planlanan birebir derslerle konu pekiştirme ve eksik kapatma.",
  },
  {
    title: "Ödev takibi",
    text: "Günlük ödevlerin düzenli kontrolü ve okul temposuna uyumlu çalışma alışkanlığı.",
  },
  {
    title: "Test ve sınav hazırlığı",
    text: "Test çözümü, deneme pratikleri ve sınavlara yönelik sistematik hazırlık desteği.",
  },
  {
    title: "Resim ve müzik",
    text: "Yaratıcılığı destekleyen resim çalışmaları ve müzik etkinlikleri.",
  },
  {
    title: "Zeka oyunları",
    text: "Dikkat, mantık ve problem çözme becerilerini güçlendiren oyun temelli etkinlikler.",
  },
  {
    title: "Spor ve dil dersleri",
    text: "Hareketli spor aktiviteleri ile dil gelişimini destekleyen dersler.",
  },
];

export default function ProgramlarPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
          Programlar
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          Akademik destek ve gelişim programları
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Denizli çocuk bakım evimizde ilkokul öğrencileri için akademik destek
          ile sanat, spor ve dil aktivitelerini bir arada sunuyoruz.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="border-t-2 border-bronze bg-white/60 px-1 pt-5"
            >
              <h2 className="font-serif text-2xl text-brand">{program.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{program.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="font-serif text-2xl text-ink">Kimler için?</h2>
          <p className="mt-3 leading-relaxed text-muted">
            İlkokula giden çocuklarınız için okul sonrası güvenli bakım, ödev
            desteği ve çok yönlü gelişim programı arıyorsanız Özel Başak Akademi
            sizin için uygundur. Detaylı program ve saat bilgisi için bizimle
            iletişime geçin.
          </p>
        </div>
      </section>
      <CtaBanner
        title="Program hakkında bilgi alın"
        subtitle="Çocuğunuzun sınıfına uygun çalışma planını birlikte oluşturalım."
      />
    </>
  );
}
