"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount: 0.08 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Определяем цель покупки",
    lead: "Что для вас является основной целью покупки?",
    items: [
      "Постоянное проживание / переезд в Таиланд",
      "Инвестиции и сохранение капитала",
      "Получение дохода от аренды",
      "Отдых несколько месяцев в году",
      "Комбинация проживания и сдачи в аренду",
    ],
  },
  {
    num: "02",
    title: "Определяем регион",
    lead: "Если представить, что квартира уже куплена — где вы видите себя через несколько лет?",
    note: "Пхукет — спокойный ритм, природа, европейская атмосфера. Паттайя — городская среда, развитая инфраструктура, без автомобиля.",
    items: ["Пхукет", "Паттайя", "Пока не определился"],
  },
  {
    num: "03",
    title: "Сужаем выбор локации",
    lead: "Что для вас важнее в районе проживания?",
    items: [
      "Максимально спокойный район",
      "Центральное расположение",
      "Близость к морю",
      "Развитая инфраструктура (магазины, медицина, фитнес)",
      "Возможность жить без автомобиля",
      "Более престижная / инвестиционная локация",
    ],
  },
  {
    num: "04",
    title: "Определяем бюджет",
    lead: "Какой бюджет покупки вы рассматриваете?",
    items: [
      "Комфортный бюджет: ___________",
      "Максимально возможный бюджет: ___________",
      "Необходима ли рассрочка: да / нет",
    ],
  },
  {
    num: "05",
    title: "Требования к объекту",
    lead: "Тип, размер и готовность недвижимости",
    items: [
      "Тип: Апартаменты / Вилла",
      "Спальни: Studio / 1BR / 2BR / 3BR+",
      "Объект: строящийся / готовый от застройщика / вторичка",
      "Инфраструктура: бассейн, тренажёрный зал, охрана, парковка",
    ],
  },
  {
    num: "06",
    title: "Расставляем приоритеты",
    lead: "Попросите клиента выбрать три самых важных критерия:",
    items: [
      "Цена / Локация / Качество строительства",
      "Современный комплекс / Ликвидность / Доходность",
      "Вид из окна / Спокойствие района",
    ],
  },
  {
    num: "07",
    title: "Готовность к компромиссам",
    lead: "Если найдём интересный объект, готовы ли вы:",
    items: [
      "Немного увеличить бюджет",
      "Рассмотреть квартиру меньшей площади",
      "Выбрать 1BR вместо 2BR",
      "Купить объект со сроком сдачи 6–12 месяцев",
    ],
  },
  {
    num: "08",
    title: "Срок покупки",
    lead: "Когда планируете приобрести недвижимость?",
    items: [
      "Во время ближайшей поездки",
      "В течение 1–3 месяцев",
      "В течение полугода",
      "Пока изучаю рынок",
    ],
  },
  {
    num: "09",
    title: "Дополнительные вопросы",
    lead: "Финальные уточнения перед передачей заявки:",
    items: [
      "Бывали ли вы раньше в Таиланде? Какие районы понравились?",
      "Планируете сдавать недвижимость в аренду?",
      "Есть ли необходимость в долгосрочной визе?",
    ],
  },
];

export default function QualificationPage() {
  return (
    <div
      style={{ background: "#091524", minHeight: "100vh", fontFamily: "var(--font-sans, system-ui, sans-serif)" }}
    >
      {/* Background photo */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <Image
          src="/images/properties/villa-aerial-solar.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover opacity-10"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #091524 0%, rgba(9,21,36,.85) 40%, #091524 100%)" }}
        />
      </div>

      {/* Topbar */}
      <div className="relative z-10 flex items-center justify-between border-b px-8 py-5" style={{ borderColor: "rgba(255,255,255,.06)" }}>
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logos/ibg-white.png" alt="IBG Property" width={90} height={24} className="object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
        </Link>
        <Link
          href="/#entry"
          className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[10px] font-bold tracking-[0.14em] uppercase transition-all duration-300 hover:brightness-110"
          style={{ background: "#E6DCA0", color: "#0d1c38" }}
        >
          Получить условия
          <svg width="11" height="8" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Hero header */}
      <div className="relative z-10 mx-auto max-w-[760px] px-6 pb-12 pt-16 text-center">
        <Reveal>
          <div
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5"
            style={{ background: "rgba(230,220,160,.06)", borderColor: "rgba(230,220,160,.22)" }}
          >
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#E6DCA0", animation: "pulse 2s ease infinite" }} />
            <span className="text-[9px] font-bold tracking-[0.22em] uppercase" style={{ color: "rgba(230,220,160,.7)" }}>
              Партнёрский инструмент
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-[clamp(28px,5vw,46px)] font-extrabold text-white" style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Квалификация клиента
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] font-light" style={{ lineHeight: 1.72, color: "rgba(255,255,255,.55)" }}>
            Пошаговый сценарий первой консультации перед передачей клиента специалистам IBG Property. Это не анкета — это живой разговор.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mx-auto mt-8 flex max-w-[560px] gap-3 rounded-xl border px-5 py-4 text-left"
            style={{ borderColor: "rgba(230,220,160,.18)", background: "rgba(230,220,160,.04)" }}>
            <div className="mt-0.5 flex-shrink-0 text-lg">💡</div>
            <p className="text-[13px] font-light" style={{ lineHeight: 1.7, color: "rgba(255,255,255,.52)" }}>
              <span className="font-semibold text-white">Как пользоваться:</span> не зачитывайте вопросы по пунктам — ведите живой разговор. Чем качественнее пройдёт первая консультация, тем быстрее IBG Property подберёт объект.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Steps */}
      <div className="relative z-10 mx-auto max-w-[760px] px-6 pb-8">
        {STEPS.map((step, i) => (
          <Reveal key={step.num} delay={0.05 * i}>
            <div
              className="mb-5 rounded-2xl border p-7"
              style={{
                borderColor: "rgba(255,255,255,.07)",
                background: "rgba(13,28,56,.45)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="mb-4 flex items-start gap-4">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold"
                  style={{ background: "rgba(230,220,160,.12)", color: "#E6DCA0", border: "1px solid rgba(230,220,160,.3)" }}
                >
                  {step.num}
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(230,220,160,.5)" }}>
                    Шаг {step.num}
                  </p>
                  <h2 className="mt-0.5 text-[18px] font-bold text-white" style={{ lineHeight: 1.3 }}>
                    {step.title}
                  </h2>
                </div>
              </div>

              <p className="mb-4 text-[14px] font-medium" style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.6 }}>
                {step.lead}
              </p>

              {step.note && (
                <p className="mb-4 rounded-lg border-l-2 pl-4 text-[13px] font-light italic"
                  style={{ color: "rgba(255,255,255,.42)", borderColor: "rgba(230,220,160,.3)", lineHeight: 1.65 }}>
                  {step.note}
                </p>
              )}

              <ul className="space-y-2">
                {step.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="flex items-start gap-3 text-[13px] font-light"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.04 * j, ease: EASE }}
                    style={{ color: "rgba(255,255,255,.62)", lineHeight: 1.6 }}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "rgba(230,220,160,.45)" }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* After meeting block */}
      <div className="relative z-10 mx-auto max-w-[760px] px-6 pb-8">
        <Reveal>
          <div
            className="rounded-2xl border p-7"
            style={{
              borderColor: "rgba(230,220,160,.25)",
              background: "linear-gradient(135deg, rgba(230,220,160,.08) 0%, rgba(13,28,56,.6) 100%)",
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: "rgba(230,220,160,.2)" }} />
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "rgba(230,220,160,.6)" }}>
                После встречи
              </span>
              <div className="h-px flex-1" style={{ background: "rgba(230,220,160,.2)" }} />
            </div>
            <p className="mb-4 text-[14px] font-medium text-white">
              Передайте заявку через личный кабинет партнёра IBG Property. При передаче обязательно укажите:
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {["Цель покупки", "Выбранный регион", "Основные пожелания", "Бюджет", "Сроки покупки", "Ключевые критерии выбора"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13px] font-light" style={{ color: "rgba(255,255,255,.62)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <polyline points="20 6 9 17 4 12" stroke="#E6DCA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 border-t" style={{ borderColor: "rgba(255,255,255,.06)" }}>
        <div className="mx-auto max-w-[760px] px-6 py-14 text-center">
          <Reveal>
            <p className="mb-2 text-[10px] font-bold tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,.28)" }}>
              Сохраните скрипт
            </p>
            <h3 className="mb-8 text-[clamp(20px,3.5vw,30px)] font-bold text-white" style={{ lineHeight: 1.25 }}>
              Скачайте полный скрипт<br />
              <span style={{ color: "#E6DCA0" }}>в удобном формате</span>
            </h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/ibg-qualification-script.docx"
                download
                className="inline-flex items-center gap-2.5 rounded-lg px-8 py-4 text-[11px] font-bold tracking-[0.13em] uppercase transition-all duration-300 hover:brightness-110"
                style={{ background: "#E6DCA0", color: "#0d1c38", border: "1px solid #E6DCA0" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Скачать скрипт
              </a>
              <Link
                href="/#entry"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-[11px] font-bold tracking-[0.13em] uppercase transition-all duration-300 hover:opacity-80"
                style={{ background: "transparent", color: "#E6DCA0", border: "1px solid rgba(230,220,160,.38)" }}
              >
                Получить условия
                <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M9 1L13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 text-[12px] font-light" style={{ color: "rgba(255,255,255,.28)" }}>
              Команда партнёрского отдела IBG Property
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
