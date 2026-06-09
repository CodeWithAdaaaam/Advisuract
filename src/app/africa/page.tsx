"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Globe, Users, Target, Rocket, ArrowRight } from "lucide-react";

// --- TRADUCTIONS ---
const content = {
  en: {
    commitment: "Our Commitment",
    heroTitle: "Africa & AI — ",
    heroTitleAccent: "Intelligence in Action",
    heroDesc: "Africa is at the center of the world's next growth story. Advisuract is committed to being part of that transformation — bringing Data, AI, and Digital expertise to organizations and communities across the continent.",
    btnPartner: "Partner With Us",
    btnSchool: "School of Data",
    stats: [
      { value: "54", label: "Countries" },
      { value: "1.4B+", label: "People" },
      { value: "2030", label: "Vision Horizon" },
      { value: "5+", label: "Key Industries" },
    ],
    focusTitle: "Our Focus in Africa",
    focusSubtitle: "From 2025 to 2030, we are dedicated to driving real impact across the continent.",
    focuses: [
      {
        title: "Data & AI for Development",
        desc: "Leveraging data and artificial intelligence to accelerate economic development and social progress across African nations.",
      },
      {
        title: "Digital Transformation",
        desc: "Supporting organizations and governments in building modern digital infrastructure and data-driven capabilities.",
      },
      {
        title: "Local Talent & Expertise",
        desc: "Empowering African professionals and researchers to lead the continent's data and AI revolution from within.",
      },
      {
        title: "Industry Impact",
        desc: "Applying AI across key African industries — agriculture, energy, healthcare, and finance — to create measurable value.",
      },
    ],
    missionTitle: "Our Mission",
    missionDesc: "Passionate about science and driven to create a positive impact. We invite you to join our journey and contribute your experience, your insights, and your vision.",
    ctaTitle: "Join Our Journey",
    ctaDesc: "Be part of the movement shaping Africa's data and AI future.",
    ctaBtn: "Get Involved",
  },
  fr: {
    commitment: "Notre Engagement",
    heroTitle: "L'Afrique & l'IA — ",
    heroTitleAccent: "L'intelligence en action",
    heroDesc: "L'Afrique est au cœur de la prochaine étape de la croissance mondiale. Advisuract s'engage à faire partie de cette transformation — en apportant son expertise Data, IA et Digitale aux organisations et communautés du continent.",
    btnPartner: "Devenir Partenaire",
    btnSchool: "École des Données",
    stats: [
      { value: "54", label: "Pays" },
      { value: "1.4B+", label: "Habitants" },
      { value: "2030", label: "Horizon 2030" },
      { value: "5+", label: "Secteurs Clés" },
    ],
    focusTitle: "Nos Priorités en Afrique",
    focusSubtitle: "De 2025 à 2030, nous nous consacrons à générer un impact réel à travers tout le continent.",
    focuses: [
      {
        title: "Data & IA pour le Développement",
        desc: "Exploiter la donnée et l'intelligence artificielle pour accélérer le développement économique et le progrès social des nations africaines.",
      },
      {
        title: "Transformation Digitale",
        desc: "Accompagner les organisations et les gouvernements dans la construction d'infrastructures numériques modernes.",
      },
      {
        title: "Talents & Expertise Locale",
        desc: "Donner aux professionnels et chercheurs africains les moyens de mener la révolution de l'IA depuis l'intérieur du continent.",
      },
      {
        title: "Impact Sectoriel",
        desc: "Appliquer l'IA dans les industries clés — agriculture, énergie, santé et finance — pour créer de la valeur mesurable.",
      },
    ],
    missionTitle: "Notre Mission",
    missionDesc: "Passionnés par la science et animés par la volonté de créer un impact positif. Nous vous invitons à rejoindre notre aventure et à apporter votre expérience et votre vision.",
    ctaTitle: "Rejoignez l'Aventure",
    ctaDesc: "Faites partie du mouvement qui façonne l'avenir de la donnée et de l'IA en Afrique.",
    ctaBtn: "S'impliquer",
  }
};

export default function AfricaPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 pb-20">

      {/* HERO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-violet-600 text-sm font-bold uppercase tracking-[0.2em] mb-6"
        >
          {t.commitment}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 max-w-4xl text-black tracking-tighter leading-tight"
        >
          {t.heroTitle}<span className="text-violet-600">{t.heroTitleAccent}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-500 max-w-3xl leading-relaxed mb-12"
        >
          {t.heroDesc}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link href="/contact"
            className="bg-black text-white hover:bg-violet-600 px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95">
            {t.btnPartner}
          </Link>
          <Link href="/school-of-data"
            className="border border-zinc-200 text-zinc-900 hover:border-violet-600 hover:text-violet-600 px-8 py-4 rounded-full font-bold transition-all">
            {t.btnSchool}
          </Link>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {t.stats.map((s, i) => (
              <motion.div 
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-black text-violet-600 mb-2">{s.value}</p>
                <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black tracking-tight">{t.focusTitle}</h2>
          <p className="text-zinc-500 text-lg">{t.focusSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.focuses.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[32px] border border-zinc-100 bg-white hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-violet-600 transition-colors">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION BOX */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-violet-50 border border-violet-100 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 mb-8">{t.missionTitle}</h2>
          <p className="text-2xl md:text-3xl text-zinc-800 leading-tight font-medium italic max-w-4xl mx-auto">
            "{t.missionDesc}"
          </p>
        </motion.div>
      </section>

      {/* CTA BLOCK (Black contrast) */}
      <section className="py-24 px-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="max-w-6xl mx-auto bg-black rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600/20 to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t.ctaTitle}</h2>
          <p className="text-zinc-400 mb-12 max-w-2xl mx-auto text-xl">
            {t.ctaDesc}
          </p>
          <Link href="/careers"
            className="bg-white text-black hover:bg-violet-600 hover:text-white px-12 py-5 rounded-full font-black transition-all shadow-xl inline-flex items-center gap-3 group">
            {t.ctaBtn}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}