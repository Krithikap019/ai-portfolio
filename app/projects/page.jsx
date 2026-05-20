"use client";
import { useState } from "react";
import Link from "next/link";

const projects = [
  { id: 0, title: "AI Conversation Intelligence", cat: "NLP & AI", tags: ["Python", "Streamlit", "RAG", "NLP"], icon: "🤖", link: "/projects/ai_conversation" },
  { id: 1, title: "AI Financial Report Analyzer", cat: "NLP & AI", tags: ["Python", "RAG", "FAISS", "Groq"], icon: "📄", link: "/projects/ai_fin_analyser" },
  { id: 2, title: "Intuit – Predictive Analytics for QuickBooks", cat: "Machine Learning", tags: ["XGBoost", "Python", "Regression"], icon: "📊", link: "/projects/" },
  { id: 3, title: "S-Mobile Customer Churn Prediction", cat: "Machine Learning", tags: ["Neural Networks", "Random Forest", "Python", "CLV"], icon: "📱", link: "/projects/churn_prediction" },
  { id: 4, title: "Amazon Health & Personal Care Recommender", cat: "NLP & AI", tags: ["SVD", "NLP", "Python", "Regression"], icon: "🛒", link: "/projects/" },
  { id: 5, title: "COVID-19 Detection from Chest X-rays", cat: "Deep Learning", tags: ["CNN", "VGG16", "Random Forest"], icon: "🏥", link: "/projects/covid_detection" },
  { id: 6, title: "Target Brazil – Performance & Sales Analysis", cat: "Data & Analytics", tags: ["Tableau", "Dashboard", "SQL"], icon: "🎯", link: "/projects/" },
  { id: 7, title: "Chicago Divvy Bicycle System Analysis", cat: "Data & Analytics", tags: ["Python", "Regression", "Predictive Modeling"], icon: "🚲", link: "/projects/divvy_bicycle" },
  { id: 8, title: "Creative Gaming – Propensity & Uplift Modeling", cat: "Machine Learning", tags: ["Uplift Modeling", "Data Visualization"], icon: "🎮", link: "projects/" },
  { id: 9, title: "Art Gallery Database Management System", cat: "Cloud & Engineering", tags: ["SQL", "ETL", "Relational Database"], icon: "🎨", link: "/projects/art_gallery" },
  { id: 10, title: "Mini DBaaS for Rideshare", cat: "Cloud & Engineering", tags: ["REST API", "Docker", "Flask"], icon: "🚗", link: "/projects/rideshare" },
  { id: 11, title: "Scalable Data Processing with Snowflake", cat: "Cloud & Engineering", tags: ["SQL", "ETL", "Snowflake"], icon: "❄️", link: "/projects/snowflake" },
  { id: 12, title: "FiTech – Data-Driven Credit Card Design", cat: "Data & Analytics", tags: ["A/B Testing", "Causal Inference", "ML"], icon: "💳", link: "/projects/fintech" },
  { id: 13, title: "Pentathlon – Next Product to Buy", cat: "Machine Learning", tags: ["Random Forest", "Neural Networks", "ML"], icon: "🏅", link: "/projects/nptb" },
];

const categories = ["All", "Machine Learning", "NLP & AI", "Deep Learning", "Data & Analytics", "Cloud & Engineering"];

const catColors = {
  "Machine Learning": { bg: "#d4ede5", color: "#064d33" },
  "NLP & AI": { bg: "#dceaf7", color: "#0d3d66" },
  "Deep Learning": { bg: "#fde8e5", color: "#9a2215" },
  "Data & Analytics": { bg: "#fdf0d8", color: "#8a5f0d" },
  "Cloud & Engineering": { bg: "#ede8fd", color: "#3d1566" },
};

export default function AllProjects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <main style={{ background: "#f4f8f6", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#0d1f18" }}>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 3.5rem", borderBottom: "1px solid rgba(10,124,82,0.2)", background: "#f4f8f6" }}>
        <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1.2rem", fontWeight: 300, letterSpacing: "0.09em" }}>
          Krithika<span style={{ color: "#0a7c52" }}> </span>Suwarna
        </div>
        <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Link href="/projects" style={{ color: "#0d1f18", textDecoration: "none" }}>Projects</Link>
        <Link href="/#about" style={{ color: "#0d1f18", textDecoration: "none" }}>About</Link>
        <Link href="/#experience" style={{ color: "#0d1f18", textDecoration: "none" }}>Experience</Link>
        <Link href="/#contact" style={{ color: "#0d1f18", textDecoration: "none" }}>Contact</Link>
        </div>
        <Link href="/" style={{ color: "#0a7c52", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "2px solid #0a7c52", paddingBottom: "2px" }}>← Back home</Link>
      </nav>

      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "calc(100vh - 72px)" }}>

        {/* Sidebar */}
        <div style={{ borderRight: "1px solid rgba(10,124,82,0.15)", padding: "3rem 2rem", background: "#fff" }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "1.5rem" }}>Categories</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            {categories.map((cat) => {
              const count = cat === "All" ? projects.length : projects.filter((p) => p.cat === cat).length;
              return (
                <button key={cat} onClick={() => setActive(cat)} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "0.7rem 0.9rem", borderRadius: "6px", cursor: "pointer",
                  border: "none", textAlign: "left", transition: "all 0.2s",
                  background: active === cat ? "#edf5f1" : "transparent",
                  borderLeft: active === cat ? "3px solid #0a7c52" : "3px solid transparent",
                }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: active === cat ? 700 : 500, color: active === cat ? "#0a7c52" : "#3a5a4a" }}>{cat}</span>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: active === cat ? "#0a7c52" : "#aaa" }}>{count}</span>
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: "3rem", padding: "1.4rem", background: "#0a7c52", borderRadius: "8px" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#fff", marginBottom: "0.3rem" }}>Total Projects</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, color: "#fff", lineHeight: 1 }}>{projects.length}</p>
          </div>
        </div>

        {/* Main content */}
        <div style={{ padding: "3rem 3.5rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>
              {active === "All" ? "The Portfolio" : active}
            </h1>
            <p style={{ fontSize: "0.85rem", color: "#888" }}>
              Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {filtered.map((p) => (
              <Link key={p.id} href={p.link} style={{ textDecoration: "none" }}>
                <div
                  style={{ display: "grid", gridTemplateColumns: "70px 1fr auto", gap: "1.5rem", alignItems: "center", background: "#fff", border: "1px solid #efefef", borderRadius: "8px", padding: "1.8rem 2rem", transition: "border-color 0.2s, transform 0.2s", cursor: "pointer" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0a7c52"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#efefef"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div style={{ width: "60px", height: "60px", borderRadius: "10px", background: catColors[p.cat]?.bg || "#d4ede5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#0d1f18", marginBottom: "0.5rem", lineHeight: "1.3" }}>{p.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: catColors[p.cat]?.bg || "#d4ede5", color: catColors[p.cat]?.color || "#064d33" }}>
                        {p.cat}
                      </span>
                      {p.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: "0.72rem", fontWeight: 600, color: "#888" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0a7c52", flexShrink: 0 }}>View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}