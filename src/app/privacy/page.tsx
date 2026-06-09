"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Database, 
  UserCheck, 
  Lock, 
  Cookie, 
  Scale, 
  History,
  ChevronRight
} from "lucide-react";

// --- TRADUCTIONS ---
const content = {
  en: {
    title: "Privacy Policy",
    subtitle: "How Advisuract collects, uses, and protects your personal data.",
    lastUpdated: "Last updated: June 2026",
    sections: [
      {
        icon: <UserCheck size={20} />,
        title: "1. Who We Are",
        text: "Advisuract is a Data & AI consulting firm headquartered in Rabat, Morocco. We help organizations unlock the value of their data through strategic consulting and digital transformation."
      },
      {
        icon: <Database size={20} />,
        title: "2. Data We Collect",
        text: "We collect information you provide directly (name, email via forms), professional details (company, job title), and usage data via analytics tools."
      },
      {
        icon: <ShieldCheck size={20} />,
        title: "3. How We Use Your Data",
        text: "Your data is used strictly to respond to inquiries, provide services, and improve user experience. We never sell or rent your personal information."
      },
      {
        icon: <Scale size={20} />,
        title: "4. Legal Basis",
        text: "We process data based on your explicit consent, our legitimate interest in improving services, and contractual necessity."
      },
      {
        icon: <History size={20} />,
        title: "5. Data Retention",
        text: "Personal data is kept only as long as necessary. Contact form data is retained for a maximum of 24 months."
      },
      {
        icon: <Cookie size={20} />,
        title: "6. Cookies",
        text: "We use cookies to analyze traffic and site performance. You can manage your preferences in your browser settings."
      }
    ],
    rightsTitle: "Your Rights",
    rightsText: "You have the right to access, rectify, or delete your data. To exercise these rights, contact us at:",
    contactEmail: "contact@advisuract.com"
  },
  fr: {
    title: "Politique de Confidentialité",
    subtitle: "Comment Advisuract collecte, utilise et protège vos données personnelles.",
    lastUpdated: "Dernière mise à jour : Juin 2026",
    sections: [
      {
        icon: <UserCheck size={20} />,
        title: "1. Qui sommes-nous ?",
        text: "Advisuract est un cabinet de conseil en Data & IA basé à Rabat, au Maroc. Nous aidons les organisations à valoriser leurs données via le conseil stratégique."
      },
      {
        icon: <Database size={20} />,
        title: "2. Données collectées",
        text: "Nous collectons les informations fournies directement (nom, email via formulaires), les détails professionnels et les données d'utilisation."
      },
      {
        icon: <ShieldCheck size={20} />,
        title: "3. Utilisation des données",
        text: "Vos données sont strictement utilisées pour répondre à vos demandes, fournir nos services et améliorer l'expérience utilisateur."
      },
      {
        icon: <Scale size={20} />,
        title: "4. Base légale",
        text: "Le traitement est fondé sur votre consentement explicite, notre intérêt légitime et la nécessité contractuelle pour nos clients."
      },
      {
        icon: <History size={20} />,
        title: "5. Rétention des données",
        text: "Les données personnelles sont conservées uniquement le temps nécessaire. Les données des formulaires sont gardées au maximum 24 mois."
      },
      {
        icon: <Cookie size={20} />,
        title: "6. Cookies",
        text: "Nous utilisons des cookies pour analyser le trafic. Vous pouvez les désactiver via les paramètres de votre navigateur."
      }
    ],
    rightsTitle: "Vos Droits",
    rightsText: "Vous disposez d'un droit d'accès, de rectification ou de suppression. Pour exercer ces droits, contactez-nous à :",
    contactEmail: "contact@advisuract.com"
  }
};

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-violet-600 font-bold text-sm uppercase tracking-widest mb-4"
          >
            <Lock size={16} /> {lang === 'en' ? 'Security & Trust' : 'Sécurité & Confiance'}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-black"
          >
            {t.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <p className="text-xl text-zinc-500 max-w-2xl">{t.subtitle}</p>
            <div className="text-sm font-medium text-zinc-400 bg-zinc-100 px-4 py-2 rounded-full w-fit">
              {t.lastUpdated}
            </div>
          </motion.div>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {t.sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
            >
              <div className="mb-5 p-3 w-fit rounded-2xl bg-white shadow-sm text-violet-600 group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <h2 className="text-lg font-bold mb-3 text-zinc-900">{section.title}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- FINAL CONTACT SECTION --- */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 rounded-[40px] bg-violet-600 text-white relative overflow-hidden shadow-2xl shadow-violet-500/20"
        >
          {/* Décoration abstraite */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.rightsTitle}</h2>
            <p className="text-violet-100 mb-10 text-lg">
              {t.rightsText}
            </p>
            
            <a 
              href={`mailto:${t.contactEmail}`}
              className="group flex items-center gap-4 text-2xl md:text-4xl font-black hover:text-violet-200 transition-colors"
            >
              {t.contactEmail}
              <ChevronRight className="group-hover:translate-x-2 transition-transform" size={32} />
            </a>
            
            <div className="mt-12 pt-8 border-t border-white/20 w-full text-xs uppercase tracking-widest text-violet-200">
              Advisuract Legal Department • Casablanca / Rabat
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}