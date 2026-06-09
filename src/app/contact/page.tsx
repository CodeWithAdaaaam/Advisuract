"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FORMSPREE_URL = "https://formspree.io/f/mojzwjaj";

const content = {
  en: {
    heroTitle: "Get in touch",
    heroDesc: "Passionate about science and driven to create a positive impact? Join our journey.",
    infoLabels: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationVal: "Casablanca / Global"
    },
    successTitle: "Thank you!",
    successDesc: "Your message has been sent. Our team will contact you soon.",
    form: {
      namePlaceholder: "Full Name*",
      emailPlaceholder: "Email Address*",
      collabPlaceholder: "Preferred Collaboration Type",
      collabOptions: [
        { val: "research", label: "Research Collaboration" },
        { val: "consulting", label: "Consulting" },
        { val: "internship", label: "Internship" }
      ],
      messagePlaceholder: "Tell us about your vision and how you'd like to contribute...",
      submitBtn: "Submit Application"
    }
  },
  fr: {
    heroTitle: "Contactez-nous",
    heroDesc: "Passionné par la science et animé par la volonté de créer un impact positif ? Rejoignez notre aventure.",
    infoLabels: {
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      locationVal: "Casablanca / International"
    },
    successTitle: "Merci !",
    successDesc: "Votre message a été envoyé. Notre équipe vous contactera bientôt.",
    form: {
      namePlaceholder: "Nom complet*",
      emailPlaceholder: "Adresse e-mail*",
      collabPlaceholder: "Type de collaboration souhaité",
      collabOptions: [
        { val: "research", label: "Collaboration de recherche" },
        { val: "consulting", label: "Conseil / Consulting" },
        { val: "internship", label: "Stage" }
      ],
      messagePlaceholder: "Parlez-nous de votre vision et de la manière dont vous aimeriez contribuer...",
      submitBtn: "Envoyer la demande"
    }
  }
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { lang } = useLanguage();
  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch(FORMSPREE_URL, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    setSubmitted(true);
    form.reset();
  };

  const inputClass = "w-full bg-zinc-50 border border-zinc-200 p-5 rounded-2xl outline-none focus:border-violet-600 focus:bg-white transition-all text-zinc-900 placeholder:text-zinc-400";

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="max-w-4xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-black"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-500 max-w-2xl leading-relaxed"
          >
            {t.heroDesc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

          <div className="space-y-12">
            <div className="flex gap-6 group">
              <div className="p-4 rounded-2xl bg-violet-50 text-violet-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-black">{t.infoLabels.email}</h4>
                <a href="mailto:info@advisuract.com" className="text-zinc-500 hover:text-violet-600 transition-colors">info@advisuract.com</a>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="p-4 rounded-2xl bg-violet-50 text-violet-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-black">{t.infoLabels.phone}</h4>
                <a href="tel:+21200000000" className="text-zinc-500 hover:text-violet-600 transition-colors">+212 XX XX XX XX</a>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="p-4 rounded-2xl bg-violet-50 text-violet-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-black">{t.infoLabels.location}</h4>
                <p className="text-zinc-500">{t.infoLabels.locationVal}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-12 rounded-[40px] bg-zinc-50 border border-zinc-100 text-center shadow-xl shadow-zinc-200/50"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
                    <Send className="text-violet-600" size={32} />
                  </motion.div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-black">{t.successTitle}</h2>
                <p className="text-zinc-500 text-lg mb-8">{t.successDesc}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-bold text-violet-600 hover:text-violet-800 transition-colors"
                >
                  {lang === "en" ? "Send another message" : "Envoyer un autre message"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder={t.form.namePlaceholder} required className={inputClass} />
                  <input type="email" name="email" placeholder={t.form.emailPlaceholder} required className={inputClass} />
                </div>

                <div className="relative">
                  <select name="collaboration" className={`${inputClass} appearance-none`} defaultValue="" required>
                    <option value="" disabled>{t.form.collabPlaceholder}</option>
                    {t.form.collabOptions.map(opt => (
                      <option key={opt.val} value={opt.val} className="text-black">{opt.label}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    <ChevronRight className="rotate-90" size={18} />
                  </div>
                </div>

                <textarea name="message" rows={5} placeholder={t.form.messagePlaceholder} required className={`${inputClass} resize-none`} />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-black text-white px-12 py-5 rounded-full font-black text-lg hover:bg-violet-600 transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-3 group disabled:opacity-60"
                >
                  {loading ? (lang === "en" ? "Sending..." : "Envoi...") : t.form.submitBtn}
                  <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}