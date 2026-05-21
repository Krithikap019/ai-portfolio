"use client";
import Link from "next/link";

export default function SMobileChurn() {
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
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Academic Project</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>S-Mobile Customer Churn Prediction & Retention Strategy</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A predictive analytics project for a telecom company losing 20,000 customers monthly. Built interpretable ML models to identify at-risk customers before they decide to leave, then translated model insights into five data-driven retention programs with full CLV impact analysis.
        </p>

        {/* Tags + Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "Logistic Regression", "XGBoost", "Neural Networks", "CLV Analysis", "RCT Framework", "Churn Modeling"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: "0.8rem" }}>
            <a href="https://github.com/Krithikap019/s-mobile_churn_predictor" target="_blank" style={{ background: "#0d1f18", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              GitHub →
            </a>
            <a href="https://docs.google.com/presentation/d/1n0Vijj6ut07Omcx4hy6tiPx4Z-cVlHtZVKlTomZg6d8/edit?slide=id.g332dc4cc9f3_2_0&pli=1#slide=id.g332dc4cc9f3_2_0" target="_blank" style={{ background: "#0a7c52", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              View Slides →
            </a>
          </div>
        </div>

        {/* The Problem */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1rem" }}>The Problem</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "2%", label: "Monthly churn rate" },
              { num: "20K", label: "Customers lost monthly" },
              { num: "5 yrs", label: "Avg potential revenue lost per customer" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, color: "#0a7c52", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "0.4rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.2rem" }}>
            The existing reactive approach only engaged customers after they had already decided to leave — expensive, ineffective, and damaging to customer experience.
          </p>
        </div>

        {/* What I built */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What I built</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "⚖️", title: "Class Imbalance Correction", desc: "Handled the severe 2% churn rate imbalance using class weights so the model reflected real-world churn probability rather than predicting no-churn for everyone." },
              { icon: "🤖", title: "Model Comparison", desc: "Developed and compared logistic regression, neural networks, and XGBoost. Selected a weighted logistic model for interpretability and business usability — AUC 0.70." },
              { icon: "🔍", title: "Driver Identification", desc: "Used permutation importance and partial dependence plots to surface key churn drivers: occupation, device age, overage usage, credit rating, and region." },
              { icon: "🎯", title: "Retention Strategy Design", desc: "Translated model insights into five targeted retention programs with estimated churn reductions of 7–43% per segment." },
              { icon: "🧪", title: "RCT Framework", desc: "Designed a randomized controlled trial framework to estimate true causal churn reduction, separating program impact from selection bias." },
              { icon: "💰", title: "CLV Impact Analysis", desc: "Evaluated 5-year customer lifetime value uplift for each program — up to 500–1000% CLV improvement for priority segments." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retention programs */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Retention Programs & Impact</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { program: "Enhanced Self-Service Tools", driver: "Retention calls > 1", reduction: "43.2%", score: "2.01" },
              { program: "Occupation-Targeted Plans", driver: "Students & professionals", reduction: "33.6%", score: "2.93" },
              { program: "Personalized Plan Optimization", driver: "Overage mins > 20", reduction: "33.4%", score: "0.25" },
              { program: "Equipment Renewal Program", driver: "Device age > 18 months", reduction: "25.7%", score: "1.24" },
              { program: "Service Quality Guarantees", driver: "Drop voice calls > 3", reduction: "7.7%", score: "1.02" },
            ].map((r) => (
              <div key={r.program} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr", alignItems: "center", gap: "1rem", padding: "1rem 1.2rem", background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "6px" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0d1f18" }}>{r.program}</div>
                  <div style={{ fontSize: "0.72rem", color: "#7a9a8a", marginTop: "2px" }}>{r.driver}</div>
                </div>
                <div style={{ fontSize: "0.72rem", color: "#3a5a4a" }}>{r.driver}</div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0a7c52" }}>{r.reduction}</div>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "3px 10px", borderRadius: "20px", textAlign: "center" }}>Score {r.score}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.78rem", color: "#7a9a8a", marginTop: "0.8rem" }}>Churn reduction % = relative reduction vs baseline. Efficiency score = churn reduction per dollar spent.</p>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Built a predictive churn model correcting for severe class imbalance to reflect the real-world 2% churn rate",
              "Compared logistic regression, neural networks, and XGBoost — selected weighted logistic model, AUC 0.70",
              "Identified key churn drivers via permutation importance: occupation, device age, overage, credit rating, region",
              "Designed five targeted retention programs with churn reductions of 7–43% per segment",
              "Built an RCT framework to estimate true causal program impact and avoid selection bias",
              "Conducted 5-year CLV analysis showing 500–1000% CLV uplift for priority retention programs",
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
              { name: "Logistic Regression", desc: "Final model — weighted for class imbalance, interpretable for business use" },
              { name: "Neural Networks", desc: "MLP classifier with grid search hyperparameter tuning (tanh, alpha 0.001)" },
              { name: "XGBoost", desc: "Gradient boosting baseline for performance comparison" },
              { name: "Permutation Importance", desc: "Feature importance analysis to identify and validate churn drivers" },
              { name: "CLV Modeling", desc: "5-year customer lifetime value analysis with discount rate and cost assumptions" },
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
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Full slide deck with model results, permutation plots, and CLV analysis</p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", flexShrink: 0 }}>
            <a href="https://github.com/Krithikap019/s-mobile_churn_predictor" target="_blank" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.9rem 1.6rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              GitHub →
            </a>
            <a href="https://docs.google.com/presentation/d/1n0Vijj6ut07Omcx4hy6tiPx4Z-cVlHtZVKlTomZg6d8/edit?slide=id.g332dc4cc9f3_2_0&pli=1#slide=id.g332dc4cc9f3_2_0" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 1.6rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              View Slides →
            </a>
          </div>
        </div>

      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 3.5rem 4rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)", marginTop: "2rem" }}>
  <Link href="/projects/intuit" style={{ textDecoration: "none" }}>
    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>← Previous Project</p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>Intuit – Predictive Analytics</p>
  </Link>
  <Link href="/projects/webrecommender" style={{ textDecoration: "none", textAlign: "right" }}>
    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>Next Project →</p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>Amazon Health Recommender</p>
  </Link>
</div>
    </main>
  );
}
