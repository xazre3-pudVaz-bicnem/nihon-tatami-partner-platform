"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

type Props = {
  service: Service;
  index?: number;
};

export default function ServiceCard({ service, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={service.href}
        className="group flex flex-col bg-white border border-border hover:border-kincya/30 transition-all duration-300 hover:shadow-sm overflow-hidden"
      >
        <div className="relative h-40 bg-kiji overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          {service.price && (
            <p className="text-xs text-kincya mb-2">{service.price}</p>
          )}
          <h3
            className="text-base text-sumi mb-2 group-hover:text-ai transition-colors duration-200"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {service.name}
          </h3>
          <p className="text-xs text-sumi/60 leading-relaxed">{service.shortDesc}</p>
          <p className="text-xs text-ai mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            詳しく見る →
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
