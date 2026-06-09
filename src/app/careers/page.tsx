"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

// --- TRADUCTIONS ---
const content = {
  en: {
    heroTag: "Join Us",
    heroTitle: "Science with Impact",
    heroDesc: "Passionate about science and driven to create a positive impact. Join our journey and contribute your experience, insights, and vision.",
    statusSuccessTitle: "Application received ✓",
    statusSuccessDesc: "We'll review your profile and get back to you soon.",
    statusError: "Something went wrong. Please try again.",
    btnSubmit: "Submit Application",
    btnLoading: "Submitting...",
    sections: {
      personal: "Personal Details",
      professional: "Professional Background",
      motivation: "Motivation & Contribution",
      links: "Links & Portfolio",
      preferences: "Preferences",
    },
    fields: {
      fullName: "Full Name *",
      email: "Email *",
      phone: "Phone",
      country: "Country",
      city: "City",
      position: "Current Position",
      organization: "Organization",
      expertise: "Field of Expertise",
      experience: "Years of Experience",
      whyJoin: "Why do you want to join us? *",
      contribution: "How do you see yourself contributing?",
      inspiration: "What inspires you about our mission?",
      portfolio: "LinkedIn / Portfolio / Website",
      projects: "Previous Projects / Publications",
      collabType: "Collaboration Type",
      availability: "Availability / Start Date",
      consent: "I agree to share my information for collaboration and communication purposes.",
    },
    placeholders: {
      fullName: "Your full name",
      phone: "+212 XX XX XX XX",
      country: "Morocco",
      city: "Rabat",
      position: "Data Scientist",
      organization: "Your company / university",
      selectExpertise: "Select a field",
      selectCollab: "Select type",
      whyJoin: "Brief paragraph...",
      contribution: "Skills, ideas, collaboration goals...",
      inspiration: "Your inspiration...",
      availability: "Immediate / June 2025",
    },
    expertiseFields: [
      "AI & Machine Learning", "Data Science", "Data Engineering", "Business Intelligence",
      "Digital Marketing", "Finance", "Healthcare", "Energy", "Agriculture",
      "Engineering", "Business & Strategy", "Other"
    ],
    collaborationTypes: [
      "Research Collaboration", "Internship / Fellowship", 
      "Consulting or Partnership", "Event / Hackathon Participation"
    ]
  },
  fr: {
    heroTag: "Rejoignez-nous",
    heroTitle: "La Science avec Impact",
    heroDesc: "Passionné par la science et animé par la volonté de créer un impact positif ? Rejoignez notre aventure et apportez votre expérience, vos idées et votre vision.",
    statusSuccessTitle: "Candidature reçue ✓",
    statusSuccessDesc: "Nous allons examiner votre profil et vous contacterons prochainement.",
    statusError: "Une erreur est survenue. Veuillez réessayer.",
    btnSubmit: "Envoyer la candidature",
    btnLoading: "Envoi en cours...",
    sections: {
      personal: "Détails Personnels",
      professional: "Parcours Professionnel",
      motivation: "Motivation & Contribution",
      links: "Liens & Portfolio",
      preferences: "Préférences",
    },
    fields: {
      fullName: "Nom Complet *",
      email: "Email *",
      phone: "Téléphone",
      country: "Pays",
      city: "Ville",
      position: "Poste Actuel",
      organization: "Organisation",
      expertise: "Domaine d'Expertise",
      experience: "Années d'Expérience",
      whyJoin: "Pourquoi voulez-vous nous rejoindre ? *",
      contribution: "Comment voyez-vous votre contribution ?",
      inspiration: "Qu'est-ce qui vous inspire dans notre mission ?",
      portfolio: "LinkedIn / Portfolio / Site Web",
      projects: "Projets Précédents / Publications",
      collabType: "Type de Collaboration",
      availability: "Disponibilité / Date de début",
      consent: "J'accepte de partager mes informations à des fins de collaboration et de communication.",
    },
    placeholders: {
      fullName: "Votre nom complet",
      phone: "+212 XX XX XX XX",
      country: "Maroc",
      city: "Casablanca",
      position: "Data Scientist",
      organization: "Votre entreprise / université",
      selectExpertise: "Choisir un domaine",
      selectCollab: "Choisir un type",
      whyJoin: "Bref paragraphe...",
      contribution: "Compétences, idées, objectifs...",
      inspiration: "Votre inspiration...",
      availability: "Immédiat / Juin 2025",
    },
    expertiseFields: [
      "IA & Machine Learning", "Data Science", "Data Engineering", "Business Intelligence",
      "Marketing Digital", "Finance", "Santé", "Énergie", "Agriculture",
      "Ingénierie", "Business & Stratégie", "Autre"
    ],
    collaborationTypes: [
      "Collaboration de Recherche", "Stage / Fellowship", 
      "Consulting ou Partenariat", "Participation Événement / Hackathon"
    ]
  }
};

// --- TYPES ---
interface FormState {
  full_name: string; email: string; phone_number: string; location_country: string; location_city: string;
  current_position: string; organization: string; expertise_field: string; years_experience: string;
  motivation_why: string; motivation_contribution: string; motivation_inspiration: string;
  linkedin_portfolio: string; previous_projects: string; collaboration_type: string; availability: string;
  consent: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

export default function CareersPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  const [form, setForm] = useState<FormState>({
    full_name: "", email: "", phone_number: "", location_country: "", location_city: "",
    current_position: "", organization: "", expertise_field: "", years_experience: "",
    motivation_why: "", motivation_contribution: "", motivation_inspiration: "",
    linkedin_portfolio: "", previous_projects: "", collaboration_type: "", availability: "",
    consent: false,
  });
  
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target as HTMLInputElement;
    const val = target.type === "checkbox" ? target.checked : target.value;
    setForm({ ...form, [target.name]: val });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (!form.consent) return alert(lang === "en" ? "Please accept the consent." : "Veuillez accepter le consentement.");

  setStatus("loading");
  try {
    const res = await fetch("https://formspree.io/f/mbdeydrp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, years_experience: Number(form.years_experience) }),
    });
    if (res.ok) setStatus("success");
    else setStatus("error");
  } catch {
    setStatus("error");
  }
}

  // MISE À JOUR DES CLASSES POUR FOND BLANC
  const inputClass = "w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-500 transition-colors";
  const labelClass = "block text-sm font-semibold text-zinc-700 mb-2";

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 max-w-5xl mx-auto">
        <p className="text-violet-600 text-sm font-bold uppercase tracking-widest mb-4">{t.heroTag}</p>
        <h1 className="text-5xl font-black text-black mb-6 tracking-tight">{t.heroTitle}</h1>
        <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
          {t.heroDesc}
        </p>
      </section>

      <section className="pb-20 px-6 max-w-3xl mx-auto">
        {status === "success" ? (
          <div className="p-10 rounded-xl border border-violet-200 bg-violet-50 text-center">
            <h3 className="text-2xl font-bold mb-2 text-violet-900">{t.statusSuccessTitle}</h3>
            <p className="text-violet-700">{t.statusSuccessDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* 1. Personal */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-5 pb-2 border-b border-zinc-100">{t.sections.personal}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className={labelClass}>{t.fields.fullName}</label>
                  <input name="full_name" required value={form.full_name} onChange={handleChange} className={inputClass} placeholder={t.placeholders.fullName} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.email}</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="your@email.com" />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.phone}</label>
                  <input name="phone_number" value={form.phone_number} onChange={handleChange} className={inputClass} placeholder={t.placeholders.phone} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.country}</label>
                  <input name="location_country" value={form.location_country} onChange={handleChange} className={inputClass} placeholder={t.placeholders.country} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.city}</label>
                  <input name="location_city" value={form.location_city} onChange={handleChange} className={inputClass} placeholder={t.placeholders.city} />
                </div>
              </div>
            </div>

            {/* 2. Professional */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-5 pb-2 border-b border-zinc-100">{t.sections.professional}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.fields.position}</label>
                  <input name="current_position" value={form.current_position} onChange={handleChange} className={inputClass} placeholder={t.placeholders.position} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.organization}</label>
                  <input name="organization" value={form.organization} onChange={handleChange} className={inputClass} placeholder={t.placeholders.organization} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.expertise}</label>
                  <select name="expertise_field" value={form.expertise_field} onChange={handleChange} className={inputClass}>
                    <option value="" className="bg-white">{t.placeholders.selectExpertise}</option>
                    {t.expertiseFields.map((f) => (
                      <option key={f} value={f} className="bg-white">{f}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t.fields.experience}</label>
                  <input name="years_experience" type="number" min="0" value={form.years_experience} onChange={handleChange} className={inputClass} placeholder="3" />
                </div>
              </div>
            </div>

            {/* 3. Motivation */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-5 pb-2 border-b border-zinc-100">{t.sections.motivation}</h2>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>{t.fields.whyJoin}</label>
                  <textarea name="motivation_why" required value={form.motivation_why} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder={t.placeholders.whyJoin} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.contribution}</label>
                  <textarea name="motivation_contribution" value={form.motivation_contribution} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder={t.placeholders.contribution} />
                </div>
                <div>
                  <label className={labelClass}>{t.fields.inspiration}</label>
                  <textarea name="motivation_inspiration" value={form.motivation_inspiration} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder={t.placeholders.inspiration} />
                </div>
              </div>
            </div>

            {/* 4. Links */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-5 pb-2 border-b border-zinc-100">{t.sections.links}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className={labelClass}>{t.fields.portfolio}</label>
                  <input name="linkedin_portfolio" value={form.linkedin_portfolio} onChange={handleChange} className={inputClass} placeholder="https://linkedin.com/in/..." />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClass}>{t.fields.projects}</label>
                  <input name="previous_projects" value={form.previous_projects} onChange={handleChange} className={inputClass} placeholder="Links or description" />
                </div>
              </div>
            </div>

            {/* 5. Preferences */}
            <div>
              <h2 className="text-lg font-bold text-zinc-900 mb-5 pb-2 border-b border-zinc-100">{t.sections.preferences}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.fields.collabType}</label>
                  <select name="collaboration_type" value={form.collaboration_type} onChange={handleChange} className={inputClass}>
                    <option value="" className="bg-white">{t.placeholders.selectCollab}</option>
                    {t.collaborationTypes.map((c) => (
                      <option key={c} value={c} className="bg-white">{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t.fields.availability}</label>
                  <input name="availability" value={form.availability} onChange={handleChange} className={inputClass} placeholder={t.placeholders.availability} />
                </div>
              </div>
            </div>

            {/* 6. Consent */}
            <div className="flex items-start gap-3">
              <input type="checkbox" name="consent" checked={form.consent}
                onChange={handleChange}
                className="mt-1 accent-violet-600 w-4 h-4 cursor-pointer" />
              <label className="text-sm text-zinc-500">
                {t.fields.consent}
              </label>
            </div>

            <button type="submit" disabled={status === "loading"}
              className="w-full bg-violet-600 hover:bg-violet-700 disabled:opacity-50 px-8 py-4 rounded-lg font-bold text-white transition-colors shadow-lg shadow-violet-200">
              {status === "loading" ? t.btnLoading : t.btnSubmit}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center font-semibold">{t.statusError}</p>
            )}
          </form>
        )}
      </section>
    </main>
  );
}