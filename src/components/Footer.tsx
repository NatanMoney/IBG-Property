"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative z-1 border-t px-10 py-8" style={{ borderColor: "rgba(255,255,255,.05)" }}>
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-3.5">
        <Image src="/logos/ibg-white.png" alt="IBG Property" width={120} height={22} className="h-5.5 w-auto object-contain opacity-48" />
        <span className="text-[11px] font-light" style={{ color: "rgba(255,255,255,.2)" }}>
          {t.footer.copyright}
        </span>
        <a href="#" className="nlnk text-[11px] font-medium" style={{ letterSpacing: "0.06em", color: "rgba(255,255,255,.22)" }}>
          {t.footer.link}
        </a>
      </div>
    </footer>
  );
}
