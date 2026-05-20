"use client";
import Link from "next/link";

export default function CovidDetection() {
  return (
    <main style={{ background: "#f4f8f6", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#0d1f18" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 3.5rem", borderBottom: "1px solid rgba(10,124,82,0.2)", background: "#f4f8f6" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600 }}>
          Krithika<span style={{ color: "#0a7c52" }}>.</span>S
        </div>
        <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <Link href="/projects" style={{ color: "#0d1f18", textDecoration: "none" }}>Projects</Link>
          <Link href="/#about" style={{ color: "#0d1f18", textDecoration: "none" }}>About</Link>
          <Link href="/#experience" style={{ color: "#0d1f18", textDecoration: "none" }}>Experience</Link>
          <Link href="/#contact" style={{ color: "#0d1f18", textDecoration: "none" }}>Contact</Link>
        </div>
        <a href="mailto:ksuwarna@ucsd.edu" style={{ background: "#0a7c52", color: "#fff", padding: "0.6rem 1.5rem", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Hire me</a>
      </nav>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Header */}
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Published Research · IEEE</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.2rem", fontWeight: 600, lineHeight: "1.1", marginBottom: "1.5rem" }}>Detection of COVID-19 and its Severity using Chest X-rays and EHR Data</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A multi-module ML pipeline that integrates chest X-ray imaging and electronic health records to detect COVID-19 and classify clinical severity — achieving 98.5% accuracy using VGG16 transfer learning.
        </p>

        {/* Tags + Published link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Deep Learning", "CNN", "VGG16", "Random Forest", "Transfer Learning", "EHR", "Python"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://ieeexplore.ieee.org/document/9544104" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            Read Published Paper →
          </a>
        </div>

        {/* Key results */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "3rem" }}>
          {[
            { num: "98.5%", label: "X-ray Detection Accuracy", sub: "VGG16 transfer learning" },
            { num: "97.1%", label: "Hospitalization Risk", sub: "Boosted Random Forest" },
            { num: "IEEE", label: "Published", sub: "Peer-reviewed journal" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem", textAlign: "center" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "#0a7c52", display: "block", marginBottom: "0.3rem" }}>{s.num}</span>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0d1f18", display: "block", marginBottom: "0.2rem" }}>{s.label}</span>
              <span style={{ fontSize: "0.68rem", color: "#888" }}>{s.sub}</span>
            </div>
          ))}
        </div>

        {/* What it does */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What it does</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🫁", title: "X-ray Image Analysis", desc: "Classifies chest X-rays using VGG16 transfer learning to detect COVID-19 with 98.5% accuracy." },
              { icon: "🏥", title: "Severity Classification", desc: "Predicts COVID-19 severity and hospitalization risk from EHR data using Boosted Random Forest." },
              { icon: "🔗", title: "Multi-modal Pipeline", desc: "Integrates imaging and clinical record data in a unified ML pipeline for comprehensive diagnosis." },
              { icon: "📋", title: "Triage Recommendations", desc: "Translates model outputs into actionable triage recommendations for healthcare teams." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Pipeline Architecture</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`Chest X-ray + EHR Data
        ↓
Module 1: Image Preprocessing
        ↓
VGG16 Transfer Learning (COVID-19 Detection)
        → 98.5% Accuracy
        ↓
Module 2: Feature Engineering from EHR
        ↓
Boosted Random Forest (Severity Classification)
        → 97.1% Accuracy
        ↓
Triage Recommendations for Healthcare Teams`}
            </pre>
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Tech Stack</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { name: "Python", desc: "Core language for data processing and model development" },
              { name: "VGG16", desc: "Pre-trained CNN used for transfer learning on chest X-ray images" },
              { name: "Random Forest", desc: "Boosted ensemble model for EHR-based severity prediction" },
              { name: "TensorFlow / Keras", desc: "Deep learning framework for model training and evaluation" },
              { name: "OpenCV", desc: "Image preprocessing and augmentation pipeline" },
              { name: "Scikit-learn", desc: "Feature engineering, model evaluation, and metrics" },
            ].map((t) => (
              <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.9rem 1.2rem", background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "6px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "3px 10px", borderRadius: "20px", flexShrink: 0 }}>{t.name}</span>
                <span style={{ fontSize: "0.85rem", color: "#3a5a4a" }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0a7c52", borderRadius: "8px", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>Read the full paper</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Published on IEEE Xplore — peer reviewed research</p>
          </div>
          <a href="http