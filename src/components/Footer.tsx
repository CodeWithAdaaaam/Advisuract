"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const { lang } = useLanguage();

  const socials: { icon: React.ReactNode; href: string }[] = [
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">

          <div className="col-span-2 md:col-span-2 flex flex-col items-start">
            <Link href="/">
              <img src="/logo.png" alt="Advisuract" className="h-36 w-auto mb-6" />
            </Link>
            <p className="text-white font-black text-5xl md:text-5xl leading-none tracking-tighter">Advisuract</p>
            <p className="text-violet-400 text-xl md:text-xl font-bold mt-3 tracking-tight">Intelligence in Action</p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">
              {lang === "en" ? "Company" : "Entreprise"}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">{lang === "en" ? "About Us" : "À Propos"}</Link></li>
              <li><Link href="/about#approach" className="hover:text-white transition-colors">{lang === "en" ? "Our Approach" : "Notre Approche"}</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">{lang === "en" ? "Industries" : "Secteurs"}</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">{lang === "en" ? "Careers" : "Carrières"}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">
              {lang === "en" ? "Services" : "Services"}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services/transformation-strategy" className="hover:text-white transition-colors">{lang === "en" ? "Strategy" : "Stratégie"}</Link></li>
              <li><Link href="/services/ai-innovation" className="hover:text-white transition-colors">{lang === "en" ? "AI & Innovation" : "IA & Innovation"}</Link></li>
              <li><Link href="/services/marketing-data-digital" className="hover:text-white transition-colors">{lang === "en" ? "Marketing" : "Marketing"}</Link></li>
              <li><Link href="/services/it-platforms" className="hover:text-white transition-colors">{lang === "en" ? "IT & Platforms" : "IT & Plateformes"}</Link></li>
              <li><Link href="/services/data-analytics" className="hover:text-white transition-colors">{lang === "en" ? "Data & Analytics" : "Data & Analytique"}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">
              {lang === "en" ? "Resources" : "Ressources"}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/school-of-data" className="hover:text-white transition-colors">{lang === "en" ? "School of Data" : "École de la Data"}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">
              {lang === "en" ? "Contact" : "Contact"}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="break-all">
  <a href="mailto:info@advisuract.com" className="hover:text-white transition-colors">
    📧 info@advisuract.com
  </a>
</li>
<li>
  <a href="tel:+212767956871" className="hover:text-white transition-colors">
    📞 +212 767-956871
  </a>
</li>
            </ul>
            <div className="mt-8 flex gap-4">
              {socials.map((s, i) => (
                <a key={i} href={s.href}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:border-violet-500 hover:text-violet-400 transition-all hover:scale-110 text-base">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest text-gray-600">
          <p>© 2026 Advisuract. {lang === "en" ? "All rights reserved." : "Tous droits réservés."}</p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">{lang === "en" ? "Privacy Policy" : "Politique de Confidentialité"}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{lang === "en" ? "Terms of Use" : "Conditions d'Utilisation"}</Link>
            <Link href="/responsible-ai" className="hover:text-white transition-colors">{lang === "en" ? "Responsible AI" : "IA Responsable"}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}