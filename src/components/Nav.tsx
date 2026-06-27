"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import MobileMenu from "./MobileMenu";

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="14" height="13" viewBox="0 0 16 14" fill="none">
    <path
      d="M15.9 1.48L13.52 12.88C13.34 13.68 12.88 13.88 12.24 13.52L8.64 10.88L6.92 12.52C6.72 12.72 6.56 12.88 6.2 12.88L6.44 9.2L13.12 3.2C13.4 2.96 13.06 2.82 12.68 3.06L4.38 8.24L0.84 7.14C0.06 6.9 0.04 6.38 1 6.02L14.88 0.42C15.54 0.18 16.1 0.56 15.9 1.48Z"
      fill="currentColor"
    />
  </svg>
);

const SECTION_IDS = ["how-it-works", "calculator", "cases", "entry"];

export default function Nav() {
  const { t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-100 px-5 transition-[background-color,border-color] duration-400 md:px-10"
        style={{
          background: scrolled ? "rgba(8,14,28,.95)" : "transparent",
          backdropFilter: scrolled ? "blur(22px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(230,220,160,.07)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-[68px] max-w-[1160px] items-center justify-between">
          <Image
            src="/logos/ibg-white.png"
            alt="IBG Property"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer object-contain"
            priority
          />

          <div className="hidden items-center gap-8 md:flex">
            {t.nav.links.map((label, i) => (
              <a key={label} href={`#${SECTION_IDS[i]}`} className="nlnk">
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3.5">
            <button
              onClick={toggleLang}
              className="nlnk hidden rounded-full border px-3 py-[5px] text-[10px] font-bold md:block"
              style={{ borderColor: "rgba(230,220,160,.28)", color: "rgba(230,220,160,.72)", letterSpacing: "0.12em" }}
            >
              {t.nav.langBtn}
            </button>
            <a
              href="https://t.me/+KRtzaV7lxOE5ZmQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="nlnk flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-250"
              style={{ borderColor: "rgba(230,220,160,.28)", color: "rgba(255,255,255,.68)" }}
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-[5px] p-1.5 md:hidden"
              aria-label="Menu"
            >
              <span className="block h-[1.5px] w-[22px] rounded-sm bg-white/80" />
              <span className="block h-[1.5px] w-[22px] rounded-sm bg-white/80" />
              <span className="block h-[1.5px] w-4 rounded-sm bg-white/80" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} sectionIds={SECTION_IDS} />
    </>
  );
}
