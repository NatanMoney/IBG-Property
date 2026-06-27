"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function Mirror() {
  const { t } = useLang();

  return (
    <section id="mirror" className="sec relative z-1 px-10 py-20">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              01
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 items-start gap-[60px] md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
                {t.mirror.h}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-2.5 h-0.5 w-12 opacity-52" style={{ background: "#E6DCA0" }} />
            </Reveal>
          </div>
          <div className="pt-1">
            <Reveal delay={0.1}>
              <p className="text-[17px] font-light" style={{ lineHeight: 1.78, color: "rgba(255,255,255,.75)" }}>
                {t.mirror.p1}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-[17px] font-light" style={{ lineHeight: 1.78, color: "rgba(255,255,255,.72)" }}>
                {t.mirror.p2}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div
                className="mt-5.5 rounded-r-[10px] border-l-2 px-5.5 py-4.5"
                style={{ borderColor: "rgba(230,220,160,.38)", background: "rgba(28,53,94,.2)" }}
              >
                <p className="text-base font-normal" style={{ lineHeight: 1.68, color: "rgba(255,255,255,.62)" }}>
                  {t.mirror.quote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
