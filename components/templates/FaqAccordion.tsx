"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FaqAccordionItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqAccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border bg-white border border-border px-5">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between text-left py-5 gap-4 group"
            aria-expanded={open === i}
          >
            <div className="flex items-start gap-3">
              <span className="text-kincya text-sm shrink-0 mt-0.5" style={{ fontFamily: "var(--font-serif)" }}>
                Q
              </span>
              <span
                className="text-sm text-sumi leading-relaxed group-hover:text-ai transition-colors duration-200"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.q}
              </span>
            </div>
            <span
              className="text-sumi/40 text-xs shrink-0 mt-1"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block", transition: "transform 0.3s" }}
            >
              ＋
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex gap-3 pb-5">
                  <span className="text-igusa text-sm shrink-0 mt-0.5">A</span>
                  <p className="text-sm text-sumi/70 leading-relaxed whitespace-pre-line">{item.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
