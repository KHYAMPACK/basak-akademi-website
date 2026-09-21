import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { CtaBanner } from "@/components/CtaBanner";
import { faqJsonLd, faqs, pageMeta } from "@/lib/seo";
import { aboutText, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: pageMeta.home.title },
  description: pageMeta.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    url: "/",
  },
};

const highlights = [
  {
    title: "Akademik Destek",
    text: "Birebir özel ders, ödev takibi, test çözümü ve sınavlara hazırlık.",
  },
  {
    title: "Gelişim Aktiviteleri",
    text: "Resim, müzik, zeka oyunları, spor ve dil dersleriyle dengeli gelişim.",
  },
  {
    title: "Güvenli Ortam",
    text: "İlkokul öğrencilerinizi güvenle emanet edebileceğiniz Gerzele, Merkezefendi lokasyonu.",
  },
];

export default function HomePage() {
  const jsonLd = faqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-24">
          <div className="order-2 animate-fade-up lg:order-1">
            <h1 className="animate-fade-up-delay">
              <span className="flex items-center gap-3 text-bronze">
                <span
                  className="h-px w-7 shrink-0 bg-bronze/70 sm:w-9"
                  aria-hidden
                />
                <span className="font-serif text-base font-medium italic tracking-[0.03em] sm:text-lg">
                  Gerzele&apos;de yarı zamanlı etüt merkezi
                </span>
              </span>
              <span className="mt-3 block font-serif text-3xl font-semibold tracking-wide text-brand sm:mt-4 sm:text-5xl lg:text-6xl">
                Özel Başak Akademi
              </span>
            </h1>
            <p className="mt-4 max-w-xl font-headline text-xl leading-snug text-ink sm:mt-5 sm:text-3xl">
              Biz çocuklarınızla okul çıkışında{" "}
              <span className="font-semibold italic text-brand">
                ödevlerini, test çözümlerini ve etkinliklerini
              </span>
              {" "}yapalım, sizlere de evde onlarla{" "}
              <span className="font-semibold italic text-brand">
                 iyi vakit geçirmek
              </span>{" "}
              kalsın.
            </p>
            <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
              Denizli Merkezefendi Gerzele Mahallesi&apos;nde çocuklarınız okul
              çıkışı ödevlerini tamamlayabilir, akademik destek alabilir ve
              güvenli bir ortamda vakit geçirebilir.
            </p>
            <div className="animate-fade-up-delay-2 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Ara: {siteConfig.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
              >
                WhatsApp ile bilgi al
              </a>
              <Link
                href="/programlar"
                className="inline-flex items-center justify-center rounded-md border border-bronze/40 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-bronze hover:bg-white"
              >
                Programları incele
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Image
              src="/logo2.png"
              alt="Özel Başak Akademi — Gerzele yarı zamanlı etüt merkezi logosu"
              width={420}
              height={520}
              priority
              className="relative h-auto w-36 object-contain sm:w-44 lg:w-[22rem]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            Neden Başak Akademi?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{aboutText}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="border-t-2 border-bronze pt-5">
              <h3 className="font-serif text-xl text-brand">{item.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-serif text-3xl text-ink">
            Gerzele etüt merkezi — Merkezefendi, Denizli
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            Özel Başak Akademi, Gerzele Mahallesi&apos;nde yarı zamanlı etüt
            merkezi olarak hizmet verir. Okul sonrası ödev takibi ve akademik
            destek için Gerzele ve Merkezefendi&apos;den kolay ulaşılır bir
            konumdayız.
          </p>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">
            {siteConfig.address.full}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/hakkimizda" className="font-semibold text-brand hover:underline">
              Hakkımızda →
            </Link>
            <a href="#iletisim" className="font-semibold text-brand hover:underline">
              Adres ve iletişim →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">
          Sık sorulan sorular
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="border-t-2 border-bronze pt-5">
              <h3 className="font-serif text-xl text-brand">{faq.q}</h3>
              <p className="mt-3 leading-relaxed text-muted">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
      <ContactSection titleAs="h2" showEmail={false} />
    </>
  );
}
