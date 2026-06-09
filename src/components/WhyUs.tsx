"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const stats = {
  en: [
    { value: "100+", label: "PROJECTS DELIVERED" },
    { value: "50+", label: "HAPPY CLIENTS" },
    { value: "20+", label: "DEVELOPMENT STAFF" },
    { value: "3+", label: "YEAR'S EXPERIENCE" },
  ],
  fr: [
    { value: "100+", label: "PROJETS LIVRÉS" },
    { value: "50+", label: "CLIENTS SATISFAITS" },
    { value: "20+", label: "DÉVELOPPEURS" },
    { value: "3+", label: "ANS D'EXPÉRIENCE" },
  ],
};

const descriptions = {
  en: "We are a team of AI and marketing experts committed to leveraging the latest advancements in artificial intelligence to help businesses succeed. With our suite of AI-powered services, we aim to streamline operations, optimize processes and boost ROI for our clients.",
  fr: "Nous sommes une équipe d'experts en IA et en marketing, engagés à exploiter les dernières avancées de l'intelligence artificielle pour aider les entreprises à réussir. Avec notre suite de services alimentés par l'IA, nous visons à rationaliser les opérations et booster le ROI de nos clients.",
};

export default function WhyUs() {
  const { lang } = useLanguage();
  const currentStats = stats[lang];
  const description = descriptions[lang];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(135deg, #7c5cbf 0%, #6a47b8 40%, #8b5cf6 100%)",
            borderRadius: "24px",
            padding: "56px 64px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle radial glow top-left */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "-60px",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Top row: Title left + Text + Button right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "center",
              marginBottom: "56px",
            }}
          >
            {/* Left: Title */}
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {lang === "en" ? "Why Us?" : "Pourquoi nous ?"}
            </motion.h2>

            {/* Right: Description + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {description}
              </p>

              <div>
                <a
                  href="#services"
                  style={{
                    display: "inline-block",
                    padding: "10px 28px",
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    borderRadius: "999px",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "background 0.2s, border-color 0.2s",
                    backdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.8)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.5)";
                  }}
                >
                  {lang === "en" ? "See All" : "Voir tout"}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.15)",
              marginBottom: "48px",
            }}
          />

          {/* Bottom row: Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
            }}
          >
            {currentStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <span
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}