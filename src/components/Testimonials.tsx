"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// --- TRADUCTIONS DES CONTENUS ---
const content = {
  en: {
    titlePart1: "Why customers",
    titlePart2: "love us",
    subtitle: "Grow your business, not your headcount. We support your success.",
    testimonials: [
      {
        initial: "J",
        name: "Jennie",
        role: "CEO Ador",
        quote: "The AI implementation provided by Advisuract completely transformed our workflow. We've seen a 40% increase in productivity in just three months.",
      },
      {
        initial: "M",
        name: "Mohamed",
        role: "Founder StartupX",
        quote: "An exceptional team that understands both technical AI and business reality. Their strategic roadmap was clear and highly effective.",
      },
      {
        initial: "S",
        name: "Sarah",
        role: "Director TechCo",
        quote: "Professional, responsive, and innovative. They didn't just give us a tool; they gave us a competitive advantage.",
      },
    ]
  },
  fr: {
    titlePart1: "Pourquoi nos clients",
    titlePart2: "nous font confiance",
    subtitle: "Faites croître votre business, pas vos charges. Nous accompagnons votre succès.",
    testimonials: [
      {
        initial: "J",
        name: "Jennie",
        role: "CEO Ador",
        quote: "L'implémentation de l'IA par Advisuract a transformé notre flux de travail. Nous avons constaté une hausse de 40% de la productivité en trois mois.",
      },
      {
        initial: "M",
        name: "Mohamed",
        role: "Fondateur StartupX",
        quote: "Une équipe exceptionnelle qui comprend à la fois l'IA technique et la réalité business. Leur feuille de route était claire et efficace.",
      },
      {
        initial: "S",
        name: "Sarah",
        role: "Directrice TechCo",
        quote: "Professionnels, réactifs et innovants. Ils ne nous ont pas seulement donné un outil ; ils nous ont donné un avantage concurrentiel.",
      },
    ]
  }
};

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [current, setCurrent] = useState(0);
  const activeTestimonial = t.testimonials[current];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SECTION (TEXT) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Apostrophes Géantes (Colorées très clair pour fond blanc) */}
            <div className="absolute -top-24 -left-12 text-[22rem] font-serif font-black text-zinc-100 select-none pointer-events-none z-0">
              “
            </div>

            {/* Texte par-dessus */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black leading-[1.1] text-black tracking-tighter">
                {t.titlePart1}<br />
                <span className="text-violet-600">{t.titlePart2}</span>
              </h2>

              <p className="mt-8 text-lg text-zinc-500 max-w-md leading-relaxed italic">
                {t.subtitle}
              </p>
            </div>
          </motion.div>

          {/* RIGHT SECTION (CARD) */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${lang}-${current}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* La Carte avec dégradé Purple Clair */}
                <div className="relative p-10 md:p-12 rounded-[40px] bg-gradient-to-br from-violet-50 to-white border border-violet-100 shadow-xl shadow-violet-500/5 flex flex-col gap-8">
                  
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-200">
                      {activeTestimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg">{activeTestimonial.name}</h4>
                      <p className="text-violet-600 text-sm font-medium">{activeTestimonial.role}</p>
                    </div>
                  </div>

                  {/* Citation */}
                  <p className="text-zinc-700 text-lg leading-relaxed font-medium italic">
                    "{activeTestimonial.quote}"
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 border-t border-violet-100 pt-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>

                  {/* Navigation Button (Next) */}
                  <button
                    onClick={() => setCurrent((current + 1) % t.testimonials.length)}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-2xl shadow-xl hover:bg-violet-600 transition-all active:scale-90 z-20"
                  >
                    ›
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex gap-3 justify-center mt-10">
              {t.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-violet-600" : "w-2 bg-zinc-200"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}