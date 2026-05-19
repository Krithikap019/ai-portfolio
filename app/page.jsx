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
    color: "#0a7c52",
    href: "/projects/chat",
  },
  {
    id: "image",
    icon: "🎨",
    title: "Image Analyzer",
    description: "Upload any image and get detailed AI-generated descriptions and insights.",
    tags: ["Vision API", "React"],
    color: "#0a7c52",
    href: "/projects/image",
  },
  {
    id: "summarizer",
    icon: "📄",
    title: "Doc Summarizer",
    description: "Paste any text and get a clean, structured summary in seconds.",
    tags: ["Claude API", "Python"],
    color: "#0a7c52",
    href: "/projects/summarizer",
  },
];

const skills = ["Python", "Machine Learning", "Next.js", "Data Science", "Claude API", "React", "SQL", "TensorFlow"];

export default function Home() {
  return (
    <main style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#f4f8f6", minHeight: "100vh", color: "#0d1f18" }}>

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 3.5rem", borderBottom: "1px solid rgba(10,124,82,0.2)", background: "#f4f8f6" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, letterSpacing: "0.02em" }}>
          Krithika<span style={{ color: "#0a7c52" }}>.</span>S
        </div>
        <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Link href="#projects" style={{ color: "#0d1f18", textDecoration: "none" }}>Work</Link>
          <Link href="#about" style={{ color: "#0d1f18", textDecoration: "none" }}>About</Link>
          <Link href="#contact" style={{ color: "#0d1f18", textDecoration: "none" }}>Contact</Link>
        </div>
        <a href="mailto:you@email.com" style={{ background: "#0a7c52", color: "#fff", padding: "0.6rem 1.5rem", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
          Hire me
        </a>
      </nav>

      <section style={{ padding: "6rem 3.5rem 5rem", maxWidth: "820px" }}>
        <div style={{ display: "flex", gap: "0.6rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {["AI Engineer", "Data Scientist", "Developer"].map((t, i) => (
            <span key={t} style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "20px", background: i === 0 ? "#d4ede5" : "#e8f4f0", color: "#064d33" }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.5rem, 7vw, 5.5rem)", lineHeight: "1.05", letterSpacing: "-0.01em", marginBottom: "2rem", fontWeight: 600 }}>
          I build intelligent<br />
          <em style={{ color: "#0a7c52", fontStyle: "italic" }}>tools & models</em><br />
          that matter.
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "500px", marginBottom: "3rem" }}>
          From machine learning pipelines to full-stack AI applications — I turn complex data into products people actually use.
        </p>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="#projects" style={{ background: "#0a7c52", color: "#fff", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
            View my work
          </a>
          <a href="#about" style={{ color: "#0a7c52", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderBottom: "2px solid #0a7c52", paddingBottom: "2px" }}>
            About me →
          </a>
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(10,124,82,0.2)", borderBottom: "1px solid rgba(10,124,82,0.2)", padding: "1rem 3.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center", background: "#edf5f1" }}>
        {skills.map((s, i) => (
          <span key={s} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#064d33" }}>
            {i > 0 && <span style={{ color: "#0a7c52", opacity: 0.4 }}>◆</span>}
            {s}
          </span>
        ))}
      </div>

      <section id="projects" style={{ padding: "5rem 3.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Selected work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, letterSpacing: "-0.01em" }}>Featured Projects</h2>
          </div>
          <a href="#" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0a7c52", textDecoration: "none", borderBottom: "2px solid #0a7c52", paddingBottom: "2px" }}>View all →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: "5rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "1rem" }}>About me</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, lineHeight: "1.1", marginBottom: "1.5rem" }}>Hi, I'm Krithika</h2>
          <p style={{ fontSize: "1rem", color: "#3a5a4a", lineHeight: "1.85", marginBottom: "1rem" }}>
            I'm an AI engineer and data scientist who loves building tools that make people's lives easier. I work with Python, the Claude API, and Next.js to ship real products fast.
          </p>
          <p style={{ fontSize: "1rem", color: "#3a5a4a", lineHeight: "1.85" }}>
            Currently open to freelance projects and full-time roles.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[["6+", "AI Projects"], ["3", "APIs Used"], ["100%", "Vercel Hosted"], ["0", "Downtime"]].map(([num, label]) => (
            <div key={label} style={{ background: "#edf5f1", borderRadius: "8px", padding: "1.5rem", textAlign: "center", border: "1px solid rgba(10,124,82,0.15)" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0a7c52", display: "block" }}>{num}</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#3a5a4a", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ margin: "0 3.5rem 4rem", background: "#0a7c52", borderRadius: "8px", padding: "3rem 3.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>Let's build something</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Open to freelance projects and full-time roles</p>
        </div>
        <div style={{ display: "flex", gap: "0.8rem" }}>
          <a href="https://github.com/Krithikap019" target="_blank" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>GitHub</a>
          <a href="https://linkedin.com/in/krithika-suwarna" target="_blank" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>LinkedIn</a>
          <a href="mailto:you@email.com" style={{ background: "#fff", color: "#0a7c52", padding: "0.75rem 1.5rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Get in touch</a>
        </div>
      </section>

    </main>
  );
}