"use client";
import Link from "next/link";

export default function Pentathlon() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Pentathlon — Next Product to Buy Model</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A personalized email decision engine for a sports retailer — selecting the profit-maximizing product message (or no-message) for each of 5M customers, replacing department heuristics with customer-level ML optimization.
        </p>

        {/* Tags + Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "XGBoost", "Random Forest", "Neural Networks", "Logistic Regression", "CLV", "Email Optimization"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: "0.8rem" }}>
            <a href="https://github.com/Krithikap019/pentathlon-next-product-to-buy" target="_blank" style={{ background: "#0d1f18", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              GitHub →
            </a>
            <a href="https://docs.google.com/presentation/d/1QL4fiijmsIUKWo-rgYTwPo6jbbqGM_q8s2hfD1qadsQ/edit?slide=id.p#slide=id.p" target="_blank" style={{ background: "#0a7c52", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              View Slides →
            </a>
          </div>
        </div>

        {/* Model comparison */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Model Performance — 5M Customer Campaign</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Model", "AUC", "Avg Profit / Customer", "Additional Profit", "Uplift vs Control"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "0.6rem 0.8rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { model: "Logistic Regression", auc: "0.884", profit: "€0.704", additional: "€1,370,055", uplift: "63.65%" },
                  { model: "Neural Network", auc: "0.885", profit: "€0.734", additional: "€1,522,902", uplift: "70.80%" },
                  { model: "Random Forest", auc: "0.854", profit: "€1.005", additional: "€2,592,674", uplift: "106.54%", best: true },
                  { model: "XGBoost", auc: "0.904", profit: "€0.703", additional: "€1,085,364", uplift: "44.60%" },
                ].map((r) => (
                  <tr key={r.model} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: r.best ? "rgba(10,124,82,0.12)" : "transparent" }}>
                    <td style={{ padding: "0.8rem", color: r.best ? "#0a7c52" : "#e8e3da", fontWeight: r.best ? 700 : 400 }}>{r.model}{r.best ? " ★" : ""}</td>
                    <td style={{ padding: "0.8rem", color: "#9fe1cb" }}>{r.auc}</td>
                    <td style={{ padding: "0.8rem", color: "#e8e3da" }}>{r.profit}</td>
                    <td style={{ padding: "0.8rem", color: "#e8e3da" }}>{r.additional}</td>
                    <td style={{ padding: "0.8rem", color: r.best ? "#0a7c52" : "#9fe1cb", fontWeight: r.best ? 700 : 400 }}>{r.uplift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", marginTop: "1rem" }}>★ Best model by profit per customer. Uplift vs. control (no email) baseline.</p>
        </div>

        {/* What I built */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What I built</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "📧", title: "NPTB Decision Engine", desc: "For each customer, selected the profit-maximizing product email (Endurance, Strength, Water, Backcountry, Team, Racquet) or no-message — fully personalized at scale." },
              { icon: "🤖", title: "Four Model Comparison", desc: "Built and tuned Logistic Regression, Neural Network (MLP), Random Forest, and XGBoost — each optimized via GridSearchCV and evaluated on AUC and expected profit." },
              { icon: "💰", title: "Two-Step Profit Model", desc: "Expected Profit = P(buyer) × Order Size × (1 − COGS). Separate classification model for purchase probability and regression model for order size, then combined." },
              { icon: "🎯", title: "Causal Evaluation", desc: "Used randomized email data across 600K+ customer-email observations to enable causal evaluation of email effectiveness — not just correlation." },
              { icon: "📊", title: "Profit Uplift Analysis", desc: "Compared personalized approach vs. uniform best-average and random assignment strategies. Random Forest delivered €2.59M additional profit — 106% uplift vs. no-email control." },
              { icon: "🏢", title: "Policy Influence", desc: "Shifted company email allocation from department-level heuristics to customer-level optimization, improving cross-team coordination and long-term CLV thinking." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modeling pipeline */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Modeling Pipeline</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`600K+ Customer–Email Observations (randomized)
                  ↓
         Feature Engineering
   Purchase history · Email type · Category affinity
                  ↓
   ┌─────────────────────────────────┐
   │   Step 1: Classification        │
   │   P(buyer) — did they purchase? │
   │   LR · NN · RF · XGBoost        │
   └─────────────────────────────────┘
                  ↓
   ┌─────────────────────────────────┐
   │   Step 2: Regression            │
   │   Order Size conditional on buy │
   └─────────────────────────────────┘
                  ↓
   Expected Profit = P(buyer) × Order Size × (1 − COGS)
                  ↓
   Per customer: select max(E[profit]) across all messages
                  ↓
   Personalized Email Assignment → 5M Customer Rollout`}
            </pre>
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Built NPTB framework on 600K+ randomized customer-email observations across 6 product categories",
              "Developed and tuned Logistic Regression, Random Forest, Neural Network, and XGBoost models",
              "Designed two-step profit model combining purchase probability and order size regression",
              "Personalized email assignment outperformed random and uniform strategies by up to 106% profit uplift",
              "Projected €2.59M in additional profit for a 5M-customer campaign using Random Forest",
              "Influenced company-wide email policy shift from heuristics to customer-level data-driven optimization",
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
              { name: "Python", desc: "Core language for all modeling, analysis, and pipeline logic" },
              { name: "Random Forest", desc: "Best model — AUC 0.854, €1.005 avg profit/customer, €2.59M additional profit" },
              { name: "XGBoost", desc: "Highest AUC (0.904), tuned via GridSearchCV across depth, estimators, learning rate" },
              { name: "Neural Network", desc: "MLP with 6-neuron hidden layer, tanh activation, lbfgs optimizer — AUC 0.885" },
              { name: "Logistic Regression", desc: "Baseline + interaction terms — interpretable and competitive at AUC 0.884" },
              { name: "GridSearchCV", desc: "Hyperparameter tuning for Random Forest (max_features, n_estimators) and XGBoost" },
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
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Full modeling pipeline, profit comparison analysis, and slides</p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", flexShrink: 0 }}>
            <a href="https://github.com/Krithikap019/pentathlon-next-product-to-buy" target="_blank" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.9rem 1.6rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              GitHub →
            </a>
            <a href="https://docs.google.com/presentation/d/1QL4fiijmsIUKWo-rgYTwPo6jbbqGM_q8s2hfD1qadsQ/edit?slide=id.p#slide=id.p" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 1.6rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              View Slides →
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
