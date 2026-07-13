import Link from "next/link";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#1c1410] text-[#f5efe6]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl tracking-wide text-white">
            Özel Başak Akademi
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#d4b896]">
            Denizli Merkezefendi&apos;de çocuk bakım evi ve ilkokul destek
            programı.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze-soft">
            Sayfalar
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#f5efe6]/85 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-bronze-soft">
            İletişim
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-[#f5efe6]/85">
            <p>{siteConfig.address.full}</p>
            <p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-white hover:text-white/80"
              >
                Ara: {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-whatsapp hover:text-whatsapp-dark"
              >
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#d4b896]/80">
        © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
