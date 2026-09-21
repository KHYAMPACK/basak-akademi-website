import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { pageMeta } from "@/lib/seo";
import { aboutText } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.hakkimizda.title },
  description: pageMeta.hakkimizda.description,
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: pageMeta.hakkimizda.title,
    description: pageMeta.hakkimizda.description,
    url: "/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-bronze">
          Hakkımızda
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
          Özel Başak Akademi
        </h1>
        <p className="mt-3 font-serif text-2xl text-brand">
          Gerzele&apos;de yarı zamanlı etüt merkezi
        </p>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">
          {aboutText}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <article className="border-l-2 border-brand pl-6">
            <h2 className="font-serif text-2xl text-ink">Misyonumuz</h2>
            <p className="mt-3 leading-relaxed text-muted">
              İlkokul öğrencilerinin akademik
              başarısını ve kişisel gelişimini dengeli biçimde desteklemek.
            </p>
          </article>
          <article className="border-l-2 border-bronze pl-6">
            <h2 className="font-serif text-2xl text-ink">Yaklaşımımız</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Birebir ilgi, düzenli ödev ve sınav takibi ile sanat, spor ve dil
              etkinliklerini bir araya getirerek çocuğunuzun gününü anlamlı ve
              verimli kılıyoruz.
            </p>
          </article>
        </div>

        <div className="mt-16 max-w-3xl rounded-lg border border-line bg-white/70 p-8">
          <h2 className="font-serif text-2xl text-brand">
            Gerzele Mahallesi&apos;nde güvenilir bir adres
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Denizli Merkezefendi Gerzele Mahallesi&apos;ndeki yarı zamanlı etüt
            merkezimiz; ödev takibi, özel ders ve gelişim aktivitelerini aynı
            çatı altında toplar. Ailelere şeffaf iletişim ve düzenli geri
            bildirim sunmayı önemseriz.
          </p>
        </div>
      </section>
      <CtaBanner
        title="Kurumumuzu yakından tanıyın"
        subtitle="Ziyaret veya WhatsApp üzerinden sorularınızı iletebilirsiniz."
      />
    </>
  );
}
