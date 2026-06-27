"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

function OrbitalRing() {
  return (
    <div
      className="absolute top-1/2 right-[2%] hidden h-[420px] w-[420px] -translate-y-1/2 opacity-42 md:block"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="absolute inset-0 rounded-full border border-dashed"
        style={{ borderColor: "rgba(230,220,160,.13)", animation: "spinCW 42s linear infinite" }}
      />
      <div
        className="absolute inset-8 rounded-full border"
        style={{
          borderColor: "rgba(28,53,94,.85)",
          background: "radial-gradient(circle,rgba(28,53,94,.28) 0%,transparent 70%)",
          animation: "spinCCW 26s linear infinite",
        }}
      />
      <div
        className="absolute inset-16 rounded-full border"
        style={{ borderColor: "rgba(230,220,160,.09)", animation: "spinCW 18s linear infinite" }}
      />
      <div
        className="absolute inset-[104px] rounded-full border border-dashed"
        style={{ borderColor: "rgba(230,220,160,.06)", animation: "spinCCW 11s linear infinite" }}
      />
      <div className="absolute top-1/2 left-1/2" style={{ animation: "orb1 9s linear infinite", transformOrigin: "0 0" }}>
        <div
          className="absolute h-[9px] w-[9px] rounded-full"
          style={{ background: "#E6DCA0", boxShadow: "0 0 14px rgba(230,220,160,.9),0 0 28px rgba(230,220,160,.35)", top: "-4.5px", left: "196px" }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2" style={{ animation: "orb2 14s linear infinite", transformOrigin: "0 0" }}>
        <div
          className="absolute h-[6px] w-[6px] rounded-full"
          style={{ background: "rgba(255,255,255,.72)", boxShadow: "0 0 9px rgba(255,255,255,.55)", top: "-3px", left: "148px" }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2" style={{ animation: "orb3 6s linear infinite", transformOrigin: "0 0" }}>
        <div className="absolute h-1 w-1 rounded-full" style={{ background: "rgba(230,220,160,.65)", top: "-2px", left: "106px" }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="h-[18px] w-[18px] rounded-full"
          style={{ background: "#E6DCA0", boxShadow: "0 0 22px rgba(230,220,160,.8),0 0 48px rgba(230,220,160,.28)", animation: "pulse 3s ease infinite" }}
        />
      </div>
      <svg className="absolute inset-0 h-full w-full opacity-5" viewBox="0 0 420 420">
        <line x1="210" y1="0" x2="210" y2="420" stroke="#E6DCA0" strokeWidth="1" />
        <line x1="0" y1="210" x2="420" y2="210" stroke="#E6DCA0" strokeWidth="1" />
      </svg>
    </div>
  );
}

const BADGE_POSITIONS = [
  { style: { left: "3%", bottom: "26%" }, duration: "6s", delay: "0s" },
  { style: { left: "5%", bottom: "40%" }, duration: "7.5s", delay: "2.5s" },
  { style: { left: "6%", top: "20%" }, duration: "6.8s", delay: "1.2s" },
  { style: { right: "3%", top: "12%" }, duration: "7s", delay: "3.5s" },
  { style: { right: "4%", bottom: "10%" }, duration: "8s", delay: "0.8s" },
];

function FloatingBadges({ badges }: { badges: readonly { label: string; value: string }[] }) {
  return (
    <>
      {badges.map((b, i) => {
        const pos = BADGE_POSITIONS[i];
        return (
          <div
            key={i}
            className="absolute hidden md:block"
            style={{ ...pos.style, animation: `floatUp ${pos.duration} ease infinite`, animationDelay: pos.delay }}
          >
            <div
              className="rounded-lg border px-4 py-2.5"
              style={{ background: "rgba(28,53,94,.52)", borderColor: "rgba(230,220,160,.2)", backdropFilter: "blur(12px)" }}
            >
              <div className="mb-0.5 text-[9px] font-bold tracking-[0.14em] uppercase" style={{ color: "rgba(230,220,160,.55)" }}>
                {b.label}
              </div>
              <div className="text-lg font-extrabold" style={{ color: i === 1 ? "rgba(255,255,255,.75)" : "#E6DCA0" }}>
                {b.value}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative z-1 flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <OrbitalRing />
      <FloatingBadges badges={t.hero.badges} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-2 max-w-[800px] px-6 pt-[92px] pb-9 text-center"
      >
        <Reveal>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{ background: "rgba(230,220,160,.06)", borderColor: "rgba(230,220,160,.2)" }}
          >
            <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "#E6DCA0", animation: "pulse 2s ease infinite" }} />
            <span className="text-[9px] font-bold tracking-[0.22em] uppercase" style={{ color: "rgba(230,220,160,.7)" }}>
              {t.hero.badge}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-[clamp(34px,6vw,58px)] font-extrabold text-white" style={{ lineHeight: 1.08, letterSpacing: "-0.022em" }}>
            {t.hero.titleLine1}
            <br />
            <span style={{ color: "#E6DCA0" }}>{t.hero.titleLine2}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mx-auto mt-5 inline-flex items-center gap-3 rounded-full border px-6 py-2.5"
            style={{ borderColor: "rgba(230,220,160,.3)", background: "rgba(28,53,94,.32)" }}
          >
            <span className="text-3xl font-extrabold" style={{ color: "#E6DCA0" }}>
              {t.hero.statMultiplier}
            </span>
            <span className="text-[12px] font-light tracking-[0.1em] uppercase" style={{ color: "rgba(230,220,160,.78)" }}>
              {t.hero.statLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mx-auto my-6 h-9 w-px"
            style={{ background: "linear-gradient(to bottom,transparent,rgba(230,220,160,.4),transparent)" }}
          />
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto max-w-[500px] text-[17px] font-light" style={{ lineHeight: 1.72, color: "rgba(255,255,255,.68)" }}>
            <span className="gold-sweep-text font-medium">{t.hero.bodyLead}</span> {t.hero.bodyRest}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-9 flex items-center justify-center gap-0">
            <div className="flex flex-shrink-0 flex-col items-center gap-1.5">
              <div
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border"
                style={{ borderColor: "rgba(255,255,255,.28)", background: "rgba(28,53,94,.45)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="3.5" stroke="rgba(255,255,255,.72)" strokeWidth="1.5" />
                  <path d="M5 20c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="rgba(255,255,255,.72)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,.38)" }}>
                {t.hero.warmLead.you}
              </span>
            </div>

            <div className="mb-5 flex flex-shrink-0 items-center">
              <div className="relative h-px w-9 overflow-hidden" style={{ background: "rgba(230,220,160,.12)" }}>
                <div
                  className="absolute top-0 left-0 h-full w-full"
                  style={{ background: "linear-gradient(to right,transparent,#E6DCA0,transparent)", animation: "flowLine 1.8s linear infinite" }}
                />
              </div>
              <div
                className="h-0 w-0 flex-shrink-0"
                style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid rgba(230,220,160,.45)" }}
              />
            </div>

            <div className="relative flex flex-shrink-0 flex-col items-center gap-1.5">
              <div
                className="absolute top-0 left-0 h-[52px] w-[52px] rounded-full border"
                style={{ borderColor: "rgba(230,220,160,.5)", animation: "ping 2.6s ease-out infinite" }}
              />
              <div
                className="absolute top-0 left-0 h-[52px] w-[52px] rounded-full border"
                style={{ borderColor: "rgba(230,220,160,.28)", animation: "ping 2.6s ease-out infinite", animationDelay: ".9s" }}
              />
              <div
                className="relative z-1 flex h-[52px] w-[52px] items-center justify-center rounded-full border-[1.5px]"
                style={{
                  borderColor: "#E6DCA0",
                  background: "rgba(230,220,160,.13)",
                  boxShadow: "0 0 22px rgba(230,220,160,.45),0 0 44px rgba(230,220,160,.14)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#E6DCA0" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="7" r="4" stroke="#E6DCA0" strokeWidth="1.5" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#E6DCA0" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[9px] font-bold tracking-[0.16em] uppercase whitespace-nowrap" style={{ color: "#E6DCA0" }}>
                {t.hero.warmLead.lead}
              </span>
            </div>

            <div className="mb-5 flex flex-shrink-0 items-center">
              <div className="relative h-px w-9 overflow-hidden" style={{ background: "rgba(100,220,130,.12)" }}>
                <div
                  className="absolute top-0 left-0 h-full w-full"
                  style={{
                    background: "linear-gradient(to right,transparent,rgba(100,230,140,.9),transparent)",
                    animation: "flowLine 1.8s linear infinite",
                    animationDelay: ".55s",
                  }}
                />
              </div>
              <div
                className="h-0 w-0 flex-shrink-0"
                style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid rgba(100,220,130,.55)" }}
              />
            </div>

            <div className="flex flex-shrink-0 flex-col items-center gap-1.5">
              <div
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[1.5px]"
                style={{ borderColor: "rgba(100,220,130,.65)", background: "rgba(50,180,80,.12)", boxShadow: "0 0 16px rgba(80,200,100,.28)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke="rgba(100,235,145,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[9px] font-bold tracking-[0.16em] uppercase" style={{ color: "rgba(100,220,130,.75)" }}>
                {t.hero.warmLead.dealLabel}
              </span>
              <span
                className="mt-0.5 flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold"
                style={{ borderColor: "rgba(100,220,130,.4)", background: "rgba(50,180,80,.1)", color: "rgba(120,235,150,.95)" }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.hero.warmLead.deal}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-11 flex flex-col items-center gap-2">
            <span className="text-[9px] font-bold tracking-[0.26em] uppercase" style={{ color: "rgba(255,255,255,.2)" }}>
              {t.hero.scroll}
            </span>
            <div
              className="h-8 w-px"
              style={{ background: "linear-gradient(to bottom,rgba(230,220,160,.5),transparent)", animation: "bounce 2.2s ease infinite" }}
            />
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
