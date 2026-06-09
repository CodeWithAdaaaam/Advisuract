"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const BLOB_BASE_URL = "https://nivqt5h77xnceedz.public.blob.vercel-storage.com/images/";

// --- TRADUCTIONS ET DONNÉES ---
const content = {
  en: {
    heading: "Our Expertise",
    subheading: "Driving transformation across industries",
    items: [
      { id: 1, title: 'Agriculture', image: 'agriculture.png' },
      { id: 2, title: 'Energy', image: 'Energy.png' },
      { id: 3, title: 'Business Intelligence', image: 'BI.png' },
      { id: 4, title: 'Finance', image: 'Finance.png' },
      { id: 5, title: 'Healthcare', image: 'Health.png' },
      { id: 6, title: 'Telecommunications', image: 'Telecom.png' },
      { id: 7, title: 'Manufacturing', image: 'manufacturing.png' },
      { id: 8, title: 'Gaming & Sports', image: 'Gaming.png' },
    ]
  },
  fr: {
    heading: "Notre Expertise",
    subheading: "Accélérer la transformation dans tous les secteurs",
    items: [
      { id: 1, title: 'Agriculture', image: 'agriculture.png' },
      { id: 2, title: 'Énergie', image: 'Energy.png' },
      { id: 3, title: 'Business Intelligence', image: 'BI.png' },
      { id: 4, title: 'Finance', image: 'Finance.png' },
      { id: 5, title: 'Santé', image: 'Health.png' },
      { id: 6, title: 'Télécommunications', image: 'Telecom.png' },
      { id: 7, title: 'Industrie', image: 'manufacturing.png' },
      { id: 8, title: 'Jeux & Sport', image: 'Gaming.png' },
    ]
  }
};

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang];
  
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const getGridClass = (index: number): string => {
    const patterns = [
      'md:col-span-2 md:row-span-1',
      'md:col-span-1 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-2',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
      'md:col-span-1 md:row-span-1',
    ];
    return patterns[index] || 'md:col-span-1 md:row-span-1';
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);
      if (targets.length > 0) {
        gsap.fromTo(targets,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* En-tête de section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter">
            {t.heading}
          </h2>
          <p className="mt-4 text-xl text-violet-600 font-bold italic">
            {t.subheading}
          </p>
        </div>

        {/* Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {t.items.map((service, i) => {
            const imageUrl = `${BLOB_BASE_URL}${service.image}`;

            return (
              <div
                key={service.id}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`relative rounded-[32px] overflow-hidden group cursor-pointer border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${getGridClass(i)}`}
              >
                <Image
                  src={imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Gradient pour la lisibilité sur l'image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-white font-bold text-2xl leading-tight">
                    {service.title}
                  </h3>
                  <div className="mt-4 h-1 w-0 bg-violet-500 group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}