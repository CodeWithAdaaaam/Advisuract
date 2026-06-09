"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    borderBottom: "1px solid #ddd",
    padding: "6px 0",
    fontSize: "0.85rem",
    outline: "none",
    background: "transparent",
    color: "#111",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#111",
    marginBottom: "2px",
    display: "block",
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div style={{ position: "relative", borderRadius: "24px", overflow: "visible" }}>

          {/* Purple card — full width */}
          <div style={{
            background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #8b5cf6 100%)",
            borderRadius: "24px",
            padding: "64px 56px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "100%",
          }}>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }} viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice">
              <path d="M0,150 C100,80 200,220 300,150 C400,80 500,220 600,150" fill="none" stroke="white" strokeWidth="1.5"/>
              <path d="M0,180 C100,110 200,250 300,180 C400,110 500,250 600,180" fill="none" stroke="white" strokeWidth="1.5"/>
              <path d="M0,120 C100,50 200,190 300,120 C400,50 500,190 600,120" fill="none" stroke="white" strokeWidth="1.5"/>
            </svg>

            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", fontWeight: 500, margin: 0 }}>
              {lang === "en" ? "Ready to Connect?" : "Prêt à nous contacter ?"}
            </p>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 2.8vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, margin: 0, letterSpacing: "-0.02em",maxWidth: "69%" }}>
              {lang === "en"
                ? "Unlock the potential Of AI for Your Business Today!"
                : "Libérez le potentiel de l'IA pour votre entreprise !"}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0, maxWidth: "420px" ,}}>
              {lang === "en"
                ? "Tell us about your challenges. Our experts will get back to you within 24 hours."
                : "Parlez-nous de vos défis. Nos experts vous répondront sous 24h."}
            </p>
          </div>

          {/* Form card — absolute, top-right, on top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              top: "-8%",
              right: "1%",
              transform: "translateY(-50%)",
              width: "360px",
              height:"380px",
              background: "#fff",
              borderRadius: "20px",
              padding: "32px 28px",
              border: "1.5px solid #8b5cf6",
              boxShadow: "0 12px 56px rgba(0,0,0,0.14)",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <div>
              <label style={labelStyle}>
                {lang === "en" ? "Name" : "Nom"}<span style={{ color: "#e53e3e" }}>*</span>
              </label>
              <input style={inputStyle} type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label style={labelStyle}>Email<span style={{ color: "#e53e3e" }}>*</span></label>
              <input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label style={labelStyle}>{lang === "en" ? "Message" : "Message"}</label>
              <input style={inputStyle} type="text" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
              <button
                style={{ padding: "10px 24px", background: "#0a0a0a", color: "#fff", borderRadius: "999px", fontWeight: 600, fontSize: "0.85rem", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#7c3aed")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#0a0a0a")}
              >
                {lang === "en" ? "Submit" : "Envoyer"}
              </button>
              <button
                onClick={() => setForm({ name: "", email: "", message: "" })}
                style={{ padding: "10px 24px", background: "#fff", color: "#111", borderRadius: "999px", fontWeight: 600, fontSize: "0.85rem", border: "1.5px solid #ddd", cursor: "pointer" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#7c3aed")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.borderColor = "#ddd")}
              >
                {lang === "en" ? "Reset" : "Réinitialiser"}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}