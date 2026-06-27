"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { dict, type Lang } from "./i18n";

type Ctx = {
  lang: Lang;
  t: typeof dict.ru;
  toggleLang: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  const value = useMemo<Ctx>(
    () => ({
      lang,
      t: dict[lang],
      toggleLang: () => setLang((l) => (l === "ru" ? "en" : "ru")),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
