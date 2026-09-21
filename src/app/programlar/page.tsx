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
    title: "Birebir Özel Ders",
    text: "Öğrencinin seviyesine göre planlanan birebir derslerle konu pekiştirme.",
  },
  {
    title: "Ödev Takibi",
    text: "Günlük ödevlerin düzenli kontrolü ve okul temposuna uyumlu çalışma alışkanlığı.",
  },
  {
    title: "Test ve Sınav Hazırlığı",
    text: "Test çözümü, deneme pratikleri ve sınavlara yönelik sistematik hazırlık desteği.",
  },
  {
    title: "Resim ve Müzik",
    text: "Yaratıcılığı destekleyen resim çalışmaları ve müzik etkinlikleri.",
  },
  {
    title: "Zeka Oyunları",
    text: "Dikkat, mantık ve problem çözme becerilerini güçlendiren oyun temelli etkinlikler.",
  },
  {
    title: "Spor ve Dil Dersleri",
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
          Gerzele yarı zamanlı etüt programları
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          Gerzele Mahallesi&apos;ndeki Özel Başak Akademi&apos;de ilkokul
          öğrencileri için okul sonrası etüt, akademik destek ve sanat, spor,
          dil aktivitelerini bir arada sunuyoruz.
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
            Gerzele&apos;de yarı zamanlı etüt merkezi arıyorsanız; ilkokula
            giden çocuklarınız için okul sonrası güvenli ortam, ödev desteği ve
            çok yönlü gelişim programı sunuyoruz. Detaylı program ve saat
            bilgisi için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
      <CtaBanner
        title="Program Hakkında Bilgi Alın"
        subtitle="Çocuğunuzun sınıfına uygun çalışma planını birlikte oluşturalım."
      />
    </>
  );
}
