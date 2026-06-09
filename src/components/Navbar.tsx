"use client";

import React, { useState } from "react";
import { ArrowUpRight, Menu, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// --- TYPES ---

interface MenuItem {
  label: string;
  slug: string;
}

interface LanguageContent {
  industries: string;
  offers: string;
  schoolOfData: string;
  africa: string;
  morocco2030: string;
  careers: string;
  contact: string;
  industryList: MenuItem[];
  offerList: MenuItem[];
}

type Locale = "en" | "fr";

const t: Record<Locale, LanguageContent> = {
  en: {
    industries: "Industries",
    offers: "Offers",
    schoolOfData: "School of Data",
    africa: "Africa",
    morocco2030: "Morocco 2030",
    careers: "Careers",
    contact: "Contact Us",
    industryList: [
      { label: "Agriculture", slug: "agriculture" },
      { label: "Energy", slug: "energy" },
      { label: "Business Intelligence", slug: "business-intelligence" },
      { label: "Healthcare & Pharmaceuticals", slug: "healthcare-pharmaceuticals" },
      { label: "Telecommunications", slug: "telecommunications" },
      { label: "Manufacturing", slug: "manufacturing" },
      { label: "Entertainment, Gaming & Sports", slug: "entertainment-gaming-sports" },
      { label: "Finance", slug: "finance" },
    ],
    offerList: [
      { label: "Transformation & Strategy", slug: "transformation-strategy" },
      { label: "AI & Innovation", slug: "ai-innovation" },
      { label: "Data & Analytics", slug: "data-analytics" },
      { label: "IT & Platforms", slug: "it-platforms" },
      { label: "Marketing Data & Digital", slug: "marketing-data-digital" },
    ],
  },
  fr: {
    industries: "Industries",
    offers: "Offres",
    schoolOfData: "École des Données",
    africa: "Afrique",
    morocco2030: "Maroc 2030",
    careers: "Carrières",
    contact: "Contactez-nous",
    industryList: [
      { label: "Agriculture", slug: "agriculture" },
      { label: "Énergie", slug: "energy" },
      { label: "Business Intelligence", slug: "business-intelligence" },
      { label: "Santé & Pharmacie", slug: "healthcare-pharmaceuticals" },
      { label: "Télécommunications", slug: "telecommunications" },
      { label: "Industrie & Manufacturing", slug: "manufacturing" },
      { label: "Entertainment, Gaming & Sports", slug: "entertainment-gaming-sports" },
      { label: "Finance", slug: "finance" },
    ],
    offerList: [
      { label: "Transformation & Stratégie", slug: "transformation-strategy" },
      { label: "IA & Innovation", slug: "ai-innovation" },
      { label: "Data & Analytics", slug: "data-analytics" },
      { label: "IT & Plateformes", slug: "it-platforms" },
      { label: "Marketing Data & Digital", slug: "marketing-data-digital" },
    ],
  },
};

// --- COMPOSANTS INTERNES ---

interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

function DropdownMenu({ label, children }: DropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-white transition-colors py-2">
        {label}
        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
      </button>
      <div className="absolute top-full left-0 min-w-56 bg-black/95 backdrop-blur-md border border-white/10 rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

// --- COMPOSANT PRINCIPAL ---

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  // Utilisation du context global
  const { lang, toggleLang } = useLanguage();
  const l = t[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 lg:px-12 bg-black/20 backdrop-blur-sm border-b border-white/5">

      {/* Logo avec favicon (2).png */}
      <Link href="/" className="flex items-center gap-3 group z-[110]">
        <div className="relative h-10 w-10 flex items-center justify-center">
          <Image 
            src="/logo.png" 
            alt="Advisuract Logo" 
            width={40} 
            height={40} 
            className="object-contain group-hover:scale-110 transition-transform"
          />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">ADVISURACT</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
        <DropdownMenu label={l.industries}>
          {l.industryList.map((item) => (
            <Link key={item.slug} href={`/industries/${item.slug}`}
              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              {item.label}
            </Link>
          ))}
        </DropdownMenu>

        <DropdownMenu label={l.offers}>
          {l.offerList.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}
              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              {s.label}
            </Link>
          ))}
        </DropdownMenu>

        <Link href="/school-of-data" className="hover:text-white transition-colors">{l.schoolOfData}</Link>
        <Link href="/africa" className="hover:text-white transition-colors">{l.africa}</Link>
        <Link href="/morocco-2030" className="hover:text-white transition-colors">{l.morocco2030}</Link>
        <Link href="/careers" className="hover:text-white transition-colors">{l.careers}</Link>
      </div>

      {/* Desktop Actions (Bouton Langue + Contact) */}
      <div className="hidden md:flex items-center gap-3">
        <button 
          onClick={toggleLang}
          className="text-xs font-bold text-white/70 hover:text-white border border-white/20 px-3 py-1.5 rounded-full transition-colors bg-white/5">
          {lang === "en" ? "FR" : "EN"}
        </button>
        <Link href="/contact"
          className="border border-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-all flex items-center gap-2 text-white bg-white/5">
          {l.contact} <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Mobile Burger / Actions */}
      <div className="md:hidden flex items-center gap-3 z-[110]">
        <button 
          onClick={toggleLang}
          className="text-xs font-bold text-white/70 border border-white/20 px-3 py-1 rounded-full bg-white/5">
          {lang === "en" ? "FR" : "EN"}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-xl z-[100] md:hidden pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            
            {/* Industries Mobile */}
            <div>
              <button onClick={() => setOpenSection(openSection === "industries" ? null : "industries")}
                className="flex items-center justify-between w-full text-white text-lg font-semibold py-2 border-b border-white/5">
                {l.industries} <ChevronDown size={18} className={openSection === "industries" ? "rotate-180" : ""} />
              </button>
              {openSection === "industries" && (
                <div className="mt-2 space-y-2 pl-4 border-l border-violet-500/30">
                  {l.industryList.map((item) => (
                    <Link key={item.slug} href={`/industries/${item.slug}`}
                      className="block text-gray-400 hover:text-white py-2"
                      onClick={() => setMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Offers Mobile */}
            <div>
              <button onClick={() => setOpenSection(openSection === "offers" ? null : "offers")}
                className="flex items-center justify-between w-full text-white text-lg font-semibold py-2 border-b border-white/5">
                {l.offers} <ChevronDown size={18} className={openSection === "offers" ? "rotate-180" : ""} />
              </button>
              {openSection === "offers" && (
                <div className="mt-2 space-y-2 pl-4 border-l border-violet-500/30">
                  {l.offerList.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="block text-gray-400 hover:text-white py-2"
                      onClick={() => setMenuOpen(false)}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/school-of-data" className="text-white text-lg font-semibold py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>{l.schoolOfData}</Link>
            <Link href="/africa" className="text-white text-lg font-semibold py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>{l.africa}</Link>
            <Link href="/morocco-2030" className="text-white text-lg font-semibold py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>{l.morocco2030}</Link>
            <Link href="/careers" className="text-white text-lg font-semibold py-2 border-b border-white/5" onClick={() => setMenuOpen(false)}>{l.careers}</Link>

            <Link href="/contact"
              className="mt-6 bg-violet-600 text-white font-bold py-4 rounded-xl text-center shadow-lg"
              onClick={() => setMenuOpen(false)}>
              {l.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}