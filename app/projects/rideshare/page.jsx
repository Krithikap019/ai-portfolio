"use client";
import Link from "next/link";

export default function RideshareDBaaS() {
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
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Cloud Computing · Academic Project</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: "1.05", marginBottom: "1.5rem" }}>Mini DBaaS for Rideshare</h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2rem" }}>
          A fully dockerized Database-as-a-Service platform for a rideshare application — featuring RESTful APIs, message queuing via RabbitMQ, distributed coordination via Zookeeper, and a fault-tolerant master-slave database architecture deployed on AWS EC2.
        </p>

        {/* Tags + GitHub link */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
          {["Docker", "Flask", "REST API", "RabbitMQ", "Zookeeper", "AWS EC2", "PostgreSQL", "MongoDB", "React"].map((t) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{t}</span>
          ))}
          <a href="https://github.com/Krithikap019/PES-University/tree/main/Cloud%20Computing-%20Mini%20DBaaS%20for%20Rideshare" target="_blank" style={{ marginLeft: "auto", background: "#0a7c52", color: "#fff", padding: "0.75rem 1.8rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View on GitHub →
          </a>
        </div>

        {/* What it does */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>What it does</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🚗", title: "Rideshare API", desc: "RESTful endpoints for user registration, ride creation, and ride pooling logic." },
              { icon: "📨", title: "Message Queuing", desc: "RabbitMQ handles async communication between microservices for reliable message delivery." },
              { icon: "🔗", title: "Distributed Coordination", desc: "Zookeeper manages distributed service coordination and leader election across nodes." },
              { icon: "🗄️", title: "Master-Slave DB", desc: "Fault-tolerant database architecture with master writes and slave reads for high availability." },
              { icon: "☁️", title: "AWS Deployment", desc: "Deployed across AWS EC2 instances ensuring scalability and cloud-native operations." },
              { icon: "🐳", title: "Fully Dockerized", desc: "Entire stack containerized with Docker for consistent, reproducible deployments." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.15)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Contributions */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Key Contributions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { num: "01", text: "Developed a fully dockerized RESTful application for user registration, ride creation, and pooling, leveraging RabbitMQ for message queuing and Zookeeper for distributed coordination." },
              { num: "02", text: "Designed and deployed a fault-tolerant, highly available master-slave database architecture on AWS EC2 instances, ensuring data consistency, scalability, and seamless operations in a cloud environment." },
            ].map((c) => (
              <div key={c.num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", padding: "1.2rem 1.5rem", background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "8px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "rgba(10,124,82,0.25)", flexShrink: 0, lineHeight: 1 }}>{c.num}</span>
                <p style={{ fontSize: "0.88rem", color: "#3a5a4a", lineHeight: "1.75" }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Architecture</h2>
          <div style={{ background: "#0d1f18", borderRadius: "8px", padding: "2rem" }}>
            <pre style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "#9fe1cb", lineHeight: "2", margin: 0 }}>
{`React Frontend
      ↓
Flask REST API (Dockerized)
      ↓
RabbitMQ (Message Queue)
      ↓
Zookeeper (Distributed Coordination)
      ↓
Master DB (PostgreSQL) → Slave DBs (Read Replicas)
      ↓
AWS EC2 (Cloud Deployment)`}
            </pre>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Tech Stack</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { name: "Flask", desc: "RESTful API backend for all rideshare operations" },
              { name: "Docker", desc: "Full containerization of the application stack" },
              { name: "RabbitMQ", desc: "Async message queuing between microservices" },
              { name: "Zookeeper", desc: "Distributed coordination and leader election" },
              { name: "PostgreSQL", desc: "Primary relational database with master-slave replication" },
              { name: "MongoDB", desc: "NoSQL storage for flexible data structures" },
              { name: "React", desc: "Frontend interface for the rideshare platform" },
              { name: "AWS EC2", desc: "Cloud deployment and infrastructure management" },
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
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>View the code</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Full source code available on GitHub</p>
          </div>
          <a href="https://github.com/Krithikap019/PES-University/tree/main/Cloud%20Computing-%20Mini%20DBaaS%20for%20Rideshare" target="_blank" style={{ background: "#fff", color: "#0a7c52", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", flexShrink: 0 }}>
            View on GitHub →
          </a>
        </div>

      </div>
    </main>
  );
}