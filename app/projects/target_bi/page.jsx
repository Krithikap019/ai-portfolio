"use client";
import Link from "next/link";

export default function TargetBrazil() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Target Brazil — Performance, Sales & Revenue Analysis</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          Interactive dashboards and advanced analytics across 100K+ orders — uncovering revenue growth patterns, city-level sales performance, delivery efficiency gaps, and supply chain delays to drive data-informed business decisions.
        </p>

        {/* Tags + Link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Tableau", "SQL", "Python", "Data Visualization", "Supply Chain", "Revenue Analytics", "Dashboard Design"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://docs.google.com/presentation/d/1Ye9X2mYgGsFly5YBWhz_XkT9URFK1iSvEtt8n292mO8/edit?slide=id.p7#slide=id.p7" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View Slides →
          </a>
        </div>

        {/* Stats */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Dataset at a Glance</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "100K+", label: "Orders analyzed" },
              { num: "3", label: "Core analysis areas" },
              { num: "City-level", label: "Granularity" },
              { num: "Cross-team", label: "Impact scope" },
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
              { icon: "📊", title: "Interactive Dashboards", desc: "Designed and implemented visually engaging dashboards across 100K+ orders — tracking revenue growth, city-wise sales performance, and delivery efficiency in a single view." },
              { icon: "🏙️", title: "City-Level Sales Performance", desc: "Identified high-revenue cities and top-performing regions to prioritize resource allocation, reduce logistics costs, and tailor growth strategies geographically." },
              { icon: "📦", title: "Product Category Analysis", desc: "Surfaced high-performing product categories driving margin contribution, enabling targeted inventory and promotional decisions to maximize profitability." },
              { icon: "🚚", title: "Delivery Efficiency Analysis", desc: "Analyzed delivery timelines across cities and regions — identifying bottlenecks, delay patterns, and logistics inefficiencies to improve fulfillment performance." },
              { icon: "💳", title: "Payment Trend Analysis", desc: "Examined customer payment method preferences, installment behaviors, and payment failure patterns to inform checkout optimization and reduce transaction friction." },
              { icon: "⚠️", title: "Supply Chain & Cancellation Patterns", desc: "Analyzed supply chain delays and order cancellation patterns — providing cross-functional teams with actionable insights to reduce churn and improve operational reliability." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Analysis areas */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Three Core Analysis Areas</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              {
                area: "Revenue & Sales Performance",
                items: ["Revenue growth patterns over time", "City-wise and region-wise sales breakdown", "High-performing product categories by revenue and margin"],
                color: "#0a7c52",
              },
              {
                area: "Logistics & Delivery Efficiency",
                items: ["Delivery timeline analysis by city and seller", "Supply chain delay identification and root cause patterns", "Order cancellation trends and contributing factors"],
                color: "#1a6e8c",
              },
              {
                area: "Customer & Payment Analytics",
                items: ["Payment method distribution and installment preferences", "Payment failure and friction patterns", "Customer behavior insights to inform retention strategy"],
                color: "#7c520a",
              },
            ].map((section) => (
              <div key={section.area} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "8px", padding: "1.4rem 1.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <div style={{ width: "4px", height: "20px", borderRadius: "2px", background: section.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "1rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: "#0d1f18" }}>{section.area}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", paddingLeft: "1.2rem" }}>
                  {section.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <span style={{ color: section.color, fontWeight: 700, flexShrink: 0, fontSize: "0.8rem" }}>→</span>
                      <span style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.6" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Designed interactive dashboards analyzing 100K+ orders to surface revenue, sales, and delivery insights",
              "Identified high-revenue cities and top product categories to guide logistics and profit margin strategy",
              "Analyzed customer payment trends including method preferences, installment behavior, and failure patterns",
              "Surfaced supply chain delay patterns and cancellation drivers for cross-functional operational improvement",
              "Enabled data-driven resource allocation across sales, logistics, and customer experience teams",
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
              { name: "Tableau", desc: "Interactive dashboard design for revenue, sales, and delivery performance" },
              { name: "SQL", desc: "Data extraction, aggregation, and city-level performance queries" },
              { name: "Python", desc: "Data cleaning, transformation, and advanced analytics pipeline" },
              { name: "Pandas / NumPy", desc: "Order-level data manipulation across 100K+ records" },
              { name: "Data Visualization", desc: "Charts, maps, and trend analysis for cross-functional stakeholder communication" },
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
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>View the full analysis</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Dashboards, revenue insights, and operational recommendations</p>
          </div>
          <a href="https://docs.google.com/presentation/d/1Ye9X2mYgGsFly5YBWhz_XkT9URFK1iSvEtt8n292mO8/edit?slide=id.p7#slide=id.p7" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            View Slides →
          </a>
        </div>

      </div>
    </main>
  );
}
