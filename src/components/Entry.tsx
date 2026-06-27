"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function Entry() {
  const { t } = useLang();

  return (
    <section id="entry" className="sec relative z-1 px-10 py-22 text-center">
      <Reveal>
        <div
          className="mx-auto mb-15 h-px max-w-[960px]"
          style={{ background: "linear-gradient(to right,transparent,rgba(230,220,160,.25),transparent)" }}
        />
      </Reveal>
      <div className="mx-auto max-w-[560px]">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-3">
            <span className="block h-px w-5.5 opacity-35" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-55" style={{ color: "#E6DCA0" }}>
              09
            </span>
            <span className="block h-px w-5.5 opacity-35" style={{ background: "#E6DCA0" }} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(26px,4vw,38px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            {t.entry.h}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-[17px] font-light" style={{ lineHeight: 1.72, color: "rgba(255,255,255,.58)" }}>
            {t.entry.sub}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://t.me/+KRtzaV7lxOE5ZmQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border px-8 py-4 text-[11px] font-bold tracking-[0.13em] uppercase transition-all duration-300"
              style={{ background: "#E6DCA0", borderColor: "#E6DCA0", color: "#0d1c38" }}
            >
              <svg width="14" height="13" viewBox="0 0 16 14" fill="none">
                <path
                  d="M15.9 1.48L13.52 12.88C13.34 13.68 12.88 13.88 12.24 13.52L8.64 10.88L6.92 12.52C6.72 12.72 6.56 12.88 6.2 12.88L6.44 9.2L13.12 3.2C13.4 2.96 13.06 2.82 12.68 3.06L4.38 8.24L0.84 7.14C0.06 6.9 0.04 6.38 1 6.02L14.88 0.42C15.54 0.18 16.1 0.56 15.9 1.48Z"
                  fill="currentColor"
                />
              </svg>
              {t.entry.btn1}
            </a>
            <a
              href="https://perm-real-data.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border px-8 py-4 text-[11px] font-bold tracking-[0.13em] uppercase transition-all duration-300"
              style={{ background: "transparent", borderColor: "rgba(230,220,160,.38)", color: "#E6DCA0" }}
            >
              {t.entry.btn2}
              <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                <path d="M1 5H13M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
