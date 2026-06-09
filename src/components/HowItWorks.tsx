"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// --- DONNÉES STATIQUES TRADUITES (Si Strapi est vide) ---
const defaultSteps = {
  en: [
    { id: 1, title: "Assess", description: "Evaluating your current data maturity and AI readiness to identify high-impact opportunities." },
    { id: 2, title: "Design", description: "Crafting a tailored strategy and technical roadmap aligned with your business goals." },
    { id: 3, title: "Prioritize", description: "Focusing on ROI-driven use cases to ensure immediate and measurable business value." },
  ],
  fr: [
    { id: 1, title: "Évaluer", description: "Évaluation de votre maturité data et de votre préparation à l'IA pour identifier les opportunités à fort impact." },
    { id: 2, title: "Concevoir", description: "Création d'une stratégie sur mesure et d'une roadmap technique alignée sur vos objectifs business." },
    { id: 3, title: "Prioriser", description: "Ciblage des cas d'usage à fort ROI pour garantir une valeur business immédiate et mesurable." },
  ]
};

interface Step {
  id: string | number;
  title: string;
  description: string;
}

interface ProcessProps {
  steps?: Step[];
}

export default function Process({ steps }: ProcessProps) {
  const { lang } = useLanguage();
  
  // Si pas de steps fournis par props, on utilise les données par défaut
  const displaySteps = (steps && steps.length > 0) ? steps : defaultSteps[lang];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Layout Principal : Grille 2 colonnes sur Desktop, 1 sur Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* COLONNE GAUCHE : TEXTE & ÉTAPES */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Titre avec accent violet */}
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight tracking-tighter">
              {lang === "en" ? (
                <>How Our <span className="text-violet-600">AI Consulting</span><br />Works: Simple Steps</>
              ) : (
                <>Comment notre <span className="text-violet-600">Conseil IA</span><br />fonctionne en étapes</>
              )}
            </h2>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
              {lang === "en"
                ? "We combine deep data expertise with pragmatic business strategy to deliver measurable AI outcomes — fast, focused, and built to scale."
                : "Nous combinons expertise data et stratégie business pragmatique pour livrer des résultats IA mesurables — rapidement et à grande échelle."}
            </p>

            {/* Petites cartes d'étapes (Bento horizontal) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {displaySteps.slice(0, 3).map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-violet-50 p-5 rounded-2xl border border-violet-100 flex flex-col gap-2 group hover:bg-white hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
                >
                  <span className="text-xs font-black text-violet-300 group-hover:text-violet-600 transition-colors uppercase tracking-widest">
                    Step 0{i + 1}
                  </span>
                  <h3 className="font-bold text-sm text-black">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-[0.75rem] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bouton CTA */}
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-violet-600 transition-all shadow-lg active:scale-95"
              >
                {lang === "en" ? "Explore Now" : "Découvrir maintenant"}
              </a>
            </div>
          </motion.div>

          {/* COLONNE DROITE : IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-100 aspect-[4/3] lg:aspect-square"
          >
            <Image
              src="/images/pc.png"
              alt="AI Consulting Process"
              fill
              className="object-contain p-8 bg-zinc-50"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}