"use client";
import Link from "next/link";

export default function UpliftModeling() {
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

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "5rem 2rem 0rem 2rem" }}>

        {/* Header */}
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Machine Learning · Marketing Analytics</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Creative Gaming — Propensity & Uplift Modeling</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          Built a propensity-to-buy and uplift modeling system using large-scale mobile game telemetry data (30K–150K users) to optimize targeted in-app advertising and maximize campaign ROI for a free-to-play gaming platform.
        </p>

        {/* Tags + Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["XGBoost", "Random Forest", "Neural Networks", "Logistic Regression", "Python", "Uplift Modeling", "A/B Testing"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: "0.8rem" }}>
            <a href="https://github.com/Krithikap019/Creative-Gaming-Uplift-Modeling" target="_blank" style={{ background: "#0d1f18", color: "#fff", padding: "0.75rem 1.4rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>GitHub →</a>
            <a href="https://docs.google.com/presentation/d/11HMlJoQErUQuhU3wS4-lMFUrS0W2lgV5C7zAyHXdIF0/edit" target="_blank" style={{ background: "#0a7c52", color: "#fff", padding: "0.75rem 1.4rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>View Slides →</a>
          </div>
        </div>

        {/* Key Results */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "3rem" }}>
          {[
            { num: "$66K+", label: "Peak Incremental Profit", sub: "XGBoost breakeven model" },
            { num: "0.883", label: "Best AUC Score", sub: "XGBoost control model" },
            { num: "150K+", label: "Users Analyzed", sub: "Behavioral telemetry data" },
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
              { icon: "🎯", title: "Propensity Modeling", desc: "Predicts likelihood of purchasing a $14.99 premium campaign using behavioral features from mobile game telemetry." },
              { icon: "📈", title: "Uplift Modeling", desc: "Measures true incremental ad impact by comparing treated and control groups, focusing on persuadable customers." },
              { icon: "🧪", title: "A/B Experiment Design", desc: "Designed and analyzed a randomized ad experiment across organic, random, and model-driven targeting groups." },
              { icon: "🤖", title: "Multi-model Comparison", desc: "Trained and evaluated Logistic Regression, Neural Networks, Random Forest, and XGBoost for best performance." },
              { icon: "💰", title: "Profit Optimization", desc: "Computed incremental profit metrics using margin ($14.99) and cost ($1.50) to maximize campaign ROI." },
              { icon: "🔍", title: "Feature Engineering", desc: "Engineered 19 behavioral features capturing engagement, skill, multiplayer activity, and monetization history." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
    
        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Built a propensity-to-buy model using large-scale mobile game telemetry data (30K–150K users) to predict likelihood of purchasing a $14.99 premium campaign in a free-to-play environment.",
              "Engineered 19 behavioral features capturing engagement, skill progression, multiplayer activity, monetisation history, and ad interactions to identify high-intent users.",
              "Trained and evaluated Logistic Regression, Random Forest, Neural Networks, and XGBoost using AUC, gain curves, and profit metrics — achieving a best AUC of 0.883 with XGBoost.",
              "Designed and analyzed a randomized ad experiment comparing organic users, random targeting, and model-driven targeting, demonstrating significantly higher conversion rates from analytics-based targeting.",
              "Transitioned from predicting organic purchase propensity to modeling incremental ad response (uplift), improving targeting efficiency and maximizing campaign ROI by aligning predictions with true causal impact.",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                <span style={{ color: "#0a7c52", fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "0.85rem", color: "#3a5a4a", lineHeight: "1.7" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Model Comparison */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Model Performance Comparison</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem", overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "monospace", fontSize: "0.8rem", color: "#9fe1cb" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Model", "Control AUC", "Treatment AUC", "Propensity Profit", "Uplift Profit"].map((h) => (
                    <th key={h} style={{ padding: "0.6rem 1rem", textAlign: "left", color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Logistic Regression", "0.831", "0.712", "$32,065", "$45,907"],
                  ["Neural Network", "0.857", "0.765", "$36,258", "$49,474"],
                  ["Random Forest", "0.867", "0.775", "$48,763", "$57,067"],
                  ["XGBoost ✓", "0.883", "0.781", "$56,232", "$41,908"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i === 3 ? "rgba(10,124,82,0.15)" : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "0.8rem 1rem", color: i === 3 ? "#fff" : "#9fe1cb" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Tech Stack</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { name: "Python", desc: "Core language for data processing, modeling, and analysis" },
              { name: "XGBoost", desc: "Best performing model — gradient boosting with 0.883 control AUC" },
              { name: "Random Forest", desc: "Ensemble model for capturing non-linear feature interactions" },
              { name: "Neural Networks", desc: "MLP classifier with hyperparameter tuning for uplift prediction" },
              { name: "Scikit-learn", desc: "Model training, evaluation, AUC scoring, and gain curve analysis" },
              { name: "Pandas & NumPy", desc: "Feature engineering and data preprocessing pipeline" },
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
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>View the full project</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Code on GitHub · Slides on Google Slides</p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", flexShrink: 0 }}>
            <a href="https://github.com/Krithikap019/Creative-Gaming-Uplift-Modeling" target="_blank" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.9rem 1.5rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>GitHub →</a>
            <a href="https://docs.google.com/presentation/d/11HMlJoQErUQuhU3wS4-lMFUrS0W2lgV5C7zAyHXdIF0/edit" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 1.5rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Slides →</a>
          </div>
        </div>

      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 3.5rem 4rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)", marginTop: "2rem" }}>
  <Link href="/projects/divvy_bicycle" style={{ textDecoration: "none" }}>
    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>← Previous Project</p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>Chicago Divvy Bicycle Analysis</p>
  </Link>
  <Link href="/projects/art_gallery" style={{ textDecoration: "none", textAlign: "right" }}>
    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>Next Project →</p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>Art Gallery Database System</p>
  </Link>
</div>
    </main>
  );
}