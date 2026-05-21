"use client";
import Link from "next/link";

export default function SnowflakeETL() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Scalable Data Processing with Snowflake</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A production-style ETL/ELT pipeline integrating multi-source transactional data — CSV, XML, PostgreSQL, and Snowflake Marketplace — into a unified cloud data warehouse with materialized views, geospatial enrichment, and optimized SQL analytics.
        </p>

        {/* Tags + Link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Snowflake", "Python", "SQL", "ETL/ELT", "PostgreSQL", "XML", "Geospatial", "Data Engineering"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://github.com/Krithikap019/snowflake_project" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            GitHub →
          </a>
        </div>

        {/* Scale stats */}
        <div style={{ marginBottom: "3rem", background: "#0d1f18", borderRadius: "8px", padding: "2rem 2.5rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1.5rem" }}>Pipeline at a Glance</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "41", label: "CSV datasets ingested" },
              { num: "4", label: "Data source types" },
              { num: "2", label: "Materialized views" },
              { num: "Cloud", label: "Production-style architecture" },
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
              { icon: "🔄", title: "Automated ETL Pipeline", desc: "Python-automated ingestion of 41 CSV purchase order files using glob + Snowflake PUT/COPY INTO — no manual GUI work. Transformations and data type casting happen at load time." },
              { icon: "📄", title: "XML Invoice Ingestion", desc: "Shredded supplier invoice XML into a normalized Snowflake table where each row represents a single invoice, with structured field extraction during COPY INTO." },
              { icon: "🐘", title: "PostgreSQL Integration", desc: "Extracted supplier data from PostgreSQL using psycopg2 — moving data directly from Postgres to local disk to Snowflake stage without importing into Python/Pandas." },
              { icon: "🌤️", title: "Geospatial Weather Enrichment", desc: "Joined supplier zip codes to NOAA weather station data via latitude/longitude proximity matching using Snowflake Marketplace (Cybersyn) — determining the nearest weather station per zip code." },
              { icon: "📊", title: "Materialized Views", desc: "Built two optimized materialized views: purchase_orders_and_invoices (invoice vs PO amount delta) and supplier_zip_code_weather (daily high temps per supplier zip code)." },
              { icon: "⚡", title: "Query Performance Optimization", desc: "Designed for scalability and cost efficiency — COPY INTO over INSERT INTO, column pruning at load, date type enforcement, and Snowflake-side transformations over Python-side processing." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline architecture */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Pipeline Architecture</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`Data Sources
  ├── 41 CSV files        (monthly purchase order line items)
  ├── XML file            (supplier invoices)
  ├── PostgreSQL table    (supplier master data)
  └── Snowflake Marketplace (NOAA weather via Cybersyn)
           ↓
Staging Layer (Snowflake Internal Stages)
  Python glob → PUT → Internal Stage → COPY INTO
           ↓
Core Tables
  ├── purchases           (41 CSVs unified, POAmount calculated)
  ├── invoices            (XML shredded, one row per invoice)
  ├── suppliers           (from PostgreSQL via psycopg2)
  └── weather_stations    (NOAA + zip-lat/lon proximity join)
           ↓
Materialized Views
  ├── purchase_orders_and_invoices
  │     → invoiced_vs_quoted = AmountExcludingTax − POAmount
  └── supplier_zip_code_weather
        → zip code · date · daily high temperature
           ↓
Final Analytical Join
  purchase_orders_and_invoices
  + suppliers (on SupplierID)
  + supplier_zip_code_weather (on zip code + transaction date)`}
            </pre>
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Designed and automated ETL/ELT pipelines integrating CSV, XML, PostgreSQL, and Snowflake Marketplace into a unified cloud warehouse",
              "Built staging and transformation layers to standardize and consolidate 41 datasets supporting finance and procurement workflows",
              "Developed materialized views for invoice analysis, PO tracking, and spend reporting using advanced SQL",
              "Enriched transactional data with geospatial and weather datasets using latitude/longitude proximity matching",
              "Optimized for scalability and cost efficiency — COPY INTO, column pruning, date type enforcement, Snowflake-side transformations",
              "Delivered a well-documented, production-style group project with all work executed programmatically in Python (no manual GUI work)",
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
              { name: "Snowflake", desc: "Cloud data warehouse — staging, COPY INTO, materialized views, SQL transformations" },
              { name: "Python", desc: "Pipeline automation — glob file iteration, PUT/COPY INTO orchestration, psycopg2 integration" },
              { name: "SQL", desc: "Advanced queries — JOINs, materialized views, calculated fields, geospatial proximity logic" },
              { name: "PostgreSQL", desc: "Source system for supplier master data — extracted via psycopg2 without Python-side loading" },
              { name: "XML", desc: "Supplier invoice ingestion — shredded into normalized table rows during COPY INTO" },
              { name: "Snowflake Marketplace", desc: "NOAA weather data from Cybersyn — daily metrics and station geolocation index" },
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
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>View the full pipeline</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Python + SQL code, staging logic, and materialized view definitions</p>
          </div>
          <a href="https://github.com/Krithikap019/snowflake_project" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            GitHub →
          </a>
        </div>

      </div>
    </main>
  );
}
