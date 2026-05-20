"use client";
import Link from "next/link";

export default function ArtGalleryProject() {
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
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Art Gallery Database Management System</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A full-stack relational database system for managing an art gallery ecosystem — artists, artworks, exhibitions, auctions, and customers — with role-based access control and complex analytical queries.
        </p>

        {/* Tags + Paper link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["PostgreSQL", "PHP", "SQL", "ER Modeling", "RBAC", "Database Design", "Full-Stack"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://publuu.com/flip-book/1112801/2477878/page/28" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View Research Paper →
          </a>
        </div>

        {/* What it does */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What it does</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🗄️", title: "Normalized Schema", desc: "8 core entities — Gallery, Employee, Artist, Artwork, Customer, Exhibition, Auction, Payment — with full referential integrity across all relationships." },
              { icon: "🔐", title: "Role-Based Access", desc: "Three user roles (Manager, Employee, Customer) with distinct CRUD permissions, protecting sensitive financial and operational data." },
              { icon: "🎨", title: "Artwork Lifecycle", desc: "Tracks artworks from creation through exhibition and auction to sale, capturing artist attribution, genre, pricing, and buyer history." },
              { icon: "📊", title: "Analytical Queries", desc: "Complex SQL with JOINs, subqueries, GROUP BY, and NOT EXISTS — surfacing unsold artworks, high-engagement artists, and genre-based sales patterns." },
              { icon: "🏛️", title: "Exhibition & Auction Management", desc: "Branches host exhibitions and auctions with date tracking, artwork assignments, and auction-specific payment reconciliation." },
              { icon: "🌐", title: "PHP Web Interface", desc: "Full-stack integration with real-time CRUD operations, authentication, and UI-driven queries from a PHP frontend to PostgreSQL backend." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Database schema */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Schema Design</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`Core Entities (8)
  ArtGallery → Branch locations, contact info
  Employee   → Staff, role, branch assignment
  Artist     → Bio, nationality, genre specialty
  Artwork    → Title, medium, price, artist FK
  Customer   → Profile, purchase history
  Exhibition → Branch, dates, artworks displayed
  Auction    → Branch, reserve price, winner
  Payment    → Type, amount, artwork/auction FK

Key Relationships
  Artist     ──creates──▶  Artwork
  Customer   ──purchases──▶ Artwork
  Branch     ──hosts──────▶ Exhibition / Auction
  Auction    ──records────▶ Payment`}
            </pre>
          </div>
        </div>

        {/* Key contributions */}
        <div style={{ marginBottom: "3rem", background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              "Researched and modeled requirements for 3 distinct user roles across a multi-branch gallery system",
              "Designed a normalized PostgreSQL schema with PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, and CHECK constraints",
              "Built an ER model capturing real-world relationships — artists creating artworks, customers purchasing, branches hosting events",
              "Implemented role-based access control at the application layer using PHP + SQL",
              "Wrote complex analytical queries using JOINs, subqueries, GROUP BY, HAVING, and NOT EXISTS",
              "Integrated PostgreSQL with a PHP web interface for full real-time CRUD and authentication",
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
              { name: "PostgreSQL", desc: "Relational database engine with full constraint enforcement" },
              { name: "PHP", desc: "Backend web interface for CRUD operations and user authentication" },
              { name: "SQL", desc: "Complex queries — JOINs, subqueries, GROUP BY, HAVING, NOT EXISTS" },
              { name: "ER Modeling", desc: "Entity-relationship design capturing real-world gallery workflows" },
              { name: "RBAC", desc: "Role-based access control for Manager, Employee, and Customer tiers" },
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
{`art-gallery-db/
├── schema/
│   ├── create_tables.sql     ← Entity definitions + constraints
│   ├── relationships.sql     ← Foreign keys + referential integrity
│   └── seed_data.sql         ← Sample gallery data
├── queries/
│   ├── analytics.sql         ← Reporting + analytical queries
│   └── rbac_views.sql        ← Role-scoped views
├── web/
│   ├── index.php             ← Login + role routing
│   ├── manager/              ← Manager CRUD interface
│   ├── employee/             ← Employee interface
│   └── customer/             ← Customer browsing + purchase
└── docs/
    ├── ER_diagram.png
    └── report.pdf`}
            </pre>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#0a7c52", borderRadius: "8px", padding: "2.5rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>Read the research paper</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Full schema design, ER diagrams, and query documentation</p>
          </div>
          <a href="https://publuu.com/flip-book/1112801/2477878/page/28" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            View Paper →
          </a>
        </div>

      </div>
    </main>
  );
}
