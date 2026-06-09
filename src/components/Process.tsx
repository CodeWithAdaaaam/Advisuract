"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const UNSPLASH_IMAGE = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

const defaultSteps = {
  en: [
    { id: 1, title: "Faster Decisions", description: "AI-powered dashboards that cut reporting time by up to 70%, giving your team real-time clarity." },
    { id: 2, title: "Reduced Costs", description: "Automating repetitive data tasks frees your team to focus on high-value strategic work." },
    { id: 3, title: "Scalable Systems", description: "Infrastructure built to grow with your business — no bottlenecks, no technical debt." },
    { id: 4, title: "Measurable ROI", description: "Every solution is tracked against clear KPIs so you always know the value delivered." },
  ],
  fr: [
    { id: 1, title: "Décisions Plus Rapides", description: "Des dashboards IA qui réduisent le temps de reporting jusqu'à 70%, avec une clarté en temps réel." },
    { id: 2, title: "Coûts Réduits", description: "L'automatisation des tâches répétitives libère votre équipe pour des missions à forte valeur ajoutée." },
    { id: 3, title: "Systèmes Scalables", description: "Une infrastructure conçue pour grandir avec votre business — sans goulots d'étranglement ni dette technique." },
    { id: 4, title: "ROI Mesurable", description: "Chaque solution est suivie avec des KPIs clairs pour que vous sachiez toujours la valeur livrée." },
  ],
};

export default function Process() {
  const { lang } = useLanguage();
  const steps = defaultSteps[lang];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}>

          {/* LEFT: Image card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "4/5" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={UNSPLASH_IMAGE}
              alt="Results & Impact"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
            }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, padding: "32px", maxWidth: "280px" }}>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>
                {lang === "en" ? "Real Business Impact" : "Impact Business Réel"}
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "20px" }}>
                {lang === "en"
                  ? "Tangible outcomes that transform how your business operates and competes."
                  : "Des résultats concrets qui transforment la façon dont votre entreprise opère et se différencie."}
              </p>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "44px", height: "44px", borderRadius: "50%",
                background: "#fff", color: "#000", fontSize: "1.1rem", textDecoration: "none",
              }}>→</a>
            </div>
          </motion.div>

          {/* RIGHT: Heading + Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <div>
              <h2 style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800,
                lineHeight: 1.15, color: "#0a0a0a", letterSpacing: "-0.02em", margin: 0,
              }}>
                {lang === "en" ? "What You" : "Ce que vous"}{" "}
                <span style={{ color: "#7c3aed" }}>
                  {lang === "en" ? "Actually Gain" : "Gagnez Vraiment"}
                </span>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
                >
                  <div style={{
                    flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%",
                    background: i === 0 ? "#7c3aed" : "#f3f0ff",
                    color: i === 0 ? "#fff" : "#7c3aed",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "0.9rem",
                  }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#0a0a0a", margin: "0 0 4px" }}>
                      {step.title}
                    </h3>
                    <p style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <a
                href="#contact"
                style={{
                  display: "inline-block", padding: "14px 32px",
                  background: "#0a0a0a", color: "#fff", borderRadius: "999px",
                  fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#7c3aed"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0a0a0a"; }} >
                {lang === "en" ? "Start Your Journey" : "Commencer"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}