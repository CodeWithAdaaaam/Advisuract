"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --- TRADUCTIONS ---
const content = {
  en: {
    heroTitle: "Advisuract Academy",
    heroTagline: "“Practical training in Data, AI & Digital Transformation.”",
    heroDesc: "The School of Data is a learning hub designed to help individuals and organizations develop the skills needed to thrive in the data-driven economy. We combine theory with real-world practice.",
    audienceTitle: "Our programs are built for",
    audienceItems: ["Students & Professionals", "Small Businesses & Startups", "Corporates"],
    packagesTitle: "Program Packages",
    packagesLink: "View Curriculum",
    packages: [
      { title: "Data Marketing & Growth", skills: "Google Analytics, SQL, Power BI, A/B Testing, Marketing Automation" },
      { title: "Data Product Management", skills: "Product Analytics, Agile, Data Storytelling, User Metrics" },
      { title: "Data Science & ML", skills: "Python, Scikit-learn, TensorFlow, Deep Learning, Computer Vision" },
      { title: "Data Engineering", skills: "SQL, Spark, Airflow, AWS/GCP, Docker, Warehousing" },
    ],
    ctaTitle: "Ready to define the future?",
    ctaBtn: "Apply Now"
  },
  fr: {
    heroTitle: "L'Académie Advisuract",
    heroTagline: "« Une formation pratique en Data, IA & Transformation Digitale. »",
    heroDesc: "L'École des Données est un centre d'apprentissage conçu pour aider les individus et les organisations à développer les compétences nécessaires pour prospérer dans l'économie de la donnée.",
    audienceTitle: "Nos programmes sont conçus pour",
    audienceItems: ["Étudiants & Professionnels", "Petites Entreprises & Startups", "Grandes Entreprises"],
    packagesTitle: "Programmes de Formation",
    packagesLink: "Voir le programme",
    packages: [
      { title: "Marketing Data & Croissance", skills: "Google Analytics, SQL, Power BI, A/B Testing, Automatisation Marketing" },
      { title: "Gestion de Produit Data", skills: "Analytique Produit, Agile, Storytelling de Données, Métriques Utilisateurs" },
      { title: "Data Science & ML", skills: "Python, Scikit-learn, TensorFlow, Deep Learning, Vision par Ordinateur" },
      { title: "Ingénierie de Données", skills: "SQL, Spark, Airflow, AWS/GCP, Docker, Entreposage" },
    ],
    ctaTitle: "Prêt à définir l'avenir ?",
    ctaBtn: "Postuler Maintenant"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function AcademyPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-violet-100 rounded-3xl flex items-center justify-center mx-auto mb-8 text-violet-600 shadow-sm"
        >
          <GraduationCap size={40} />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-black"
        >
          {t.heroTitle}
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-violet-600 font-bold italic mb-10"
        >
          {t.heroTagline}
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-500 leading-relaxed"
        >
          {t.heroDesc}
        </motion.p>
      </section>

      {/* --- TARGET AUDIENCE --- */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center text-black tracking-tight">{t.audienceTitle}</h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {t.audienceItems.map((target, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="p-10 rounded-[32px] border border-zinc-200 bg-white text-center group hover:shadow-xl hover:border-violet-200 transition-all duration-300"
              >
                <div className="mb-6 h-16 w-16 mx-auto rounded-2xl bg-violet-50 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                  <Users size={32} />
                </div>
                <div className="font-bold text-xl text-zinc-800">{target}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROGRAM PACKAGES --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">{t.packagesTitle}</h2>
          <div className="h-2 w-24 bg-violet-600 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] border border-zinc-100 bg-zinc-50 hover:bg-white hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-500 group"
            >
              <h3 className="text-2xl font-bold mb-6 text-zinc-900 group-hover:text-violet-600 transition-colors">
                {pkg.title}
              </h3>
              
              <div className="flex items-start gap-4 mb-8">
                <div className="mt-1 p-2 rounded-lg bg-violet-100 text-violet-600">
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold mb-2">Key skills</p>
                  <p className="text-zinc-600 text-sm leading-relaxed font-medium">{pkg.skills}</p>
                </div>
              </div>

              <button className="flex items-center gap-2 text-violet-600 font-bold text-sm hover:gap-4 transition-all">
                {t.packagesLink} <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 px-6 text-center">
        <motion.div 
          whileHover={{ y: -5 }}
          className="max-w-5xl mx-auto p-12 md:p-24 rounded-[60px] bg-black text-white relative overflow-hidden shadow-2xl"
        >
          {/* Décoration subtile sur le bloc noir */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight tracking-tight">
            {t.ctaTitle}
          </h2>
          
          <button className="bg-white text-black px-12 py-5 rounded-full font-black text-lg hover:bg-violet-600 hover:text-white transition-all shadow-lg active:scale-95">
            {t.ctaBtn}
          </button>
        </motion.div>
      </section>
    </main>
  );
}