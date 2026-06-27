"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

function QuestionCard({
  label,
  text,
  answers,
  selected,
  onSelect,
}: {
  label: string;
  text: string;
  answers: readonly string[];
  selected: number | null;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="rounded-[14px] border p-6.5" style={{ borderColor: "rgba(230,220,160,.1)", background: "rgba(28,53,94,.22)" }}>
      <div className="mb-3.5 text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(230,220,160,.55)" }}>
        {label}
      </div>
      <p className="mb-5 text-base font-medium text-white" style={{ lineHeight: 1.52 }}>
        {text}
      </p>
      <div className="flex flex-col gap-2.5">
        {answers.map((a, i) => (
          <button key={i} className={`q-opt${selected === i ? " q-sel" : ""}`} onClick={() => onSelect(i)} disabled={selected !== null}>
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}

function Reaction({ text }: { text: string }) {
  return (
    <div
      className="mt-3 rounded-r-lg border-l-2 px-4.5 py-3.5"
      style={{ borderColor: "#E6DCA0", background: "rgba(230,220,160,.07)" }}
    >
      <p className="text-sm font-normal" style={{ lineHeight: 1.62, color: "#E6DCA0" }}>
        {text}
      </p>
    </div>
  );
}

export default function Quiz() {
  const { t } = useLang();
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const qn = answers.filter((a) => a !== null).length;
  const [q0, q1, q2] = t.quiz.questions;

  const select = (qIdx: number, aIdx: number) => {
    setAnswers((prev) => prev.map((v, i) => (i === qIdx ? aIdx : v)));
  };

  return (
    <section id="quiz" className="sec relative z-1 px-10 py-20">
      <div className="mx-auto max-w-[700px]">
        <Reveal>
          <div className="mb-11 flex items-center gap-3.5">
            <span className="block h-px w-[34px] opacity-40" style={{ background: "#E6DCA0" }} />
            <span className="text-[10px] font-bold tracking-[0.24em] uppercase opacity-58" style={{ color: "#E6DCA0" }}>
              04
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-[clamp(26px,4vw,40px)] font-bold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.015em" }}>
            {t.quiz.h}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-2.5 text-base font-light" style={{ color: "rgba(255,255,255,.62)" }}>
            {t.quiz.sub}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-7 mb-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,.28)" }}>
                {t.quiz.progressLabel}
              </span>
              <span className="text-xs font-semibold" style={{ color: "rgba(230,220,160,.6)" }}>
                {qn}/3
              </span>
            </div>
            <div className="h-0.5 overflow-hidden rounded-sm" style={{ background: "rgba(255,255,255,.08)" }}>
              <div
                className="h-full rounded-sm"
                style={{ background: "#E6DCA0", width: `${Math.round((qn / 3) * 100)}%`, transition: "width .65s cubic-bezier(.22,1,.36,1)" }}
              />
            </div>
          </div>
        </Reveal>

        <QuestionCard label={q0.label} text={q0.text} answers={q0.answers} selected={answers[0]} onSelect={(i) => select(0, i)} />

        {answers[0] !== null && (
          <div style={{ animation: "fadeUp .6s cubic-bezier(.22,1,.36,1)" }}>
            <Reaction text={q0.reactions[answers[0]]} />
            <div className="mt-5.5">
              <QuestionCard label={q1.label} text={q1.text} answers={q1.answers} selected={answers[1]} onSelect={(i) => select(1, i)} />
            </div>
          </div>
        )}

        {answers[1] !== null && (
          <div style={{ animation: "fadeUp .6s cubic-bezier(.22,1,.36,1)" }}>
            <Reaction text={q1.reactions[answers[1]]} />
            <div className="mt-5.5">
              <QuestionCard label={q2.label} text={q2.text} answers={q2.answers} selected={answers[2]} onSelect={(i) => select(2, i)} />
            </div>
          </div>
        )}

        {answers[2] !== null && (
          <div style={{ animation: "fadeUp .6s cubic-bezier(.22,1,.36,1)" }}>
            <Reaction text={q2.reactions[answers[2]]} />
            <div
              className="mt-6.5 rounded-[14px] border px-6 py-7 text-center"
              style={{ borderColor: "rgba(230,220,160,.22)", background: "rgba(28,53,94,.3)" }}
            >
              <p className="text-lg font-normal text-white" style={{ lineHeight: 1.68 }}>
                {t.quiz.final.l1}
                <br />
                <span className="font-bold" style={{ color: "#E6DCA0" }}>
                  {t.quiz.final.l2}
                </span>
              </p>
              <p className="mt-2.5 text-sm font-light" style={{ color: "rgba(255,255,255,.48)" }}>
                {t.quiz.final.l3}
              </p>
              <a
                href="#calculator"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border px-6.5 py-3 text-[11px] font-bold tracking-[0.14em] uppercase"
                style={{ background: "rgba(230,220,160,.1)", borderColor: "rgba(230,220,160,.38)", color: "#E6DCA0" }}
              >
                {t.quiz.final.btn}
                <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
