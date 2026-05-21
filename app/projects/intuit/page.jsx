"use client";
import Link from "next/link";

export default function IntuitQuickBooks() {
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

        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Academic Project</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Intuit — Predictive Analytics for QuickBooks Upgrade Campaign</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          Replaced a blanket re-mailing strategy with a profit-driven, model-based targeting system across 75K small-business customers — projecting ~$380K in incremental revenue while significantly reducing wasted mail volume.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "Logistic Regression", "Neural Networks", "Profit Optimization", "Customer Analytics", "Marketing Science"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://github.com/Krithikap019/Intuit-QuickBooks-Upgrade-Analysis-" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            GitHub →
          </a>
        </div>

        {/* Impact stats */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Business Impact</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "75K", label: "Customers analyzed" },
              { num: "$380K", label: "Projected incremental revenue" },
              { num: "$1.41", label: "Mailing cost per customer" },
              { num: "$60", label: "Upgrade margin per conversion" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "#0a7c52", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What I built */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What I built</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🎯", title: "Profit-Driven Targeting", desc: "Replaced blanket re-mailing with expected-value targeting — only mailing customers where P(upgrade) × $60 margin exceeds the $1.41 mailing cost, ensuring every mail sent has positive expected ROI." },
              { icon: "🤖", title: "Propensity Modeling", desc: "Built and evaluated logistic regression and neural network models to predict upgrade likelihood using purchase recency, spend, product history, and engagement signals." },
              { icon: "📊", title: "Feature Engineering", desc: "Extracted RFM-style features — recency, frequency, monetary value — alongside product history and engagement patterns to identify high-value upgrade candidates." },
              { icon: "📉", title: "Response Decay Modeling", desc: "Incorporated response rate decay assumptions to model diminishing returns as targeting thresholds loosen, ensuring ROI-positive decisions at each mailing volume." },
              { icon: "📋", title: "Reproducible Pipeline", desc: "End-to-end Jupyter Notebook with the full modeling pipeline, evaluation framework, and final target list — ready for stakeholder handoff and business action." },
              { icon: "📬", title: "Wave-2 Strategy", desc: "Targeting designed specifically for wave-2 re-mailing — customers who didn't respond to wave-1 — with updated propensity scores and tighter profit thresholds." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Targeting framework */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Profit-Based Targeting Framework</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`Wave-2 Non-Responders (75K customers)
           ↓
Feature Engineering
  Purchase recency · Spend · Product history · Engagement
           ↓
Propensity Model (Logistic Regression / Neural Network)
  → P(upgrade) per customer
           ↓
Expected Value Calculation
  EV = P(upgrade) × $60 margin − $1.41 mailing cost
           ↓
Target: EV > 0  →  Mail
        EV ≤ 0  →  Do not mail
           ↓
Projected Output: ~$380K incremental revenue`}
            </pre>
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Led end-to-end customer analytics project replacing blanket re-mailing with profit-driven model-based targeting across 75K customers",
              "Built and evaluated logistic regression and neural network models for upgrade propensity prediction",
              "Engineered RFM features from purchase recency, spend, product history, and engagement signals",
              "Designed profit targeting framework: EV = P(upgrade) × $60 margin − $1.41 mailing cost",
              "Projected ~$380K incremental revenue while significantly reducing unnecessary mail volume",
              "Delivered reproducible Jupyter Notebook and final target list with clear stakeholder recommendations",
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
              { name: "Python", desc: "Core language for data processing, modeling, and analysis" },
              { name: "Logistic Regression", desc: "Propensity model for upgrade likelihood with interpretable coefficients" },
              { name: "Neural Networks", desc: "Non-linear propensity model for capturing complex feature interactions" },
              { name: "Pandas / NumPy", desc: "Feature engineering, RFM construction, and data manipulation" },
              { name: "Jupyter Notebook", desc: "Reproducible end-to-end pipeline for modeling and stakeholder handoff" },
              { name: "Profit Optimization", desc: "Expected value framework with mailing cost and margin assumptions" },
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
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>Explore the project</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Full modeling pipeline, targeting framework, and reproducible notebook</p>
          </div>
          <a href="https://github.com/Krithikap019/Intuit-QuickBooks-Upgrade-Analysis-" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            GitHub →
          </a>
        </div>

      </div>
    </main>
  );
}
