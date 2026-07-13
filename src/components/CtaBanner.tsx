import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CtaBanner({
  title = "Çocuğunuz için güvenli bir başlangıç",
  subtitle = "Denizli Merkezefendi'deki çocuk bakım evimizi ziyaret edin veya WhatsApp'tan yazın.",
}: Props) {
  return (
    <section className="border-y border-line bg-gradient-to-r from-brand to-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-white/90">{subtitle}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-md border border-white/50 bg-white px-5 py-3 text-center text-sm font-semibold text-brand transition hover:bg-cream"
          >
            Ara: {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-whatsapp px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            WhatsApp ile yazın
          </a>
          <Link
            href="/iletisim"
            className="rounded-md border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
          >
            İletişim
          </Link>
        </div>
      </div>
    </section>
  );
}
