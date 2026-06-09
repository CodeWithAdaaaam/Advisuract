"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const content = {
  en: {
    title: "Responsible AI",
    subtitle: "Our commitment to ethical, transparent, and human-centered artificial intelligence.",
    sections: [
      {
        title: "Our Principles",
        body: "We build AI systems grounded in fairness, accountability, and transparency. Every solution we deliver is designed to augment human judgment — not replace it.",
      },
      {
        title: "Bias & Fairness",
        body: "We actively audit our models for bias and work to ensure outputs are equitable across demographic groups. Fairness is not an afterthought — it is built into our development process from day one.",
      },
      {
        title: "Data Privacy",
        body: "We handle all client and user data with strict confidentiality. We comply with GDPR and applicable local regulations, and we never use client data to train models without explicit consent.",
      },
      {
        title: "Human Oversight",
        body: "All high-stakes AI decisions include a human review layer. We design systems where humans remain in control and can override, correct, or shut down automated processes at any time.",
      },
      {
        title: "Transparency",
        body: "We document our models, their limitations, and their intended use cases. Clients always know what their AI systems can and cannot do.",
      },
      {
        title: "Continuous Improvement",
        body: "Responsible AI is an ongoing commitment. We regularly review deployed systems, incorporate stakeholder feedback, and update our practices as the field evolves.",
      },
    ],
    cta: "Have questions about our AI ethics practices?",
    ctaButton: "Contact Us",
  },
  fr: {
    title: "IA Responsable",
    subtitle: "Notre engagement envers une intelligence artificielle éthique, transparente et centrée sur l'humain.",
    sections: [
      {
        title: "Nos Principes",
        body: "Nous construisons des systèmes IA fondés sur l'équité, la responsabilité et la transparence. Chaque solution que nous livrons est conçue pour augmenter le jugement humain — non le remplacer.",
      },
      {
        title: "Biais & Équité",
        body: "Nous auditons activement nos modèles pour détecter les biais et veillons à ce que les résultats soient équitables entre les groupes démographiques. L'équité est intégrée dès le premier jour.",
      },
      {
        title: "Confidentialité des Données",
        body: "Nous traitons toutes les données clients avec une stricte confidentialité. Nous respectons le RGPD et les réglementations locales applicables, et n'utilisons jamais les données clients pour entraîner des modèles sans consentement explicite.",
      },
      {
        title: "Supervision Humaine",
        body: "Toutes les décisions IA à fort enjeu incluent une couche de révision humaine. Nous concevons des systèmes où les humains restent maîtres et peuvent à tout moment corriger ou arrêter les processus automatisés.",
      },
      {
        title: "Transparence",
        body: "Nous documentons nos modèles, leurs limites et leurs cas d'usage prévus. Les clients savent toujours ce que leurs systèmes IA peuvent et ne peuvent pas faire.",
      },
      {
        title: "Amélioration Continue",
        body: "L'IA responsable est un engagement permanent. Nous révisons régulièrement les systèmes déployés, intégrons les retours des parties prenantes et mettons à jour nos pratiques à mesure que le domaine évolue.",
      },
    ],
    cta: "Des questions sur nos pratiques éthiques en matière d'IA ?",
    ctaButton: "Nous Contacter",
  },
};

export default function ResponsibleAI() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a0a0a] pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6"
          >
            {t.title.split(" ").map((word, i) =>
              i === t.title.split(" ").length - 1 ? (
                <span key={i} className="text-violet-400"> {word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col gap-12">
          {t.sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="border-t border-gray-100 pt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <h2 className="text-lg font-black text-black tracking-tight">{section.title}</h2>
              <p className="md:col-span-2 text-gray-500 leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-50 py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl font-bold text-black mb-6">{t.cta}</p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-sm hover:bg-violet-600 transition-all"
          >
            {t.ctaButton}
          </a>
        </motion.div>
      </section>
    </main>
  );
}