"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { motion } from "framer-motion";
import { CheckCircle2, Microscope, Target, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { lang } = useLanguage();

  const industryEntry = industries[slug];
  if (!industryEntry) return notFound();

  const data = industryEntry[lang];

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 pb-20">
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-violet-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Industries {">"} {data.name}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight text-black tracking-tighter">
            {data.heroTitle}
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
            {data.heroIntro}
          </p>
        </motion.div>
        
        {/* Image Hero avec ombre douce au lieu de glow */}
        <div className="relative h-[500px] rounded-[40px] border border-zinc-100 overflow-hidden group shadow-2xl shadow-zinc-200">
          <Image 
            src={industryEntry.heroImage} 
            alt={data.name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* --- VISION SECTION --- */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black tracking-tight">Our Vision (2025–2030)</h2>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">{data.visionText}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.visionPoints?.map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="bg-violet-100 p-2 rounded-lg">
                    <Target className="text-violet-600" size={20} />
                  </div>
                  <span className="font-medium text-zinc-800">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- APPLICATIONS GRID --- */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-black tracking-tight">AI Applications in {data.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.applications?.map((app, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-2 rounded-[32px] bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all group"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-violet-600 transition-colors">{app.title}</h3>
                
                <div className="relative h-64 w-full rounded-2xl mb-8 overflow-hidden bg-zinc-100">
                  <Image 
                    src={app.image} 
                    alt={app.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                <p className="text-zinc-600 mb-8 leading-relaxed">{app.description}</p>
                
                <ul className="space-y-3">
                  {app.benefits?.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                      <CheckCircle2 size={18} className="text-violet-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- RESEARCH & INNOVATION --- */}
      <section className="py-24 bg-violet-50/50">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white w-20 h-20 rounded-3xl shadow-sm flex items-center justify-center mx-auto mb-8 text-violet-600">
            <Microscope size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-12 text-black tracking-tight">Research & Innovation</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {data.researchInterests?.map((item, i) => (
              <span key={i} className="px-8 py-3 rounded-full border border-zinc-200 bg-white text-zinc-800 font-semibold text-sm shadow-sm hover:border-violet-300 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 mb-6">Our Mission</h2>
          <p className="text-3xl md:text-4xl text-zinc-800 leading-tight font-medium mb-12 italic">
            "{data.missionText}"
          </p>
          <button className="group flex items-center gap-3 mx-auto bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-violet-600 transition-all shadow-lg hover:shadow-violet-200">
            {lang === 'en' ? `Explore the Future of Smart ${data.name}` : `Explorer l'avenir de l'${data.name} intelligent`}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
} 