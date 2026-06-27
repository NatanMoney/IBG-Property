"use client";

import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const STEP_STYLES = [
  { radius: "rounded-[14px]", border: "rgba(210,70,70,.65)", bg: "rgba(160,40,40,.12)", textColor: "rgba(255,255,255,.62)" },
  { radius: "rounded-full", border: "rgba(230,220,160,.52)", bg: "rgba(230,220,160,.07)", textColor: "rgba(255,255,255,.62)" },
  { radius: "rounded-full", border: "rgba(255,255,255,.26)", bg: "rgba(28,53,94,.3)", textColor: "rgba(255,255,255,.62)" },
  {
    radius: "rounded-full",
    border: "rgba(100,220,130,.72)",
    bg: "rgba(50,180,80,.12)",
    boxShadow: "0 0 22px rgba(80,200,100,.2)",
    textColor: "rgba(100,220,130,.72)",
  },
];

const STEP_ICONS = [
  <svg key={0} width="38" height="44" viewBox="0 0 38 44" fill="none">
    <path d="M6 4H23L34 15V40H6V4Z" stroke="rgba(220,80,80,.85)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M23 4V15H34" stroke="rgba(220,80,80,.85)" strokeWidth="1.5" />
    <path d="M13 24L25 36M25 24L13 36" stroke="rgba(220,80,80,.85)" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg key={1} width="44" height="34" viewBox="0 0 44 34" fill="none">
    <path d="M2 22l8 8h10l16-14-4-4-8 4H16l-6-4-8 6z" stroke="rgba(230,220,160,.85)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 30l8-8" stroke="rgba(230,220,160,.65)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 14l6-6" stroke="rgba(230,220,160,.65)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key={2} width="44" height="36" viewBox="0 0 44 36" fill="none">
    <circle cx="22" cy="8" r="5" stroke="rgba(255,255,255,.78)" strokeWidth="1.5" />
    <path d="M10 34c0-6.63 5.37-12 12-12s12 5.37 12 12" stroke="rgba(255,255,255,.78)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7" cy="10" r="3.5" stroke="rgba(255,255,255,.42)" strokeWidth="1.5" />
    <path d="M1 34c0-3.87 2.69-7 6-7" stroke="rgba(255,255,255,.42)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="37" cy="10" r="3.5" stroke="rgba(255,255,255,.42)" strokeWidth="1.5" />
    <path d="M43 34c0-3.87-2.69-7-6-7" stroke="rgba(255,255,255,.42)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key={3} width="38" height="38" viewBox="0 0 38 38" fill="none">
    <polyline points="8 19 16 27 30 11" stroke="rgba(100,235,145,.95)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const ARROW_COLORS = [
  { line: "rgba(220,80,80,.35)", flow: "rgba(220,80,80,.9)", arrow: "rgba(220,80,80,.7)", delay: "0s" },
  { line: "rgba(100,220,130,.3)", flow: "rgba(100,220,130,.9)", arrow: "rgba(100,220,130,.7)", delay: ".5s" },
  { line: "rgba(100,220,130,.3)", flow: "rgba(100,220,130,.9)", arrow: "rgba(100,220,130,.7)", delay: "1s" },
];

function Arrow({ colors }: { colors: (typeof ARROW_COLORS)[number] }) {
  return (
    <div className="flex flex-shrink-0 items-center justify-center px-1">
      <div className="mb-7 hidden items-center md:flex">
        <div className="relative h-px w-7 overflow-hidden" style={{ background: colors.line }}>
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{ background: `linear-gradient(to right,transparent,${colors.flow},transparent)`, animation: "flowLine 2s linear infinite", animationDelay: colors.delay }}
          />
        </div>
        <div style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: `7px solid ${colors.arrow}` }} />
      </div>
      <div className="my-2 flex flex-col items-center md:hidden">
        <div className="relative h-[22px] w-px overflow-hidden" style={{ background: colors.line }}>
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{ background: `linear-gradient(to bottom,transparent,${colors.flow},transparent)`, animation: "flowLine 2s linear infinite", animationDelay: colors.delay }}
          />
        </div>
        <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${colors.arrow}` }} />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how-it-works" className="sec relative z-1 overflow-hidden px-10 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="opacity-3" preserveAspectRatio="none">
          <defs>
            <pattern id="tg" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="80" y1="0" x2="80" y2="80" stroke="#E6DCA0" strokeWidth="0.5" />
              <line x1="0" y1="80" x2="80" y2="80" stroke="#E6DCA0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tg)" />
        </svg>
        <div className="absolute top-4.5 left-4.5 h-4.5 w-4.5 border-t border-l" style={{ borderColor: "rgba(230,220,160,.22)" }} />
        <div className="absolute top-4.5 right-4.5 h-4.5 w-4.5 border-t border-r" style={{ borderColor: "rgba(230,220,160,.22)" }} />
        <div className="absolute bottom-4.5 left-4.5 h-4.5 w-4.5 border-b border-l" style={{ borderColor: "rgba(230,220,160,.22)" }} />
        <div className="absolute bottom-4.5 right-4.5 h-4.5 w-4.5 border-b border-r" style={{ borderColor: "rgba(230,220,160,.22)" }} />
        <span className="absolute top-5.5 left-6 text-[9px] font-bold tracking-[0.14em]" style={{ color: "rgba(230,220,160,.2)" }}>
          {t.how.classified}
        </span>
      </div>

      <div className="relative z-1 mx-auto max-w-[1080px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              03
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            {t.how.h}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2.5 max-w-[520px] text-[17px] font-light" style={{ color: "rgba(255,255,255,.65)" }}>
            {t.how.sub}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-13 flex flex-col items-stretch md:flex-row md:items-start">
            {t.how.steps.map((step, i) => (
              <div key={i} className="contents">
                <div className="flex flex-1 flex-col items-center gap-3.5 px-2 text-center">
                  <div
                    className={`flex h-[86px] w-[86px] flex-shrink-0 items-center justify-center border-[1.5px] ${STEP_STYLES[i].radius}`}
                    style={{ borderColor: STEP_STYLES[i].border, background: STEP_STYLES[i].bg, boxShadow: STEP_STYLES[i].boxShadow }}
                  >
                    {STEP_ICONS[i]}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white">{step.t}</div>
                    <div className="mt-1.5 text-[13px] font-light" style={{ lineHeight: 1.55, color: STEP_STYLES[i].textColor }}>
                      {step.s}
                    </div>
                  </div>
                </div>
                {i < t.how.steps.length - 1 && <Arrow colors={ARROW_COLORS[i]} />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-base font-light" style={{ color: "rgba(255,255,255,.45)", letterSpacing: "0.06em" }}>
            {t.how.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
