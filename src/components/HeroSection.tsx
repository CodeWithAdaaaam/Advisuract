"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Note: j'utilise framer-motion pour la compatibilité, change en motion/react si nécessaire
import { Sparkles, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --- TRADUCTIONS ---

const content = {
  en: {
    titlePart1: "Transforming ",
    titleItalic: "Ambition",
    titlePart2: " into ",
    titleUnderline: "Impact",
    description: "Advisuract bridges the gap between vision and reality. We partner with leaders to navigate complexity and unlock sustainable growth in an evolving global landscape.",
    ctaPrimary: "Book a Strategy Session",
    ctaSecondary: "Explore our approach"
  },
  fr: {
    titlePart1: "Transformer ",
    titleItalic: "l'Ambition",
    titlePart2: " en ",
    titleUnderline: "Impact",
    description: "Advisuract comble le fossé entre la vision et la réalité. Nous accompagnons les leaders pour naviguer dans la complexité et libérer une croissance durable.",
    ctaPrimary: "Réserver une session stratégique",
    ctaSecondary: "Explorer notre approche"
  }
};

export default function HeroSection() {
  const [bgImageError, setBgImageError] = useState<boolean>(false);
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-sans selection:bg-brand-purple/30 selection:text-white">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black">
        {!bgImageError ? (
          <img
            src="/input_file_0.png"
            alt="Advisuract Background"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            onError={() => setBgImageError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="absolute inset-0 bg-black">
            <div className="absolute -top-[15%] left-[5%] w-[80%] h-[60%] opacity-80"
              style={{ background: 'radial-gradient(ellipse at center, #6322DA 0%, rgba(99,34,218,0) 75%)', filter: 'blur(100px)' } as React.CSSProperties} />
            <div className="absolute top-[35%] -right-[10%] w-[70%] h-[40%] opacity-70"
              style={{ background: 'radial-gradient(ellipse at center, #4114B0 0%, rgba(65, 20, 176, 0) 70%)', filter: 'blur(110px)' } as React.CSSProperties} />
            <div className="absolute -bottom-[10%] -left-[10%] w-[70%] h-[55%] opacity-60"
              style={{ background: 'radial-gradient(ellipse at center, #5A19C0 0%, rgba(90, 25, 192, 0) 70%)', filter: 'blur(120px)' } as React.CSSProperties} />
            <div className="absolute bottom-10 right-10 text-white/20">
              <Sparkles size={24} strokeWidth={1} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* HERO CONTENT */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
        >
          {t.titlePart1}
          <span className="text-white/40 italic">{t.titleItalic}</span> 
          {t.titlePart2}
          <span className="relative inline-block">
            {t.titleUnderline}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-brand-purple/0 via-brand-purple to-brand-purple/0"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-2xl text-lg sm:text-xl text-white/50 leading-relaxed"
        >
          {t.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary CTA */}
          <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand-purple/20">
            <div className="absolute inset-0 bg-brand-purple translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative group-hover:text-white transition-colors flex items-center gap-2">
              {t.ctaPrimary}
              <ChevronRight size={18} />
            </span>
          </button>

          {/* Secondary CTA */}
          <button className="text-sm font-bold flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
            {t.ctaSecondary}
            <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
          </button>
        </motion.div>
        
      </main>

      {/* Barre décorative basse */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}