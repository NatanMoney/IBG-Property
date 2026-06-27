"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function MobileMenu({
  open,
  onClose,
  sectionIds,
}: {
  open: boolean;
  onClose: () => void;
  sectionIds: string[];
}) {
  const { t, toggleLang } = useLang();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-200 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(8,14,28,.97)", backdropFilter: "blur(24px)" }}
        >
          <button
            onClick={onClose}
            className="absolute top-4.5 right-4.5 flex h-11 w-11 items-center justify-center rounded-full border text-lg text-white/60"
            style={{ borderColor: "rgba(230,220,160,.28)" }}
            aria-label="Close menu"
          >
            ✕
          </button>
          {t.nav.links.map((label, i) => (
            <a
              key={label}
              href={`#${sectionIds[i]}`}
              onClick={onClose}
              className="nlnk"
              style={{ fontSize: 14, letterSpacing: "0.22em" }}
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="mt-4 rounded-full border px-5.5 py-2 text-[11px] font-bold tracking-[0.14em] uppercase"
            style={{ borderColor: "rgba(230,220,160,.28)", color: "rgba(230,220,160,.72)" }}
          >
            {t.nav.langBtn}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
