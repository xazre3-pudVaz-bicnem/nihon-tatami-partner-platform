"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "@/data/faq";

type Props = {
  items: FaqItem[];
  limit?: number;
};

export default function FaqSection({ items, limit }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <div className="divide-y divide-border">
      {displayed.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between text-left py-5 gap-4 group"
          >
            <div className="flex items-start gap-3">
              <span className="text-kincya text-sm shrink-0 mt-0.5" style={{ fontFamily: "var(--font-serif)" }}>Q</span>
              <span className="text-sm text-sumi leading-relaxed group-hover:text-ai transition-colors duration-200" style={{ fontFamily: "var(--font-serif)" }}>
                {item.q}
              </span>
            </div>
            <span className="text-sumi/40 text-xs shrink-0 mt-1 transition-transform duration-300" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>
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
                  <p className="text-sm text-sumi/70 leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
