"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("ntp-loaded")) {
        setVisible(true);
        sessionStorage.setItem("ntp-loaded", "1");
        const t = setTimeout(() => setVisible(false), 2200);
        return () => clearTimeout(t);
      }
    } catch {
      // sessionStorage unavailable (private mode etc.)
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#F6F1E7" }}
          aria-hidden="true"
        >
          {/* Top igusa line */}
          <div className="relative w-48 mb-10 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{ transformOrigin: "left" }}
              className="h-px bg-gradient-to-r from-transparent via-[#B88942] to-transparent opacity-70"
            />
          </div>

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-2xl tracking-[0.3em] text-[#1E1C1A] mb-2 select-none"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            日本畳パートナーズ
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
            className="text-[10px] tracking-[0.45em] text-[#1E1C1A] mb-1 uppercase select-none"
          >
            NIHON TATAMI PARTNERS
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.85 }}
            className="text-[9px] tracking-[0.3em] text-[#1E1C1A] uppercase select-none"
          >
            Tatami · Interior · Restoration
          </motion.p>

          {/* Bottom igusa line */}
          <div className="relative w-32 mt-10 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
              style={{ transformOrigin: "left" }}
              className="h-px bg-[#B88942] opacity-25"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
