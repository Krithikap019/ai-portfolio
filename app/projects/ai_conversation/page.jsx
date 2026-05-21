"use client";
import Link from "next/link";

export default function ConversationIntelligence() {
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
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Featured Project</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>AI Conversation Intelligence</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          An AI-powered system that analyzes and summarizes conversations using NLP and transformer models. It extracts key insights, detects intent and sentiment, and enables smarter decision-making from unstructured conversational data.
        </p>

        {/* Tags + Live link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "Streamlit", "NLP", "Transformers", "RAG", "Groq LLM", "FAISS"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://ai-conversation-intelligence.streamlit.app/" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View Live App →
          </a>
        </div>

        {/* What it does - 6 boxes */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What it does</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🧠", title: "Intent Detection", desc: "Automatically identifies the intent behind each conversation using transformer models." },
              { icon: "💬", title: "Sentiment Analysis", desc: "Detects positive, negative, and neutral sentiment across conversation threads." },
              { icon: "📊", title: "Insight Extraction", desc: "Summarizes long conversations into actionable insights using NLP pipelines." },
              { icon: "🔍", title: "RAG-powered Search", desc: "Retrieval-Augmented Generation allows intelligent querying of conversation history." },
              { icon: "🤖", title: "Multi-Agent Workflows", desc: "Orchestrates multi-step AI agent pipelines for automated document retrieval and evaluation." },
              { icon: "⚡", title: "Sub-second Inference", desc: "Deployed modular pipelines via Streamlit enabling production-grade response speeds." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
          {/* How it works */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>How it works</h2>
            <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
              <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "1.9", margin: 0 }}>
          {`Raw Conversation Data (CSV / API stream)
                ↓
          Text Preprocessing & Noise Removal (Pandas, regex)
                ↓
          Intent Classification (Transformer model, HuggingFace)
                ↓
          Sentiment Scoring (positive / negative / neutral)
                ↓
          Semantic Embeddings (all-MiniLM-L6-v2)
                ↓
          FAISS Vector Index (cosine similarity)
                ↓
          Query → Top-K Retrieval (RAG pipeline, LangChain)
                ↓
          LLM Answer Generation (Groq) with structured output`}
              </pre>
            </div>
          </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Built scalable NLP pipelines processing 100K+ customer interactions using transformer models and RAG-based retrieval (Hugging Face, LangChain, FAISS).",
              "Improved issue detection accuracy by 30% and cut manual analysis time by ~60% through automated conversation classification.",
              "Designed and orchestrated multi-step AI agent workflows for automated information retrieval and structured LLM output evaluation with safety guardrails.",
              "Deployed modular pipelines via Streamlit enabling sub-second production inference with a clean, interactive UI.",
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
              { name: "Python", desc: "Core language for all data processing and ML logic" },
              { name: "Streamlit", desc: "Frontend UI for interactive data exploration and deployment" },
              { name: "Transformers", desc: "HuggingFace models for sentiment and intent classification" },
              { name: "LangChain & FAISS", desc: "RAG pipeline for intelligent search over conversation history" },
              { name: "Groq LLM", desc: "Fast LLM inference for structured output generation" },
              { name: "Pandas", desc: "Data preprocessing, analytics, and pipeline management" },
            ].map((t) => (
              <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.9rem 1.2rem", background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "6px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "3px 10px", borderRadius: "20px", flexShrink: 0 }}>{t.name}</span>
                <span style={{ fontSize: "0.85rem", color: "#3a5a4a" }}>{t.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project structure */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Project Structure</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "1.9", margin: 0 }}>
{`ai_conversation_intelligence/
├── data/
│   └── sample_conversations.csv
├── src/
│   ├── analytics.py
│   ├── models.py
│   ├── preprocess.py
│   └── rag.py
├── app.py
└── requirements.txt`}
            </pre>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0a7c52", borderRadius: "8px", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>Try it live</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Deployed on Streamlit Cloud — free to use</p>
          </div>
          <a href="https://ai-conversation-intelligence.streamlit.app/" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            Open App →
          </a>
        </div>
      </div>

          {/* Prev / Next Project Navigation */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 3.5rem 4rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)", marginTop: "2rem" }}>
      <Link href="/projects/ai_fin_analyser" style={{ textDecoration: "none", textAlign: "right" }}>
        <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>Next Project →</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>AI Financial Analyser</p>
      </Link>
    </div>
    </main>
  );
}