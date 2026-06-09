"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Scale, FileCheck, AlertCircle, Gavel, Lock, RefreshCw, Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";

const content = {
  en: {
    title: "Terms of Use",
    subtitle: "General conditions for using the Advisuract digital platform.",
    lastUpdated: "Last updated: June 2026",
    intro: "Please read these Terms of Use carefully before accessing or using any part of the Advisuract website or services. By using our platform, you confirm that you have read, understood, and agree to be bound by these terms. If you do not agree, please discontinue use immediately.",
    sections: [
      {
        icon: <FileCheck size={24} />,
        h: "1. Acceptance of Terms",
        p: "By accessing this website, you acknowledge that you are at least 18 years old and have the legal capacity to enter into a binding agreement. These terms apply to all visitors, clients, and partners who interact with Advisuract's digital platform. Continued use of the site following any modifications constitutes your acceptance of the revised terms."
      },
      {
        icon: <Scale size={24} />,
        h: "2. Intellectual Property",
        p: "All content published on this platform — including but not limited to text, AI-generated insights, data visualizations, methodologies, logos, graphics, and software — is the exclusive intellectual property of Advisuract or its licensors. Unauthorized reproduction, distribution, modification, or commercial use of any content without prior written consent is strictly prohibited and may result in legal action."
      },
      {
        icon: <Lock size={24} />,
        h: "3. Use of Services",
        p: "Our services are intended exclusively for legitimate professional and business purposes in the domains of Data, AI, and digital transformation. You agree not to use our platform to transmit harmful, misleading, or unlawful content; to attempt to gain unauthorized access to our systems; to scrape or harvest data without permission; or to engage in any activity that may disrupt or damage the integrity of our infrastructure."
      },
      {
        icon: <AlertCircle size={24} />,
        h: "4. Limitation of Liability",
        p: "Advisuract provides strategic consulting, AI prototyping, and technical advisory services. While we commit to the highest standards of quality and diligence, the application of our recommendations depends on factors outside our control. Advisuract shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services, insights, or digital tools, including but not limited to loss of revenue, data loss, or business interruption."
      },
      {
        icon: <RefreshCw size={24} />,
        h: "5. Modifications to Terms",
        p: "Advisuract reserves the right to update or modify these Terms of Use at any time without prior notice. Changes will be effective immediately upon publication on this page. The 'Last Updated' date at the top of this document will reflect the most recent revision. We encourage users to review this page periodically to stay informed of any updates."
      },
      {
        icon: <Globe size={24} />,
        h: "6. Third-Party Links",
        p: "Our platform may contain links to third-party websites or services for informational purposes. Advisuract has no control over the content, privacy practices, or availability of these external sites. The inclusion of any link does not imply endorsement or responsibility. We recommend reviewing the terms and privacy policies of any third-party sites you visit."
      },
      {
        icon: <Mail size={24} />,
        h: "7. Communications & Data",
        p: "By submitting a contact form or engaging with our platform, you consent to receive communications from Advisuract related to your inquiry or our services. We handle all personal data in accordance with our Privacy Policy and applicable data protection laws, including Moroccan Law 09-08 on the protection of personal data."
      },
      {
        icon: <Gavel size={24} />,
        h: "8. Governing Law & Jurisdiction",
        p: "These Terms of Use are governed by and construed in accordance with the laws of the Kingdom of Morocco. Any dispute, claim, or controversy arising out of or relating to these terms or the use of our platform shall be subject to the exclusive jurisdiction of the competent courts of Casablanca, Morocco, unless otherwise agreed upon in writing."
      }
    ],
    contactTitle: "Legal Inquiries",
    contactText: "For any questions, concerns, or formal notices regarding these Terms of Use, please contact our legal department. We aim to respond to all legal inquiries within 5 business days.",
    contactEmail: "legal@advisuract.com"
  },
  fr: {
    title: "Conditions d'Utilisation",
    subtitle: "Conditions générales d'utilisation de la plateforme digitale Advisuract.",
    lastUpdated: "Dernière mise à jour : Juin 2026",
    intro: "Veuillez lire attentivement ces Conditions d'Utilisation avant d'accéder à la plateforme Advisuract ou d'utiliser nos services. En utilisant notre site, vous confirmez avoir lu, compris et accepté d'être lié par ces conditions. Si vous n'êtes pas d'accord, veuillez cesser immédiatement toute utilisation.",
    sections: [
      {
        icon: <FileCheck size={24} />,
        h: "1. Acceptation des Conditions",
        p: "En accédant à ce site, vous reconnaissez avoir au moins 18 ans et la capacité juridique de conclure un accord contraignant. Ces conditions s'appliquent à tous les visiteurs, clients et partenaires qui interagissent avec la plateforme digitale d'Advisuract. L'utilisation continue du site après toute modification vaut acceptation des nouvelles conditions."
      },
      {
        icon: <Scale size={24} />,
        h: "2. Propriété Intellectuelle",
        p: "Tout le contenu publié sur cette plateforme — y compris les textes, analyses IA, visualisations de données, méthodologies, logos, graphismes et logiciels — est la propriété intellectuelle exclusive d'Advisuract ou de ses concédants. Toute reproduction, distribution, modification ou utilisation commerciale non autorisée est strictement interdite et peut faire l'objet de poursuites judiciaires."
      },
      {
        icon: <Lock size={24} />,
        h: "3. Utilisation des Services",
        p: "Nos services sont destinés exclusivement à des fins professionnelles légitimes dans les domaines de la Data, de l'IA et de la transformation digitale. Vous vous engagez à ne pas utiliser notre plateforme pour transmettre des contenus nuisibles ou illicites, accéder sans autorisation à nos systèmes, collecter des données sans permission, ou perturber l'intégrité de notre infrastructure."
      },
      {
        icon: <AlertCircle size={24} />,
        h: "4. Limitation de Responsabilité",
        p: "Advisuract fournit des services de conseil stratégique, de prototypage IA et d'accompagnement technique. Bien que nous nous engagions aux plus hauts standards de qualité, l'application de nos recommandations dépend de facteurs hors de notre contrôle. Advisuract ne pourra être tenu responsable de dommages directs, indirects ou consécutifs liés à l'utilisation de nos services, insights ou outils digitaux."
      },
      {
        icon: <RefreshCw size={24} />,
        h: "5. Modifications des Conditions",
        p: "Advisuract se réserve le droit de modifier ces Conditions d'Utilisation à tout moment sans préavis. Les modifications prennent effet dès leur publication sur cette page. La date de 'Dernière mise à jour' en haut de ce document reflète la révision la plus récente. Nous encourageons les utilisateurs à consulter cette page régulièrement."
      },
      {
        icon: <Globe size={24} />,
        h: "6. Liens vers des Tiers",
        p: "Notre plateforme peut contenir des liens vers des sites tiers à titre informatif. Advisuract n'est pas responsable du contenu, des pratiques de confidentialité ou de la disponibilité de ces sites externes. L'inclusion d'un lien ne constitue pas une approbation. Nous recommandons de consulter les conditions et politiques de confidentialité des sites tiers."
      },
      {
        icon: <Mail size={24} />,
        h: "7. Communications & Données",
        p: "En soumettant un formulaire de contact ou en interagissant avec notre plateforme, vous consentez à recevoir des communications d'Advisuract. Toutes les données personnelles sont traitées conformément à notre Politique de Confidentialité et aux lois applicables, notamment la Loi 09-08 marocaine relative à la protection des données personnelles."
      },
      {
        icon: <Gavel size={24} />,
        h: "8. Droit Applicable & Juridiction",
        p: "Ces Conditions d'Utilisation sont régies par le droit du Royaume du Maroc. Tout litige découlant de ces conditions ou de l'utilisation de notre plateforme sera soumis à la juridiction exclusive des tribunaux compétents de Casablanca, Maroc, sauf accord écrit contraire entre les parties."
      }
    ],
    contactTitle: "Questions Juridiques",
    contactText: "Pour toute question, réclamation ou notification formelle concernant ces Conditions d'Utilisation, veuillez contacter notre service juridique. Nous nous engageons à répondre à toutes les demandes juridiques dans un délai de 5 jours ouvrables.",
    contactEmail: "legal@advisuract.com"
  }
};

export default function TermsPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white text-black pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            {t.title}
          </h1>
          <p className="text-lg text-violet-600 font-medium mb-1">{t.subtitle}</p>
          <p className="text-gray-400 text-sm mb-8">{t.lastUpdated}</p>
          <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-violet-500 pl-4">
            {t.intro}
          </p>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {t.sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-200 transition-all group"
            >
              <div className="text-violet-600 mb-4 group-hover:scale-110 transition-transform inline-block">
                {item.icon}
              </div>
              <h2 className="text-lg font-bold text-black mb-3">{item.h}</h2>
              <p className="text-gray-500 leading-relaxed text-sm">{item.p}</p>
            </motion.div>
          ))}
        </div>

        {/* Legal Contact box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-12 rounded-3xl text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #8b5cf6 100%)" }}
        >
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 blur-3xl" />
          <h3 className="text-2xl font-bold text-white mb-4">{t.contactTitle}</h3>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed text-sm mb-6">{t.contactText}</p>
          <a
            href={`mailto:${t.contactEmail}`}
            className="inline-block px-8 py-3 bg-white text-violet-700 font-bold rounded-full text-sm hover:bg-violet-50 transition-colors"
          >
            {t.contactEmail}
          </a>
        </motion.div>

      </div>
    </main>
  );
}