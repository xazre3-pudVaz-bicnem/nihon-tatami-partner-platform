"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";
import FaqSection from "@/components/ui/FaqSection";

type Props = {
  items: FaqItem[];
};

export default function FAQTabs({ items }: Props) {
  const [tab, setTab] = useState<"general" | "btob">("general");

  const general = items.filter((f) => f.category !== "btob");
  const btob = items.filter((f) => f.category === "btob");
  const displayed = tab === "general" ? general.slice(0, 7) : btob;

  const tabs = [
    { key: "general" as const, label: "一般のご質問", count: general.length },
    { key: "btob" as const, label: "法人・管理会社向け", count: btob.length },
  ];

  return (
    <div>
      <div className="flex border-b border-border mb-0">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-5 py-3.5 text-xs tracking-wider border-b-2 transition-all duration-200 flex items-center gap-2 ${
              tab === t.key
                ? "border-kincya text-sumi"
                : "border-transparent text-sumi/40 hover:text-sumi/60"
            }`}
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {t.label}
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-sm ${
                tab === t.key ? "bg-kincya/10 text-kincya" : "bg-sumi/5 text-sumi/30"
              }`}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>

      <div className="bg-white border border-border border-t-0 px-6 py-1">
        <FaqSection items={displayed} />
      </div>
    </div>
  );
}
