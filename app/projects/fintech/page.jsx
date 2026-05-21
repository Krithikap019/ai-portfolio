"use client";
import Link from "next/link";

export default function FiTech() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>FiTech — Data-Driven Credit Card Product Design</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A two-stage test-and-rollout campaign strategy to maximize profitability for a fintech email solicitation targeting 750K customers — matching 12 credit card products to 3 credit risk segments using CLV modeling and experimental design.
        </p>

        {/* Tags + Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "CLV Modeling", "Logistic Regression", "Experimental Design", "Customer Segmentation", "Fintech", "A/B Testing"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <div style={{ marginLeft: "auto", display: "flex", gap: "0.8rem" }}>
            <a href="https://github.com/Krithikap019/fitech-credit-card" target="_blank" style={{ background: "#0d1f18", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              GitHub →
            </a>
            <a href="https://docs.google.com/presentation/d/1f_0S7WBNyJkQXIBJjQLZR2-OrFKGUej_t_6_KzqJAio/edit?slide=id.g33fa2843bcc_0_0#slide=id.g33fa2843bcc_0_0" target="_blank" style={{ background: "#0a7c52", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              View Slides →
            </a>
          </div>
        </div>

        {/* Impact stats */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Campaign Scale</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "750K", label: "Customers targeted" },
              { num: "12", label: "Credit card products" },
              { num: "3", label: "BK risk segments" },
              { num: "$81K", label: "Cost saved via partial design" },
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
              { icon: "🃏", title: "Product-Segment Matching", desc: "Matched 12 credit card configurations (varying APR, annual fee, fixed vs. variable rate) to 3 BK score segments to maximize expected CLV per offer sent." },
              { icon: "🧪", title: "Two-Stage Test & Rollout", desc: "Round 1 — partial factorial test with 12 trials (efficiency 0.892) across 3,789 customers to learn response rates. Round 2 — full rollout using CLV-weighted proportions." },
              { icon: "📐", title: "Experimental Design", desc: "Chose partial factorial over full factorial (36 trials → 12 trials), saving 90,936 emails and $81,068 in campaign costs while maintaining 89.2% design efficiency." },
              { icon: "📈", title: "CLV Modeling", desc: "Quantified how BK score, APR, annual fee, and rate type each impact customer lifetime value — e.g. +$10 CLV per +1% APR, +$30 CLV with a $20 annual fee." },
              { icon: "🤖", title: "Logistic Regression Models", desc: "Built response propensity models using historical data and Round 1 test results to predict upgrade likelihood per product-segment combination." },
              { icon: "💡", title: "Personalization vs. Blanket Strategy", desc: "Demonstrated that matching offers to credit risk profiles outperforms a one-size-fits-all approach — improving campaign-level profit under real-world constraints." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CLV drivers */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>CLV Driver Analysis</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { driver: "BK Score", insight: "Inverse relationship — every 50-point BK increase reduces CLV by $20–30. BK 150 → $83 CLV vs BK 250 → $33 CLV (Product #1).", tag: "Risk" },
              { driver: "APR", insight: "Higher APR drives higher CLV — roughly +$10 CLV per +1% APR. Fixed, $20 fee, BK 150: 14.9% → $83 · 16.8% → $103 · 19.8% → $131.", tag: "Pricing" },
              { driver: "Annual Fee", insight: "$20 annual fee adds ~$30 to CLV across all segments — a clear profitability lever when customers are fee-tolerant.", tag: "Pricing" },
              { driver: "Rate Type", insight: "Variable rate consistently adds +$10 CLV over fixed rate — protects margins when borrowing costs rise.", tag: "Structure" },
            ].map((r) => (
              <div key={r.driver} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "6px", padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0d1f18" }}>{r.driver}</span>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "2px 8px", borderRadius: "20px" }}>{r.tag}</span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7", margin: 0 }}>{r.insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign flow */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Two-Stage Campaign Strategy</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`750K Customers (3 BK Segments: 150 · 200 · 250)
              ↓
         ROUND 1 — TEST
  Partial Factorial Design (12 trials)
  Sample: 3,789 customers
  Efficiency: 0.892 vs full factorial
  Savings: 90,936 emails · $81,068 cost
              ↓
  Collect response rates per product-segment
              ↓
         ROUND 1 ANALYSIS
  Logistic Regression → P(response) per combo
  CLV Modeling → Expected profit per offer
              ↓
         ROUND 2 — ROLLOUT
  CLV-weighted proportions per segment
  Match best product to each BK risk tier
              ↓
  Maximized campaign-level profitability`}
            </pre>
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Led end-to-end data-driven credit card product design for a 750K-customer fintech email campaign",
              "Analyzed 12 product configurations using historical CLV data to guide offer-segment matching",
              "Designed a two-stage test-and-rollout strategy using partial factorial experimental design",
              "Saved 90,936 emails and $81,068 in campaign costs via partial vs. full factorial design",
              "Built logistic regression models to predict response rates per product-segment combination",
              "Delivered insights showing personalized offer matching outperforms blanket campaign strategies",
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
              { name: "Python", desc: "Core language for data analysis, modeling, and CLV calculations" },
              { name: "Logistic Regression", desc: "Response propensity modeling per product-segment combination" },
              { name: "CLV Modeling", desc: "Customer lifetime value estimation incorporating BK score, APR, fee, and rate type" },
              { name: "Experimental Design", desc: "Partial factorial design with 89.2% efficiency vs full factorial" },
              { name: "Simulation Tool", desc: "Scenario analysis for offer allocation and expected profit estimation" },
              { name: "Pandas / NumPy", desc: "Data manipulation, segment analysis, and proportion-based allocation" },
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
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Full code, CLV analysis, and presentation slides</p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", flexShrink: 0 }}>
            <a href="https://github.com/Krithikap019/fitech-credit-card" target="_blank" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.9rem 1.6rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              GitHub →
            </a>
            <a href="https://docs.google.com/presentation/d/1f_0S7WBNyJkQXIBJjQLZR2-OrFKGUej_t_6_KzqJAio/edit?slide=id.g33fa2843bcc_0_0#slide=id.g33fa2843bcc_0_0" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 1.6rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
              View Slides →
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
