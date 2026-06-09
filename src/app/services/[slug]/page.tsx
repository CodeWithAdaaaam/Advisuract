"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { offers } from "@/data/offers";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function OfferPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang } = useLanguage();

  // On récupère l'entrée globale (qui contient le slug et l'image)
  const offerEntry = offers[slug];

  if (!offerEntry) return notFound();

  // On extrait les données selon la langue (en ou fr)
  const data = offerEntry[lang];

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32">
      
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 py-20 border-b border-zinc-100">
        <div className="max-w-5xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-violet-600 font-bold tracking-tighter uppercase text-sm mb-6 block"
          >
            {lang === 'en' ? 'Offers' : 'Offres'} {">"} {data.title}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-12 leading-[1.1] text-black tracking-tighter"
          >
            {data.heroTitle}
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.highlights.map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-zinc-500 text-sm font-medium"
              >
                <CheckCircle2 className="text-violet-600 shrink-0" size={20} />
                <span>{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMAGE & VALUE PROP --- */}
      <section className="py-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-black tracking-tight">{data.valuePropTitle}</h2>
          <p className="text-xl text-zinc-600 leading-relaxed mb-10">{data.valuePropText}</p>
          
          <div className="p-10 rounded-[32px] bg-violet-50 border border-violet-100 shadow-sm">
            <h3 className="text-violet-600 font-bold uppercase text-xs tracking-widest mb-4">
              {data.deliverTitle}
            </h3>
            <div className="text-3xl font-black mb-4 text-black">{data.deliverKeywords}</div>
            <p className="text-zinc-600 font-medium italic">{data.deliverText}</p>
          </div>
        </motion.div>
        
        {/* IMAGE DU SERVICE DEPUIS VERCEL BLOB */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-100"
        >
          <Image 
            src={offerEntry.image} 
            alt={data.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </section>

      {/* --- SERVICES CATALOG --- */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-black tracking-tight">
            {lang === 'en' ? 'Our Services' : 'Nos Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[32px] border border-zinc-200 bg-white shadow-sm hover:shadow-xl hover:border-violet-300 transition-all group"
              >
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-violet-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- APPROACH (PILLS) --- */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16 text-black">
          {lang === 'en' ? 'Our Approach' : 'Notre Approche'}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {data.approach.map((step, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-zinc-200">
                {step}
              </div>
              {i < data.approach.length - 1 && (
                <ArrowRight className="text-zinc-300 hidden md:block" size={24} />
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl rounded-[60px] bg-black p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
          {/* Décoration violette subtile */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-[100px]" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
            {lang === 'en' ? 'Ready to transform?' : 'Prêt pour la transformation ?'}
          </h2>
          <button className="bg-white text-black px-12 py-5 rounded-full font-extrabold text-lg hover:bg-violet-600 hover:text-white transition-all duration-300 active:scale-95 shadow-xl">
            {lang === 'en' ? 'Book a Strategy Call' : 'Réserver un appel stratégique'}
          </button>
        </div>
      </section>
    </main>
  );
}