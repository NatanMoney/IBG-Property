"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function Diagnosis() {
  const { t } = useLang();
  const rows = t.diagnosis.rows;
  const lastIdx = rows.length - 1;

  return (
    <section id="diagnosis" className="sec relative z-1 px-10 py-20">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              02
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal delay={0.1}>
              <h2
                className="max-w-[460px] text-[clamp(28px,4vw,42px)] font-bold text-white"
                style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}
              >
                {t.diagnosis.h}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-2.5 max-w-[380px] text-base font-light" style={{ color: "rgba(255,255,255,.62)" }}>
                {t.diagnosis.sub}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="mt-9 overflow-hidden rounded-[14px] border"
                style={{ borderColor: "rgba(230,220,160,.1)", background: "rgba(28,53,94,.15)" }}
              >
                <div
                  className="grid grid-cols-2 border-b px-6.5 py-3"
                  style={{ borderColor: "rgba(230,220,160,.07)", background: "rgba(230,220,160,.04)" }}
                >
                  {t.diagnosis.th.map((h, i) => (
                    <span key={i} className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(230,220,160,.42)" }}>
                      {h}
                    </span>
                  ))}
                </div>
                {rows.map((row, i) => {
                  const isLast = i === lastIdx;
                  return (
                    <div
                      key={i}
                      className={`grid grid-cols-2 px-6.5 ${isLast ? "border-l-2 py-5" : "border-b py-4.5"}`}
                      style={
                        isLast
                          ? { background: "rgba(230,220,160,.06)", borderColor: "#E6DCA0" }
                          : { borderColor: "rgba(255,255,255,.04)", background: i === 1 ? "rgba(28,53,94,.1)" : undefined }
                      }
                    >
                      <div>
                        <div
                          className="text-[15px]"
                          style={isLast ? { fontWeight: 700, color: "#E6DCA0" } : { fontWeight: 500, color: "rgba(255,255,255,.82)" }}
                        >
                          {row.a}
                        </div>
                        {"tag" in row && row.tag && (
                          <div
                            className="mt-1 text-[10px] font-semibold tracking-[0.1em] uppercase"
                            style={{ color: "rgba(230,220,160,.45)" }}
                          >
                            {row.tag}
                          </div>
                        )}
                      </div>
                      <div>
                        <div
                          className="text-sm"
                          style={isLast ? { fontWeight: 400, color: "rgba(255,255,255,.7)" } : { fontWeight: 300, color: "rgba(255,255,255,.62)" }}
                        >
                          {row.b}
                        </div>
                        {"c" in row && row.c && (
                          <div className="mt-1 text-xs font-light" style={{ color: "rgba(255,255,255,.4)" }}>
                            {row.c}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-7">
                <p className="text-[19px] font-normal" style={{ lineHeight: 1.62, color: "rgba(255,255,255,.78)" }}>
                  {t.diagnosis.conclusion1}
                </p>
                <p className="mt-3 text-[15px] font-light" style={{ lineHeight: 1.7, color: "rgba(255,255,255,.52)" }}>
                  {t.diagnosis.conclusion2}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="hidden w-[150px] pt-4 md:block">
            <div className="mb-4.5 text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,.28)" }}>
              {t.diagnosis.visLabel}
            </div>
            <div className="flex flex-col gap-2.5">
              {rows.map((row, i) => {
                const isLast = i === lastIdx;
                return (
                  <div key={i}>
                    <div
                      className="mb-1 flex justify-between text-[10px]"
                      style={{ color: isLast ? "#E6DCA0" : "rgba(255,255,255,.45)" }}
                    >
                      <span>{row.a}</span>
                      <span>{row.pct}%</span>
                    </div>
                    <div className="h-[5px] overflow-hidden rounded-[3px]" style={{ background: "rgba(28,53,94,.4)" }}>
                      <div
                        className="h-full rounded-[3px]"
                        style={{ width: `${row.pct}%`, background: isLast ? "#E6DCA0" : "rgba(230,220,160,.3)" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
