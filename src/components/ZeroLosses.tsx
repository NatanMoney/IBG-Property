"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function ZeroLosses() {
  const { t } = useLang();

  return (
    <section id="zero" className="sec relative z-1 px-10 py-20">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              06
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-[480px] text-[clamp(26px,4vw,40px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            {t.zero.h}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 overflow-hidden rounded-[14px] border" style={{ borderColor: "rgba(230,220,160,.1)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ background: "rgba(28,53,94,.22)" }}>
              <div className="border-b px-6 py-3 md:border-r md:border-b-0" style={{ borderColor: "rgba(230,220,160,.07)" }}>
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,.28)" }}>
                  {t.zero.th[0]}
                </span>
              </div>
              <div className="px-6 py-3">
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(230,220,160,.52)" }}>
                  {t.zero.th[1]}
                </span>
              </div>
            </div>
            {t.zero.rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 border-t md:grid-cols-2"
                style={{ borderColor: "rgba(255,255,255,.04)", background: i % 2 === 1 ? "rgba(28,53,94,.1)" : undefined }}
              >
                <div className="border-b px-6 py-4 md:border-r md:border-b-0" style={{ borderColor: "rgba(255,255,255,.04)" }}>
                  <p className="text-sm font-normal" style={{ lineHeight: 1.55, color: "rgba(255,255,255,.42)" }}>
                    {row[0]}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm font-normal" style={{ lineHeight: 1.55, color: "rgba(255,255,255,.82)" }}>
                    {row[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 text-center">
            <p className="text-[22px] font-semibold text-white" style={{ lineHeight: 1.4 }}>
              {t.zero.conclusion1}
            </p>
            <p className="mt-2.5 text-base font-light" style={{ color: "rgba(255,255,255,.52)" }}>
              {t.zero.conclusion2}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
