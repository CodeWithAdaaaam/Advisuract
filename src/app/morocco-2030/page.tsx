"use client";

import React from "react";
import LinkNext from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, Lightbulb, GraduationCap, BarChart3, Users, Globe } from "lucide-react";

// --- TRADUCTIONS ---
const content = {
  en: {
    heroTag: "National Vision",
    heroTitle: "Morocco 2030 — ",
    heroAccent: "Intelligence in Action",
    heroDesc: "Morocco is positioning itself as a leading digital and AI hub. Advisuract is proud to contribute to this national vision — helping organizations, institutions, and individuals embrace Data & AI to build a stronger, smarter Morocco.",
    btnWork: "Work With Us",
    btnSchool: "School of Data",
    pillarsTitle: "Key Pillars",
    pillarsDesc: "The strategic axes driving Morocco's digital transformation toward 2030.",
    pillars: [
      { number: "01", title: "Digital Infrastructure", desc: "Building modern digital foundations to support a connected, data-driven Moroccan economy." },
      { number: "02", title: "AI & Innovation Ecosystem", desc: "Fostering a culture of innovation through AI research, startups, and technology adoption." },
      { number: "03", title: "Human Capital & Skills", desc: "Investing in education and upskilling to prepare Morocco's workforce for the digital economy." },
      { number: "04", title: "Sustainable Growth", desc: "Leveraging data and AI to support Morocco's green economy goals and development objectives." },
      { number: "05", title: "Industry Transformation", desc: "Accelerating digital transformation in key sectors: agriculture, energy, finance, and health." },
      { number: "06", title: "Global Positioning", desc: "Establishing Morocco as a leading AI and Data hub connecting Africa and Europe." },
    ],
    contribTitle: "How Advisuract Contributes",
    contribDesc: "Our role in accelerating Morocco's journey toward 2030.",
    contributions: [
      { title: "Strategy & Consulting", desc: "Helping organizations align with Morocco 2030 objectives through clear Data & AI roadmaps." },
      { title: "School of Data", desc: "Training the next generation of Moroccan data and AI professionals." },
      { title: "Industry Use Cases", desc: "Showcasing real-world AI applications across Morocco's key economic sectors." },
      { title: "Partnerships", desc: "Connecting Moroccan organizations with global expertise and innovation networks." },
    ],
    missionTitle: "Our Commitment to Morocco",
    missionDesc: "From 2025 to 2030, Advisuract is dedicated to turning Data & AI into a competitive advantage for Moroccan organizations — driving growth, innovation, and sustainable impact across every sector.",
    ctaTitle: "Be Part of Morocco 2030",
    ctaDesc: "Whether you are an organization, a startup, or a professional — join us in building Morocco's data-driven future.",
    ctaBtnContact: "Contact Us",
    ctaBtnTeam: "Join Our Team",
  },
  fr: {
    heroTag: "Vision Nationale",
    heroTitle: "Maroc 2030 — ",
    heroAccent: "L'intelligence en action",
    heroDesc: "Le Maroc se positionne comme un hub technologique et d'IA de premier plan. Advisuract est fier de contribuer à cette vision nationale — en aidant les organisations et les citoyens à adopter la Data et l'IA.",
    btnWork: "Travailler avec nous",
    btnSchool: "École des Données",
    pillarsTitle: "Piliers Stratégiques",
    pillarsDesc: "Les axes clés qui pilotent la transformation digitale du Maroc à l'horizon 2030.",
    pillars: [
      { number: "01", title: "Infrastructure Numérique", desc: "Bâtir des fondations numériques modernes pour soutenir une économie marocaine connectée." },
      { number: "02", title: "Écosystème d'Innovation", desc: "Favoriser une culture de l'innovation via la recherche en IA et le soutien aux startups." },
      { number: "03", title: "Capital Humain & Talents", desc: "Investir dans l'éducation pour préparer la force de travail marocaine à l'économie de demain." },
      { number: "04", title: "Croissance Durable", desc: "Exploiter la donnée et l'IA pour soutenir les objectifs d'économie verte du Royaume." },
      { number: "05", title: "Transformation Industrielle", desc: "Accélérer la digitalisation des secteurs clés : agriculture, énergie, finance et santé." },
      { number: "06", title: "Positionnement Mondial", desc: "Établir le Maroc comme un hub majeur de l'IA reliant l'Afrique et l'Europe." },
    ],
    contribTitle: "La contribution d'Advisuract",
    contribDesc: "Notre rôle dans l'accélération de la trajectoire du Maroc vers 2030.",
    contributions: [
      { title: "Stratégie & Conseil", desc: "Aider les organisations à s'aligner sur 2030 avec des feuilles de route Data & IA claires." },
      { title: "École des Données", desc: "Former la prochaine génération de professionnels marocains de la data et de l'IA." },
      { title: "Cas d'Usage Sectoriels", desc: "Déployer des applications réelles de l'IA dans les secteurs économiques clés du pays." },
      { title: "Partenariats", desc: "Connecter les entreprises marocaines aux réseaux mondiaux d'innovation." },
    ],
    missionTitle: "Notre engagement pour le Maroc",
    missionDesc: "De 2025 à 2030, Advisuract se consacre à transformer la Data & l'IA en avantage compétitif pour les entreprises marocaines — stimulant la croissance et l'innovation.",
    ctaTitle: "Participez au Maroc 2030",
    ctaDesc: "Que vous soyez une institution, une startup ou un professionnel — rejoignez-nous pour bâtir l'avenir du Maroc.",
    ctaBtnContact: "Contactez-nous",
    ctaBtnTeam: "Rejoindre l'équipe",
  }
};

export default function Morocco2030Page() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 pb-20">

      {/* --- HERO --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-violet-600 text-sm font-bold uppercase tracking-[0.2em] mb-6"
        >
          {t.heroTag}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 max-w-4xl text-black tracking-tighter leading-tight"
        >
          {t.heroTitle}<span className="text-violet-600">{t.heroAccent}</span>
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
          <LinkNext href="/contact"
            className="bg-black text-white hover:bg-violet-600 px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95">
            {t.btnWork}
          </LinkNext>
          <LinkNext href="/school-of-data"
            className="border border-zinc-200 text-zinc-900 hover:border-violet-600 hover:text-violet-600 px-8 py-4 rounded-full font-bold transition-all">
            {t.btnSchool}
          </LinkNext>
        </motion.div>
      </section>

      {/* --- PILLARS --- */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-black tracking-tight">{t.pillarsTitle}</h2>
            <p className="text-zinc-500 text-lg mt-2">{t.pillarsDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.pillars.map((p, i) => (
              <motion.div 
                key={p.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[32px] border border-zinc-200 bg-white hover:shadow-xl hover:border-violet-200 transition-all duration-300 group"
              >
                <span className="text-violet-600 font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">{p.number}</span>
                <h3 className="text-xl font-bold mt-4 mb-4 text-black group-hover:text-violet-600 transition-colors">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW WE CONTRIBUTE --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black tracking-tight">{t.contribTitle}</h2>
          <p className="text-zinc-500 text-lg mt-2">{t.contribDesc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {t.contributions.map((c, i) => (
            <motion.div 
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-lg transition-all flex gap-6 items-start"
            >
              <div className="bg-white p-3 rounded-2xl shadow-sm text-violet-600">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">{c.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MISSION BOX --- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-violet-50 border border-violet-100 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 mb-8">{t.missionTitle}</h2>
          <p className="text-2xl md:text-3xl text-zinc-800 leading-tight font-medium italic max-w-4xl mx-auto">
            "{t.missionDesc}"
          </p>
        </motion.div>
      </section>

      {/* --- FINAL CTA --- */}
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
          <div className="flex flex-wrap gap-6 justify-center">
            <LinkNext href="/contact"
              className="bg-white text-black hover:bg-violet-600 hover:text-white px-10 py-4 rounded-full font-black transition-all shadow-xl">
              {t.ctaBtnContact}
            </LinkNext>
            <LinkNext href="/careers"
              className="border border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-full font-black transition-all">
              {t.ctaBtnTeam}
            </LinkNext>
          </div>
        </motion.div>
      </section>

    </main>
  );
}