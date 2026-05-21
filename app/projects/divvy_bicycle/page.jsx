"use client";
import Link from "next/link";

export default function DivvyBicycle() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Chicago Divvy Bicycle — Usage Analytics & Demand Forecasting</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          An end-to-end analysis of Chicago's Divvy bike-sharing system across 9M+ trip records (2014–2017) — uncovering usage patterns, forecasting 19% demand growth, and delivering station-level resource allocation recommendations.
        </p>

        {/* Tags + Link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Python", "Data Analysis", "Forecasting", "Time Series", "Urban Analytics", "Tableau", "Predictive Modeling"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://docs.google.com/presentation/d/1-ZQGFnyk94XdlSzL0tcNNZ-RsLWsifJagrxOO8_qN5A/edit" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View Slides →
          </a>
        </div>

        {/* Key numbers */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Dataset at a Glance</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "9M+", label: "Trip records analyzed" },
              { num: "2014–17", label: "Data coverage" },
              { num: "19%", label: "Forecasted demand growth" },
              { num: "30", label: "Top routes identified" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "#0a7c52", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What I did */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What I did</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "📊", title: "Trip Pattern Analysis", desc: "Analyzed 9M+ trips across hours, days, and user types — identifying peak commuting hours (5–7 AM, 3–6 PM), weekday vs. weekend patterns, and the dominance of short sub-10-minute trips." },
              { icon: "🌧️", title: "Weather Impact Analysis", desc: "Examined how weather conditions (clear, cloudy, rain/snow, thunderstorms) affect trip duration and frequency across subscriber, dependent, and casual user segments." },
              { icon: "📈", title: "Demand Forecasting", desc: "Predicted future bike usage based on historical trip trends, projecting 19% growth in total trips over the next three years — identifying where station expansion is needed most." },
              { icon: "🗺️", title: "High-Demand Station Mapping", desc: "Identified the top 10 most common start and end stations and top 30 routes, pinpointing flagship stations requiring priority resource allocation." },
              { icon: "💰", title: "Pricing Strategy", desc: "Recommended pricing tiers based on trip duration trends — incentivizing short trips and discouraging prolonged usage to improve system turnover and revenue." },
              { icon: "🚲", title: "Operational Recommendations", desc: "Delivered actionable recommendations on bike availability, inspection frequency, and bike-to-station ratio balancing across high-demand routes." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key findings */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Key Findings</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {[
              { label: "Trip Duration", finding: "Most trips are under 10 minutes — right-skewed distribution confirms bike-sharing is used primarily for short commutes, not leisure rides." },
              { label: "Peak Hours", finding: "Highest usage during commuting windows: 5–7 AM and 3–6 PM. Usage dips significantly from 9 AM–3 PM on weekdays." },
              { label: "Day of Week", finding: "Weekdays drive steady usage led by Monday; weekends see lower volume consistent with non-commuting activity patterns." },
              { label: "Weather", finding: "Clear weather correlates with longer trips across all user types. Rain, snow, and thunderstorms significantly reduce both trip frequency and duration." },
              { label: "Demand Forecast", finding: "19% growth projected over the next 3 years — requiring significant station and bike capacity expansion at high-frequency locations." },
            ].map((r) => (
              <div key={r.label} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "6px", padding: "1.1rem 1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "3px 10px", borderRadius: "20px", flexShrink: 0, marginTop: "2px" }}>{r.label}</span>
                <span style={{ fontSize: "0.85rem", color: "#3a5a4a", lineHeight: "1.7" }}>{r.finding}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Analyzed 9M+ Divvy trip records (2014–2017) across trip durations, user types, hours, and days",
              "Identified peak commuting patterns and weather impact on usage across subscriber and casual user segments",
              "Forecasted 19% demand growth over 3 years and mapped the top 30 high-demand routes for expansion planning",
              "Pinpointed flagship stations requiring priority resource allocation for capacity and reliability",
              "Developed pricing tier recommendations based on trip duration distributions to improve system turnover",
              "Delivered operational strategies for bike availability, inspection schedules, and station-level bike balancing",
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
              { name: "Python", desc: "Data processing, analysis, and forecasting pipeline" },
              { name: "Pandas / NumPy", desc: "Trip data manipulation across 9M+ records" },
              { name: "Time Series Forecasting", desc: "Historical trend modeling to project 19% demand growth" },
              { name: "Data Visualization", desc: "Hourly, daily, and route-level usage charts and station maps" },
              { name: "Tableau", desc: "Interactive dashboards for station utilization and route analysis" },
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
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Trip patterns, demand forecast, station maps, and recommendations</p>
          </div>
          <a href="https://docs.google.com/presentation/d/1-ZQGFnyk94XdlSzL0tcNNZ-RsLWsifJagrxOO8_qN5A/edit" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            View Slides →
          </a>
        </div>

      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 3.5rem 4rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)", marginTop: "2rem" }}>
  <Link href="/projects/target_bi" style={{ textDecoration: "none" }}>
    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>← Previous Project</p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>Target Brazil – Sales Analysis</p>
  </Link>
  <Link href="/projects/creative_gaming" style={{ textDecoration: "none", textAlign: "right" }}>
    <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.4rem" }}>Next Project →</p>
    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18" }}>Creative Gaming – Uplift Modeling</p>
  </Link>
</div>
    </main>
  );
}
