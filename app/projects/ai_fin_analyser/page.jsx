"use client";
import Link from "next/link";

export default function FinancialAnalyzer() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>AI Financial Report Analyzer</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A RAG-based system that transforms long financial filings into a conversational assistant. Upload a 10-K or earnings transcript and ask questions in plain English — get citation-backed answers instantly.
        </p>

        {/* Tags + Live link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "Streamlit", "RAG", "FAISS", "Groq LLM", "NLP", "SentenceTransformers"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://ai-financial-report-analyzer.streamlit.app/" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View Live App →
          </a>
        </div>

        {/* What it does */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What it does</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "💬", title: "Conversational Q&A", desc: "Ask natural language questions about any financial document and get precise, citation-backed answers with page references." },
              { icon: "📋", title: "Auto Document Summary", desc: "Instantly generates a structured executive summary covering highlights, business overview, risks, and outlook." },
              { icon: "📊", title: "Sentiment Analysis", desc: "Analyzes management tone, identifies positive and risk signals, and rates overall document sentiment 1–10." },
              { icon: "⚡", title: "Quick Question Templates", desc: "8 pre-built financial queries — revenue, net income, cash flow, risks, outlook — one click to ask." },
              { icon: "🔍", title: "Semantic Retrieval", desc: "Uses FAISS vector search with cosine similarity to find the most relevant document sections per query." },
              { icon: "🧠", title: "Conversation Memory", desc: "Maintains chat history so you can ask follow-up questions naturally without repeating context." },
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
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`PDF / TXT Upload
      ↓
Text Extraction (PyMuPDF)
      ↓
Overlapping Chunking (400 words, 100 overlap)
      ↓
Semantic Embeddings (all-MiniLM-L6-v2)
      ↓
FAISS Vector Index (cosine similarity)
      ↓
Query → Embedding → Top-K Retrieval
      ↓
LLM Answer Generation (Groq) with citations`}
            </pre>
          </div>
        </div>

        {/* Why not just ChatGPT */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Why this isn't just ChatGPT</h2>
          <p style={{ fontSize: "0.9rem", color: "#3a5a4a", lineHeight: "1.85", marginBottom: "1rem" }}>
            This system doesn't blindly feed the full document into an LLM. Instead it builds a semantic index, retrieves only the most relevant sections per query, and grounds responses strictly in those sections.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Builds a semantic vector index of the entire document",
              "Retrieves only the most relevant chunks per query",
              "Grounds LLM responses in retrieved context only",
              "Controls hallucination risk with strict prompting",
              "Scales to large documents cost-efficiently",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                <span style={{ color: "#0a7c52", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.85rem", color: "#3a5a4a" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Tech Stack</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { name: "Python", desc: "Core language for all pipeline logic" },
              { name: "Streamlit", desc: "Frontend UI for interactive document analysis" },
              { name: "SentenceTransformers", desc: "Semantic embeddings using all-MiniLM-L6-v2" },
              { name: "FAISS", desc: "Vector indexing and cosine similarity search" },
              { name: "Groq LLM", desc: "Fast LLM inference for answer generation" },
              { name: "PyMuPDF", desc: "PDF text extraction with page metadata" },
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
{`fin-report-analyzer/
├── app/
│   ├── app.py              ← Streamlit frontend
│   ├── ingest.py           ← PDF/TXT extraction
│   ├── chunk.py            ← Overlapping chunking
│   ├── embed_index.py      ← Embeddings + FAISS
│   ├── retrieve.py         ← Semantic retrieval
│   ├── generate.py         ← LLM generation
│   └── prompts.py          ← Prompt templates
├── requirements.txt
└── README.md`}
            </pre>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0a7c52", borderRadius: "8px", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>Try it live</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Upload any 10-K or earnings transcript and start asking questions</p>
          </div>
          <a href="https://ai-financial-report-analyzer.streamlit.app/" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            Open App →
          </a>
        </div>

      </div>
        {/* Prev / Next Project Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(10,124,82,0.15)" }}>
        <Link href="/projects/ai_conversation" style={{ textDecoration: "none", group: true }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>← Previous Project</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>I Conversation Intelligence</p>
        </Link>

        <Link href="/projects/intuit" style={{ textDecoration: "none", textAlign: "right" }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>Next Project →</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>Intuit - Predictive Analysis</p>
        </Link>
        </div>
    </main>
  );
}