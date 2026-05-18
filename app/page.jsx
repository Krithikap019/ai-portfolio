"use client";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: "chat",
    icon: "🤖",
    title: "AI Chat Assistant",
    description: "Claude-powered chatbot with memory, custom personas, and Markdown rendering.",
    tags: ["Claude API", "Next.js"],
    color: "#6c63ff",
    href: "/projects/chat",
  },
  {
    id: "image",
    icon: "🎨",
    title: "Image Analyzer",
    description: "Upload any image and get detailed AI-generated descriptions and insights.",
    tags: ["Vision API", "React"],
    color: "#ff6584",
    href: "/projects/image",
  },
  {
    id: "summarizer",
    icon: "📄",
    title: "Doc Summarizer",
    description: "Paste any text and get a clean, structured summary in seconds.",
    tags: ["Claude API", "FastAPI"],
    color: "#06b6d4",
    href: "/projects/summarizer",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "'Syne', sans-serif", background: "#0a0a0f", minHeight: "100vh", color: "#e8e8f0" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2rem 3rem", borderBottom: "1px solid #1e1e2e" }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem" }}>
          your<span style={{ color: "#6c63ff" }}>.</span>name
        </div>
        <div style={{ display: "flex", gap: "2rem", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b6b80" }}>
          <Link href="#projects" style={{ color: "inherit", textDecoration: "none" }}>Work</Link>
          <Link href="#about" style={{ color: "inherit", textDecoration: "none" }}>About</Link>
          <Link href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</Link>
        </div>
        <a href="mailto:you@email.com" style={{ background: "#6c63ff", color: "#fff", padding: "0.5rem 1.2rem", borderRadius: "20px", fontSize: "0.8rem", textDecoration: "none", letterSpacing: "0.05em" }}>
          Hire me
        </a>
      </nav>

      {/* Hero */}
      <section style={{ padding: "5rem 3rem 3rem", maxWidth: "900px" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6c63ff", marginBottom: "1rem" }}>
          — AI Engineer & Builder
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.1", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
          Building tools with<br /><em style={{ color: "#6c63ff" }}>artificial intelligence</em>
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#6b6b80", lineHeight: "1.8", maxWidth: "520px", marginBottom: "2.5rem" }}>
          I design and build AI-powered applications — from intelligent chatbots to computer vision tools.
          Each project solves a real problem.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#projects" style={{ background: "#6c63ff", color: "#fff", padding: "0.8rem 1.8rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
            View my projects
          </a>
          <a href="#about" style={{ border: "1px solid #1e1e2e", color: "#e8e8f0", padding: "0.8rem 1.8rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
            About me
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "3rem" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b6b80", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          Featured Projects
          <span style={{ flex: 1, height: "1px", background: "#1e1e2e", display: "block" }} />
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.2rem" }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "3rem", borderTop: "1px solid #1e1e2e" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b6b80", marginBottom: "2rem" }}>
          About me
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", marginBottom: "1rem" }}>
              Hi, I'm [Your Name]
            </h2>
            <p style={{ color: "#6b6b80", lineHeight: "1.8", marginBottom: "1rem" }}>
              I'm an AI engineer who loves building tools that make people's lives easier.
              I work mostly with the Claude API, Next.js, and Python to ship real products fast.
            </p>
            <p style={{ color: "#6b6b80", lineHeight: "1.8" }}>
              Currently open to freelance projects and full-time roles.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[["6+", "AI Projects"], ["3", "APIs Used"], ["100%", "Vercel Hosted"], ["0", "Downtime"]].map(([num, label]) => (
              <div key={label} style={{ background: "#12121a", border: "1px solid #1e1e2e", borderRadius: "8px", padding: "1.2rem", textAlign: "center" }}>
                <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: "#6c63ff", display: "block" }}>{num}</span>
                <span style={{ fontSize: "0.7rem", color: "#6b6b80", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ margin: "2rem 3rem 3rem", background: "#12121a", border: "1px solid #1e1e2e", borderRadius: "12px", padding: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: "0.4rem" }}>Let's build something</h3>
          <p style={{ color: "#6b6b80", fontSize: "0.9rem" }}>Open to freelance projects and full-time roles</p>
        </div>
        <div style={{ display: "flex", gap: "0.8rem" }}>
          <a href="https://github.com/yourusername" target="_blank" style={{ border: "1px solid #1e1e2e", color: "#e8e8f0", padding: "0.7rem 1.4rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.85rem" }}>GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" style={{ border: "1px solid #1e1e2e", color: "#e8e8f0", padding: "0.7rem 1.4rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.85rem" }}>LinkedIn</a>
          <a href="mailto:you@email.com" style={{ background: "#6c63ff", color: "#fff", padding: "0.7rem 1.4rem", borderRadius: "4px", textDecoration: "none", fontSize: "0.85rem" }}>Get in touch</a>
        </div>
      </section>
    </main>
  );
}
