"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Users, Zap } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

// --- TRADUCTIONS ---

const content = {
  en: {
    title: "Who We Are",
    description: "Advisuract is a global strategy consultancy focused on Data & AI transformation. We help organizations navigate complexity and unlock sustainable growth through cutting-edge technology.",
    cta: "Learn more about our mission",
    stats: [
      { label: "Digital Focus", value: "100%" },
      { label: "Expert Support", value: "24/7" }
    ]
  },
  fr: {
    title: "Qui Sommes-Nous",
    description: "Advisuract est un cabinet de conseil en stratégie globale axé sur la transformation Data & IA. Nous aidons les organisations à naviguer dans la complexité et à libérer une croissance durable.",
    cta: "En savoir plus sur notre mission",
    stats: [
      { label: "Focus Digital", value: "100%" },
      { label: "Support Expert", value: "24/7" }
    ]
  }
};

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];

  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation d'apparition du texte au scroll
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Colonne de texte */}
        <div ref={textRef}>
          <motion-div> {/* Note: Optionnel si tu veux ajouter du Framer Motion en plus de GSAP */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tighter">
              {t.title}
            </h2>
            <p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-xl">
              {t.description}
            </p>
            <button className="group flex items-center gap-2 text-violet-600 font-bold hover:gap-4 transition-all">
              {t.cta} <ArrowRight size={20} className="transition-transform" />
            </button>
          </motion-div>
        </div>

        {/* Grille de statistiques (Design épuré sur fond blanc) */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 bg-zinc-50 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
            <Zap className="text-violet-600 mb-4" size={32} />
            <div className="text-4xl font-black text-black">{t.stats[0].value}</div>
            <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-1">
              {t.stats[0].label}
            </div>
          </div>

          <div className="p-10 bg-zinc-50 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
            <Users className="text-violet-600 mb-4" size={32} />
            <div className="text-4xl font-black text-black">{t.stats[1].value}</div>
            <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-1">
              {t.stats[1].label}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}