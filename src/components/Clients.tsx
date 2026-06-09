"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

// --- TRADUCTIONS ---

const content = {
  en: {
    tagline: "Trusted by 100+ Clients and 20 Companies worldwide",
  },
  fr: {
    tagline: "Plus de 100 clients et 20 entreprises nous font confiance",
  }
};

interface Client {
  name: string;
  text: string;
  icon: React.ReactNode;
}

export default function Clients() {
  const { lang } = useLanguage();
  const t = content[lang];

  const clients: Client[] = [
    { 
      name: 'starsup', 
      text: 'starsup',
      icon: <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    },
    { 
      name: 'PAYSCALE', 
      text: 'PAYSCALE',
      icon: (
        <>
          <rect x="2" y="6" width="6" height="12" rx="1" />
          <rect x="10" y="10" width="6" height="8" rx="1" />
          <rect x="18" y="4" width="4" height="14" rx="1" />
        </>
      )
    },
    { 
      name: 'TEAMTALK', 
      text: 'TEAMTALK',
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    },
    { 
      name: 'BestBank', 
      text: 'BestBank',
      icon: <path d="M12 2L2 9h20L12 2zm0 3.5L17.5 8h-11L12 5.5zM4 10v10h4v-6h8v6h4V10H4z" />
    },
    { 
      name: 'overtlays', 
      text: 'overtlays',
      icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Tagline Traduite */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm font-medium text-zinc-400 mb-12 uppercase tracking-[0.2em]"
        >
          {t.tagline}
        </motion.p>

        {/* Grille des Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-zinc-400 hover:text-black grayscale hover:grayscale-0 transition-all duration-500 cursor-default group"
            >
              <svg 
                className="w-6 h-6 fill-current transition-transform group-hover:scale-110" 
                viewBox="0 0 24 24"
              >
                {client.icon}
              </svg>
              <span className="font-bold text-lg md:text-xl tracking-tighter uppercase">
                {client.text}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}