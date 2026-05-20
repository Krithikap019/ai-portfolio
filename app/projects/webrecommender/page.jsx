"use client";
import Link from "next/link";

export default function RecommenderSystem() {
  return (
    <main style={{ background: "#f4f8f6", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#0d1f18" }}>
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

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Header */}
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Academic Project</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Web-Based Recommender System — SVD & Word2Vec Collaborative Filtering</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          Built two collaborative filtering systems on 494K+ Amazon reviews — an SVD-based rating predictor and an embedding-based similarity model using Word2Vec — to model complex user-product interaction patterns and enhance recommendation precision.
        </p>

        {/* Tags + Link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "SVD", "Word2Vec", "Collaborative Filtering", "NLP", "Recommender Systems", "EDA"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://publuu.com/flip-book/1112801/2477877" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View Report →
          </a>
        </div>

        {/* Stats */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Dataset at a Glance</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "494K+", label: "Amazon reviews analyzed" },
              { num: "2", label: "Model architectures built" },
              { num: "SVD + W2V", label: "Core techniques" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "#0a7c52", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What we built */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What we built</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🧮", title: "SVD Collaborative Filtering", desc: "Built a matrix factorization model using Singular Value Decomposition to predict user ratings by decomposing the user-item interaction matrix into latent feature representations." },
              { icon: "🧠", title: "Embedding-Based Similarity (E-SCF)", desc: "Designed an embedding-based collaborative filtering model using Word2Vec to learn item relationships from user interaction sequences, capturing semantic similarity between products." },
              { icon: "🔍", title: "Exploratory Data Analysis", desc: "Performed comprehensive EDA on 494K+ Amazon reviews — uncovering user preference distributions, product popularity patterns, and evolving rating trends over time." },
              { icon: "📐", title: "User-Product Interaction Modeling", desc: "Modeled complex user-product interactions beyond simple ratings — capturing latent preferences and item co-occurrence patterns to improve recommendation quality." },
              { icon: "📊", title: "Rating Prediction", desc: "Evaluated models on rating prediction accuracy, comparing SVD matrix factorization against embedding similarity approaches on held-out user-item pairs." },
              { icon: "🔗", title: "Item Similarity Analysis", desc: "Used Word2Vec embeddings to surface semantically similar items — enabling recommendations based on item-to-item relationships learned from review co-occurrence data." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Model Architectures</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`494K+ Amazon Reviews
          ↓
   Data Cleaning & EDA
   User preferences · Product popularity · Rating trends
          ↓
┌─────────────────────────┐   ┌─────────────────────────────┐
│   Model 1: SVD-CF        │   │   Model 2: E-SCF (Word2Vec)  │
│                          │   │                             │
│  User-Item Matrix        │   │  Treat review sequences     │
│       ↓                  │   │  as "sentences"             │
│  Singular Value          │   │       ↓                     │
│  Decomposition           │   │  Word2Vec embeddings        │
│       ↓                  │   │  per item                   │
│  Latent user &           │   │       ↓                     │
│  item vectors            │   │  Cosine similarity          │
│       ↓                  │   │  between item vectors       │
│  Predicted ratings       │   │       ↓                     │
│                          │   │  Item-to-item recs          │
└─────────────────────────┘   └─────────────────────────────┘
          ↓                             ↓
         Model Evaluation & Comparison`}
            </pre>
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Built SVD collaborative filtering to predict user ratings by modeling latent user-product interaction patterns",
              "Designed E-SCF model using Word2Vec embeddings to capture item relationships from review co-occurrence data",
              "Performed comprehensive EDA on 494K+ Amazon reviews — user preferences, popularity, and rating trends",
              "Compared matrix factorization vs. embedding-based approaches on recommendation quality metrics",
              "Surfaced item-level semantic similarity to enable more precise and contextually relevant recommendations",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                <span style={{ color: "#0a7c52", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.85rem", color: "#3a5a4a", lineHeight: "1.7" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Tech Stack</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { name: "Python", desc: "Core language for data processing, modeling, and evaluation" },
              { name: "SVD", desc: "Singular Value Decomposition for matrix factorization-based rating prediction" },
              { name: "Word2Vec", desc: "Item embedding model trained on user review sequences for similarity-based recommendations" },
              { name: "Pandas / NumPy", desc: "EDA and data manipulation across 494K+ review records" },
              { name: "Scikit-learn", desc: "Model evaluation, similarity computation, and preprocessing pipeline" },
              { name: "Surprise / SciPy", desc: "Collaborative filtering utilities and matrix factorization implementation" },
            ].map((t) => (
              <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.9rem 1.2rem", background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "6px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "3px 10px", borderRadius: "20px", flexShrink: 0 }}>{t.name}</span>
                <span style={{ fontSize: "0.85rem", color: "#3a5a4a" }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0a7c52", borderRadius: "8px", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>Read the full report</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Model design, EDA findings, and evaluation results</p>
          </div>
          <a href="https://publuu.com/flip-book/1112801/2477877" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            View Report →
          </a>
        </div>

      </div>
    </main>
  );
}
