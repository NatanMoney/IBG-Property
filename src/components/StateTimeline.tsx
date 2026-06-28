"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function StateTimeline() {
  const { t } = useLang();
  const items = t.state.items;

  return (
    <section id="state" className="sec relative z-1 overflow-hidden px-10 py-20">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/properties/villa-aerial-solar.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(13,28,56,.55) 0%, rgba(13,28,56,.8) 35%, rgba(13,28,56,.92) 100%)" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-5.5">
        <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0 300C200 200 400 400 600 300S1000 200 1200 300"
            fill="none"
            stroke="#E6DCA0"
            strokeWidth="1"
            strokeDasharray="10 18"
            style={{ animation: "lineDash 9s linear infinite" }}
          />
          <path
            d="M0 350C300 250 500 450 700 350S1000 250 1200 350"
            fill="none"
            stroke="#E6DCA0"
            strokeWidth="1"
            strokeDasharray="7 22"
            style={{ animation: "lineDash 13s linear infinite", animationDelay: "-3s" }}
          />
          <circle cx="200" cy="300" r="4" fill="#E6DCA0" style={{ animation: "shimmer 3s ease infinite" }} />
          <circle cx="600" cy="300" r="4" fill="#E6DCA0" style={{ animation: "shimmer 3s ease infinite", animationDelay: "-1.5s" }} />
          <circle cx="1000" cy="300" r="4" fill="#E6DCA0" style={{ animation: "shimmer 3s ease infinite", animationDelay: "-1s" }} />
        </svg>
      </div>

      <div className="relative z-1 mx-auto max-w-[720px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              08
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            {t.state.title}
          </h2>
        </Reveal>

        {items.map((item, i) => (
          <Reveal key={i} delay={0.1 + i * 0.1}>
            <div className="mt-9 flex gap-5 border-b py-5.5" style={{ borderColor: "rgba(255,255,255,.06)" }}>
              <div className="flex flex-shrink-0 flex-col items-center gap-2 pt-0.5">
                <span className="text-[10px] font-extrabold tracking-[0.2em]" style={{ color: "rgba(230,220,160,.45)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="min-h-8 w-px flex-1"
                  style={{ background: "linear-gradient(to bottom,rgba(230,220,160,.25),transparent)" }}
                />
              </div>
              <div>
                <p className="text-[22px] font-semibold text-white" style={{ lineHeight: 1.35 }}>
                  {item.h}
                </p>
                <p className="mt-1.5 text-[15px] font-light" style={{ lineHeight: 1.68, color: "rgba(255,255,255,.58)" }}>
                  {item.s}
                </p>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.1 + items.length * 0.1}>
          <div
            className="-ml-5 flex gap-5 border-b py-5.5 pb-6 pl-4.5"
            style={{
              borderColor: "rgba(255,255,255,.06)",
              background: "linear-gradient(to right,rgba(230,220,160,.04),transparent)",
              borderRadius: "0 10px 10px 0",
              borderLeft: "2px solid rgba(230,220,160,.38)",
            }}
          >
            <div className="flex flex-shrink-0 flex-col items-center gap-2 pt-0.5">
              <span className="text-[10px] font-extrabold tracking-[0.2em]" style={{ color: "#E6DCA0" }}>
                {String(items.length + 1).padStart(2, "0")}
              </span>
              <div className="min-h-8 w-px flex-1" style={{ background: "linear-gradient(to bottom,rgba(230,220,160,.5),transparent)" }} />
            </div>
            <div>
              <p className="mb-2 text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(230,220,160,.58)" }}>
                {t.state.highlight.tag}
              </p>
              <p className="text-[clamp(30px,5vw,42px)] font-black" style={{ color: "#E6DCA0", letterSpacing: "-0.025em", lineHeight: 1 }}>
                {t.state.highlight.amount}
              </p>
              <p className="mt-2 text-[15px] font-light" style={{ lineHeight: 1.68, color: "rgba(255,255,255,.68)" }}>
                {t.state.highlight.s}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1 + (items.length + 1) * 0.1}>
          <div className="flex gap-5 py-5.5">
            <div className="flex flex-shrink-0 flex-col items-center gap-2 pt-0.5">
              <span className="text-[10px] font-extrabold tracking-[0.2em]" style={{ color: "rgba(230,220,160,.45)" }}>
                {String(items.length + 2).padStart(2, "0")}
              </span>
            </div>
            <div>
              <p className="text-[22px] font-semibold text-white" style={{ lineHeight: 1.35 }}>
                {t.state.last.h}
              </p>
              <p className="mt-1.5 text-[15px] font-light" style={{ lineHeight: 1.68, color: "rgba(230,220,160,.62)" }}>
                {t.state.last.s}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
