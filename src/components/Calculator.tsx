"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const BUDGETS = [80000, 120000, 180000, 250000];
const BUDGET_LABELS = ["$80k", "$120k", "$180k", "$250k+"];

function fmt(n: number) {
  return Math.round(n).toLocaleString("ru-RU");
}

function pluralize(n: number, forms: readonly string[]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return forms[1];
  return forms[2];
}

export default function Calculator() {
  const { t } = useLang();
  const [bIdx, setBIdx] = useState(2);
  const [clients, setClients] = useState(5);
  const [thb, setThb] = useState(36.5);
  const [rub, setRub] = useState(91.2);
  const [ratesOk, setRatesOk] = useState(false);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((d) => {
        if (d.rates) {
          setThb(Math.round(d.rates.THB * 10) / 10);
          setRub(Math.round(d.rates.RUB));
          setRatesOk(true);
        }
      })
      .catch(() => setRatesOk(true));
  }, []);

  const budget = BUDGETS[bIdx];
  const perClient = budget * 0.03;
  const total = perClient * clients;
  const clientWord = pluralize(clients, t.calculator.clientSuffix);

  return (
    <section id="calculator" className="sec relative z-1 px-10 py-20">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              05
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            {t.calculator.h}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2.5 text-base font-light" style={{ color: "rgba(255,255,255,.55)" }}>
            {t.calculator.sub}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-[14px] border p-7" style={{ borderColor: "rgba(230,220,160,.1)", background: "rgba(28,53,94,.22)" }}>
            <div className="mb-6.5">
              <div className="mb-3.5 text-[10px] font-bold tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,.38)" }}>
                {t.calculator.budgetLabel}
              </div>
              <div className="flex flex-wrap gap-2">
                {BUDGET_LABELS.map((label, i) => (
                  <button key={i} className={`b-opt${bIdx === i ? " b-sel" : ""}`} onClick={() => setBIdx(i)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-3.5 flex items-baseline justify-between">
                <div className="text-[10px] font-bold tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,.38)" }}>
                  {t.calculator.clientsLabel}
                </div>
                <div className="text-2xl font-extrabold" style={{ color: "#E6DCA0", lineHeight: 1 }}>
                  {clients}
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={clients}
                onChange={(e) => setClients(parseInt(e.target.value))}
                className="cslider"
              />
              <div className="mt-1.5 flex justify-between">
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,.24)" }}>
                  1
                </span>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,.24)" }}>
                  20
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            className="relative mt-3 overflow-hidden rounded-[14px] border p-7"
            style={{ borderColor: "rgba(230,220,160,.22)", background: "rgba(28,53,94,.3)" }}
          >
            <div
              className="pointer-events-none absolute h-40 w-40"
              style={{ top: "-50px", right: "-50px", background: "radial-gradient(circle,rgba(230,220,160,.07) 0%,transparent 70%)" }}
            />
            <div className="mb-1 text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,.28)" }}>
              {t.calculator.potentialLabel}
            </div>
            <div className="mb-2.5 text-xs font-light" style={{ color: "rgba(255,255,255,.42)" }}>
              {t.calculator.forLabel} {clients} {clientWord}
            </div>
            <div className="text-[clamp(38px,7vw,52px)] font-black" style={{ color: "#E6DCA0", letterSpacing: "-0.025em", lineHeight: 1 }}>
              ${fmt(total)}
            </div>

            <div className="mt-5 flex flex-wrap gap-8">
              <div>
                <div className="mb-1 text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,.26)" }}>
                  {t.calculator.inThb}
                </div>
                <div className="text-[19px] font-semibold" style={{ color: "rgba(255,255,255,.8)" }}>
                  {fmt(total * thb)}&nbsp;฿
                </div>
              </div>
              <div>
                <div className="mb-1 text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,.26)" }}>
                  {t.calculator.inRub}
                </div>
                <div className="text-[19px] font-semibold" style={{ color: "rgba(255,255,255,.8)" }}>
                  {fmt(total * rub)}&nbsp;₽
                </div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,.26)" }}>
                  {t.calculator.rateLabel}
                </div>
                <div className="mt-1.5 text-[11px] font-normal" style={{ color: "rgba(255,255,255,.32)" }}>
                  {ratesOk ? t.calculator.rateOk : t.calculator.rateLoading}
                </div>
              </div>
            </div>

            <div className="my-5 h-px" style={{ background: "rgba(255,255,255,.06)" }} />

            <div className="mb-2.5 text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: "rgba(255,255,255,.26)" }}>
              {t.calculator.perClientLabel}
            </div>
            <div className="grid max-w-[320px] grid-cols-[1fr_auto] gap-x-5 gap-y-1.5">
              <span className="text-[13px] font-light" style={{ color: "rgba(255,255,255,.55)" }}>
                {t.calculator.rowPropertyValue}
              </span>
              <span className="text-right text-[13px] font-medium" style={{ color: "rgba(255,255,255,.72)" }}>
                ${fmt(budget)}
              </span>
              <span className="text-[13px] font-semibold" style={{ color: "rgba(230,220,160,.82)" }}>
                {t.calculator.rowCommission}
              </span>
              <span className="text-right text-[13px] font-bold" style={{ color: "#E6DCA0" }}>
                ${fmt(perClient)}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-4.5 text-center text-[13px] font-light" style={{ lineHeight: 1.7, color: "rgba(255,255,255,.32)" }}>
            {t.calculator.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
