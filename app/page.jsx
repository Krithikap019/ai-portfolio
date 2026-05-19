"use client";
import Link from "next/link";

const projects = [
  {
    id: "chat",
    icon: "🤖",
    title: "AI Chat Assistant",
    description: "Claude-powered chatbot with memory, custom personas, and Markdown rendering.",
    tags: ["Claude API", "Next.js"],
    href: "/projects/chat",
  },
  {
    id: "image",
    icon: "🎨",
    title: "Image Analyzer",
    description: "Upload any image and get detailed AI-generated descriptions and insights.",
    tags: ["Vision API", "React"],
    href: "/projects/image",
  },
  {
    id: "summarizer",
    icon: "📄",
    title: "Doc Summarizer",
    description: "Paste any text and get a clean, structured summary in seconds.",
    tags: ["Claude API", "Python"],
    href: "/projects/summarizer",
  },
];

const skills = ["Python", "Machine Learning", "Next.js", "Data Science", "Claude API", "React", "SQL", "TensorFlow"];

function ProjectCard({ icon, title, description, tags, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{ background: "#fff", border: "1px solid #efefef", borderRadius: "8px", padding: "1.8rem", height: "100%", transition: "border-color 0.2s, transform 0.2s", cursor: "pointer" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0a7c52"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#efefef"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#0d1f18", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.75", marginBottom: "1.2rem" }}>{description}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {tags.map((tag) => (
              <span key={tag} style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#f0f8f5", color: "#064d33", padding: "3px 10px", borderRadius: "20px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0a7c52" }}>View →</span>
        </div>
      </div>
    </Link>
  );
}

function HexPhoto() {
  const dot = (style) => (
    <div style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#0a7c52", ...style }} />
  );
  return (
    <div style={{ position: "relative", width: "380px", height: "440px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg style={{ position: "absolute", width: "420px", height: "480px", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} viewBox="0 0 420 480" fill="none">
        <polygon points="210,10 400,95 400,385 210,470 20,385 20,95" stroke="#0a7c52" strokeWidth="1.5" strokeDasharray="8 5" fill="none" opacity="0.45"/>
        <polygon points="210,26 384,107 384,373 210,454 36,373 36,107" stroke="#0a7c52" strokeWidth="0.8" fill="none" opacity="0.2"/>
        {[["210","10"],["400","95"],["400","385"],["210","470"],["20","385"],["20","95"]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="#0a7c52" opacity={i%2===0?"1":"0.5"}/>
        ))}
      </svg>
      <div style={{
        width: "360px",
        height: "420px",
        clipPath: "polygon(50% 0%, 100% 22%, 100% 78%, 50% 100%, 0% 78%, 0% 22%)",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
        background: "#0a7c52",
      }}>
        <img src="/krithika.jpg" alt="Krithika Suwarna" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>
      {dot({ top: "0px", left: "50%", transform: "translateX(-50%)", zIndex: 3 })}
      {dot({ bottom: "0px", left: "50%", transform: "translateX(-50%)", zIndex: 3 })}
      {dot({ top: "22%", left: "0px", zIndex: 3, width: "8px", height: "8px", background: "#d4ede5", border: "2px solid #0a7c52" })}
      {dot({ top: "22%", right: "0px", zIndex: 3, width: "8px", height: "8px", background: "#d4ede5", border: "2px solid #0a7c52" })}
      {dot({ bottom: "22%", left: "0px", zIndex: 3, width: "8px", height: "8px" })}
      {dot({ bottom: "22%", right: "0px", zIndex: 3, width: "8px", height: "8px" })}
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: "#f4f8f6", minHeight: "100vh", color: "#0d1f18" }}>

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 3.5rem", borderBottom: "1px solid rgba(10,124,82,0.2)", background: "#f4f8f6" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600 }}>
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

      <section style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "2rem", alignItems: "center", padding: "5rem 3.5rem 4rem" }}>
        <div>
          <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ width: "24px", height: "1.5px", background: "#0a7c52", display: "inline-block" }} />
            AI Engineer & Data Scientist
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem, 8vw, 7rem)", lineHeight: "1", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>
            Krithika Suwarna
          </h1>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "1.1", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1.5rem", color: "#0d1f18" }}>
            I build <em style={{ color: "#0a7c52", fontStyle: "italic" }}>intelligent</em> tools & models that matter.
          </h2>
          <p style={{ fontSize: "1rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "600px", marginBottom: "2.5rem" }}>
            From machine learning pipelines to full-stack AI applications — I turn complex data into products people actually use.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2.5rem" }}>
            <a href="#projects" style={{ background: "#0a7c52", color: "#fff", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>View my work</a>
            <a href="#about" style={{ color: "#0a7c52", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderBottom: "2px solid #0a7c52", paddingBottom: "2px" }}>About me →</a>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {skills.map((s) => (
              <span key={s} style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "4px 12px", borderRadius: "20px" }}>{s}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "2rem" }}>
          <HexPhoto />
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(10,124,82,0.2)", borderBottom: "1px solid rgba(10,124,82,0.2)", padding: "1rem 3.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center", background: "#edf5f1" }}>
        {skills.map((s, i) => (
          <span key={s} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#064d33" }}>
            {i > 0 && <span style={{ color: "#0a7c52", opacity: 0.4 }}>◆</span>}
            {s}
          </span>
        ))}
      </div>

      <section id="projects" style={{ padding: "5rem 3.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Selected work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600 }}>Featured Projects</h2>
          </div>
          <a href="#" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0a7c52", textDecoration: "none", borderBottom: "2px solid #0a7c52", paddingBottom: "2px" }}>View all →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
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

      {/* Experience */}
      <section style={{ padding: "5rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Work</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, marginBottom: "3rem", textAlign: "center" }}>Experience</h2>
        <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1.5px", background: "rgba(10,124,82,0.25)", transform: "translateX(-50%)" }} />
          {[
            { company: "Experian", role: "Data Scientist", location: "San Diego, CA", period: "Mar–Jun 2025", type: "Intern", side: "left" },
            { company: "Big Table", role: "Business Analyst", location: "San Diego, CA", period: "Feb–May 2025", type: "Intern", side: "right" },
            { company: "BroadCom", role: "R&D Engineer 2", location: "Bangalore, India", period: "Nov 2023–Jun 2024", type: "Full-time", side: "left" },
            { company: "VMware", role: "Member of Technical Staff 2", location: "Bangalore, India", period: "Jul 2021–Nov 2023", type: "Full-time", side: "right" },
            { company: "VMware", role: "R&D Intern", location: "Bangalore, India", period: "Jan–Jul 2021", type: "Intern", side: "left" },
            { company: "QtPi", role: "Full Stack Development Intern", location: "Bangalore, India", period: "May–Jul 2019", type: "Intern", side: "right" },
          ].map((exp, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: "0 1rem", marginBottom: "2rem", alignItems: "start" }}>
              {/* Left content or empty */}
              <div style={{ textAlign: "right", paddingRight: "1rem", paddingTop: "0.2rem" }}>
                {exp.side === "left" && (
                  <>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18", marginBottom: "0.2rem" }}>{exp.role}</h3>
                    <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0a7c52", marginBottom: "0.2rem" }}>{exp.company}</p>
                    <p style={{ fontSize: "0.78rem", color: "#888", marginBottom: "0.3rem" }}>{exp.location}</p>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.72rem", color: "#3a5a4a" }}>{exp.period}</span>
                      <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "20px", background: exp.type === "Full-time" ? "#d4ede5" : "#f0f8f5", color: "#064d33", border: "1px solid rgba(10,124,82,0.2)" }}>{exp.type}</span>
                    </div>
                  </>
                )}
              </div>
              {/* Center dot */}
              <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.4rem" }}>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#0a7c52", border: "3px solid #f4f8f6", zIndex: 1, flexShrink: 0 }} />
              </div>
              {/* Right content or empty */}
              <div style={{ paddingLeft: "1rem", paddingTop: "0.2rem" }}>
                {exp.side === "right" && (
                  <>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 600, color: "#0d1f18", marginBottom: "0.2rem" }}>{exp.role}</h3>
                    <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0a7c52", marginBottom: "0.2rem" }}>{exp.company}</p>
                    <p style={{ fontSize: "0.78rem", color: "#888", marginBottom: "0.3rem" }}>{exp.location}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.72rem", color: "#3a5a4a" }}>{exp.period}</span>
                      <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "20px", background: exp.type === "Full-time" ? "#d4ede5" : "#f0f8f5", color: "#064d33", border: "1px solid rgba(10,124,82,0.2)" }}>{exp.type}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ padding: "5rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Academic</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.8rem", fontWeight: 600, marginBottom: "3rem" }}>Education</h2>
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          <div style={{ position: "absolute", left: "6px", top: 0, bottom: 0, width: "1.5px", background: "rgba(10,124,82,0.2)" }} />
          {[
            {
              school: "University of San Diego, California",
              degree: "Master of Science in Business Analytics",
              period: "Jul 2024 – Dec 2025",
              coursework: "Customer Analytics, Web Mining, Recommender Systems, Large Data Analysis, SQL & ETL, Statistics, Business Intelligence, Scalable Analytics",
            },
            {
              school: "PES University, Bangalore, India",
              degree: "B-Tech in Computer Science — Data Science Specialisation",
              period: "Aug 2017 – May 2021",
              coursework: "Data Analytics, Machine Learning, Big Data, Cloud Computing, Algorithms, OOP, Linear Algebra, Web Technologies, Operating Systems",
            },
          ].map((edu, i) => (
            <div key={i} style={{ position: "relative", marginBottom: "2rem", paddingLeft: "2rem" }}>
              <div style={{ position: "absolute", left: "-1.65rem", top: "6px", width: "12px", height: "12px", borderRadius: "50%", background: "#0a7c52", border: "3px solid #f4f8f6", zIndex: 1 }} />
              <div style={{ background: "#fff", border: "1px solid #efefef", borderRadius: "8px", padding: "1.4rem 1.5rem", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0a7c52"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#efefef"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.3rem" }}>{edu.school}</h3>
                    <p style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0a7c52" }}>{edu.degree}</p>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#3a5a4a", flexShrink: 0, marginLeft: "2rem" }}>{edu.period}</span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "#888", lineHeight: "1.7" }}>
                  <span style={{ fontWeight: 700, color: "#3a5a4a" }}>Coursework: </span>{edu.coursework}
                </p>
              </div>
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
          <a href="https://www.linkedin.com/in/krithika-suwarna-b8240b17b/" target="_blank" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.75rem 1.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>LinkedIn</a>
          <a href="mailto:krithikap019@gmail.com" style={{ background: "#fff", color: "#0a7c52", padding: "0.75rem 1.5rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>Get in touch</a>
        </div>
      </section>

    </main>
  );
}