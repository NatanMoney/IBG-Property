"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const CARD_PHOTOS = [
  "/images/properties/villa-tropical-garden.jpg",
  "/images/properties/villa-sunset-resort.jpg",
  "/images/properties/villa-terrace-vase.jpg",
];

export default function Cases() {
  const { t } = useLang();

  return (
    <section id="cases" className="sec relative z-1 px-10 py-20">
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              07
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            {t.cases.h}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2.5 text-base font-light" style={{ color: "rgba(255,255,255,.55)" }}>
            {t.cases.sub}
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {t.cases.items.map((item, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1}>
              <div
                className="group relative flex h-full min-h-[250px] flex-col justify-between overflow-hidden rounded-[14px] border p-6 transition-colors"
                style={{ borderColor: i === 1 ? "rgba(230,220,160,.2)" : "rgba(230,220,160,.1)" }}
              >
                <Image
                  src={CARD_PHOTOS[i]}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  quality={78}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ zIndex: 0 }}
                />
                <div
                  className="absolute inset-0 z-1"
                  style={{
                    background: i === 1
                      ? "linear-gradient(165deg, rgba(13,28,56,.42) 0%, rgba(13,28,56,.82) 60%, rgba(13,28,56,.93) 100%)"
                      : "linear-gradient(165deg, rgba(13,28,56,.55) 0%, rgba(13,28,56,.86) 60%, rgba(13,28,56,.94) 100%)",
                  }}
                />
                <div className="relative z-2">
                  <div className="mb-3.5 text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(230,220,160,.45)" }}>
                    {item.tag}
                  </div>
                  <p className="text-sm font-light" style={{ lineHeight: 1.72, color: "rgba(255,255,255,.7)" }}>
                    {item.text}
                  </p>
                </div>
                <div className="relative z-2 mt-5 border-t pt-3.5" style={{ borderColor: "rgba(230,220,160,.1)" }}>
                  <div className="text-2xl font-extrabold" style={{ color: "#E6DCA0", letterSpacing: "-0.01em" }}>
                    {item.num}
                  </div>
                  <div className="mt-1 text-[11px] font-normal" style={{ color: "rgba(255,255,255,.38)" }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
