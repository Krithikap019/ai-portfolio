"use client";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
  id: "conversation_ai",
  icon: "🤖",
  title: "AI Conversation Intelligence",
  description: "AI-powered system that analyzes conversations using NLP and transformer models to extract insights, detect intent and sentiment.",
  tags: ["Python", "Streamlit", "NLP"],
  color: "#0a7c52",
  href: "/projects/ai_conversation",
},
{
    id: "AI summarizer",
    icon: "📄",
    title: "AI Financial Report Analyzer",
    description: "RAG-powered system that turns 10-K filings and earnings transcripts into a conversational assistant. Ask questions, get citation-backed answers with page references.",
    tags: ["Python", "RAG", "FAISS"],
    href: "projects/ai_fin_analyser",
  },
  {
    id: "image",
    icon: "🎨",
    title: "Image Analyzer",
    description: "Upload any image and get detailed AI-generated descriptions and insights.",
    tags: ["Vision API", "React"],
    href: "/projects/image",
  },
];

const skills = ["Python", "SQL", "Machine Learning", "LLM System", "NLP & RAG", "Tableau", "Snowflake", "PyTorch", "A/B Testing", "Docker", "AWS", "React"];;

function ExperienceTimeline() {
  const [selected, setSelected] = useState(null);

  const experiences = [
    {
      id: 0, role: "Research Scientist", company: "UCSD Empathy & Emotion Lab", location: "San Diego, CA",
      period: "Dec 2025–Present", type: "Full-time", side: "left",
      desc: "Conducting AI-driven research on human emotion and empathy using experimentation and predictive modeling. Developing machine learning models to analyze behavioral patterns and build intelligent systems that understand human affect.",
      tags: ["AI", "Experimentation", "Predictive Modeling", "Python"],
    },
    {
      id: 1, role: "Data Scientist", company: "Experian", location: "San Diego, CA",
      period: "Mar–Jun 2025", type: "Intern", side: "right",
      desc: "Developed predictive models to identify high-value customer segments and optimize marketing campaign targeting. Built end-to-end ML pipelines using XGBoost and Python to drive QuickBooks upgrade decisions.",
      tags: ["XGBoost", "Python", "ML", "Regression"],
    },
    {
      id: 2, role: "Business Analyst", company: "Big Table", location: "San Diego, CA",
      period: "Feb–May 2025", type: "Intern", side: "left",
      desc: "Analyzed large-scale business datasets to surface actionable insights for product and revenue strategy. Created dashboards and reports to support data-driven decision-making across teams.",
      tags: ["SQL", "Tableau", "Data Analysis", "Dashboards"],
    },
    {
      id: 3, role: "R&D Engineer 2", company: "BroadCom", location: "Bangalore, India",
      period: "Jul 2021–Jun 2024", type: "Full-time", side: "right",
      desc: "Designed and optimized research pipelines for high-performance networking systems. Contributed to distributed infrastructure components and improved system reliability across production environments.",
      tags: ["Python", "Systems", "Networking", "Infrastructure"],
    },
    {
      id: 5, role: "R&D Intern", company: "VMware", location: "Bangalore, India",
      period: "Jan–Jul 2021", type: "Intern", side: "left",
      desc: "Contributed to research and development of cloud-native features and internal automation tooling. Gained hands-on experience with distributed systems and agile engineering practices.",
      tags: ["Cloud", "Automation", "Python", "Agile"],
    },
    {
      id: 6, role: "Full Stack Development Intern", company: "QtPi", location: "Bangalore, India",
      period: "May–Jul 2019", type: "Intern", side: "right",
      desc: "Built and deployed full-stack web features for an ed-tech platform. Worked across frontend and backend systems to deliver interactive learning experiences for students.",
      tags: ["React", "Node.js", "Full Stack", "Ed-Tech"],
    },
  ];

  const cardStyle = (exp) => ({
    cursor: "pointer",
    background: selected === exp.id ? "#fff" : "rgba(255,255,255,0.6)",
    borderRadius: "8px",
    padding: "1rem",
    border: selected === exp.id ? "1px solid #0a7c52" : "1px solid rgba(10,124,82,0.12)",
    transition: "all 0.3s ease",
    boxShadow: selected === exp.id ? "0 4px 20px rgba(10,124,82,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
    textAlign: "left",
  });

  const renderContent = (exp) => (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.2rem" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#0d1f18" }}>{exp.role}</h3>
        <span style={{ fontSize: "0.72rem", color: "#3a5a4a", flexShrink: 0, marginLeft: "1rem", paddingTop: "0.3rem" }}>{exp.period}</span>
      </div>
      <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0a7c52", marginBottom: "0.3rem" }}>{exp.company}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: "0.78rem", color: "#888" }}>{exp.location}</p>
        <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "20px", background: exp.type === "Full-time" ? "#d4ede5" : "#f0f8f5", color: "#064d33", border: "1px solid rgba(10,124,82,0.2)" }}>{exp.type}</span>
      </div>
      {selected === exp.id && (
        <div style={{ marginTop: "0.8rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(10,124,82,0.15)" }}>
          <p style={{ fontSize: "0.82rem", color: "#3a5a4a", lineHeight: "1.7", marginBottom: "0.8rem" }}>{exp.desc}</p>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {exp.tags.map((tag) => (
              <span key={tag} style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "2px 8px", borderRadius: "20px", background: "#d4ede5", color: "#064d33" }}>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </>
  );

  return (
    <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1.5px", background: "rgba(10,124,82,0.25)", transform: "translateX(-50%)" }} />
      {experiences.map((exp) => (
        <div key={exp.id} style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", gap: "0 1rem", marginBottom: "0.8rem", alignItems: "start" }}>

          {/* Left */}
          <div style={{ paddingRight: "1.5rem", paddingTop: "0.2rem", transition: "transform 0.3s ease", transform: selected === exp.id && exp.side === "left" ? "translateX(-12px)" : "translateX(0)" }}>
            {exp.side === "left" && (
              <div onClick={() => setSelected(selected === exp.id ? null : exp.id)} style={cardStyle(exp)}>
                {renderContent(exp)}
              </div>
            )}
          </div>

          {/* Dot */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.8rem" }}>
            <div
              onClick={() => setSelected(selected === exp.id ? null : exp.id)}
              style={{ width: "14px", height: "14px", borderRadius: "50%", background: selected === exp.id ? "#0a7c52" : "#fff", border: "2.5px solid #0a7c52", zIndex: 1, flexShrink: 0, cursor: "pointer", transition: "all 0.2s", transform: selected === exp.id ? "scale(1.3)" : "scale(1)" }}
            />
          </div>

          {/* Right */}
          <div style={{ paddingLeft: "1.5rem", paddingTop: "0.2rem", transition: "transform 0.3s ease", transform: selected === exp.id && exp.side === "right" ? "translateX(12px)" : "translateX(0)" }}>
            {exp.side === "right" && (
              <div onClick={() => setSelected(selected === exp.id ? null : exp.id)} style={cardStyle(exp)}>
                {renderContent(exp)}
              </div>
            )}
          </div>

        </div>
      ))}
    </div>
  );
}

function ProjectCard({ icon, title, description, tags, color, href }) {
  const isExternal = href.startsWith("http");
  const Wrapper = ({ children }) => isExternal
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>{children}</a>
    : <Link href={href} style={{ textDecoration: "none" }}>{children}</Link>;

  return (
    <Wrapper>
      <div
        style={{ background: "#fff", border: "1px solid #efefef", borderRadius: "8px", padding: "1.8rem", height: "100%", transition: "border-color 0.2s, transform 0.2s", cursor: "pointer" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0a7c52"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#efefef"; e.currentTarget.style.transform = "translateY(0)"; }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{icon}</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#0d1f18", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.75", marginBottom: "1.2rem" }}>{description}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <span key={tag} style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#f0f8f5", color: "#064d33", padding: "3px 10px", borderRadius: "20px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0a7c52" }}>{isExternal ? "View →" : "View →"}</span>
        </div>
      </div>
    </Wrapper>
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
        <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1.2rem", fontWeight: 300, letterSpacing: "0.09em" }}>
          Krithika<span style={{ color: "#0a7c52" }}> </span>Suwarna
        </div>
        <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <Link href="/projects" style={{ color: "#0d1f18", textDecoration: "none" }}>Projects</Link>
          <Link href="#about" style={{ color: "#0d1f18", textDecoration: "none" }}>About</Link>
          <Link href="#experience" style={{ color: "#0d1f18", textDecoration: "none" }}>Experience</Link>
          <Link href="#contact" style={{ color: "#0d1f18", textDecoration: "none" }}>Contact</Link>
        </div>
        <a href="mailto:krithikap019@gmail.com" style={{ background: "#0a7c52", color: "#fff", padding: "0.6rem 1.5rem", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>
          Hire me
        </a>
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "2rem", alignItems: "center", padding: "5rem 3.5rem 4rem" }}>
        <div>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ width: "24px", height: "1.5px", background: "#0a7c52", display: "inline-block" }} />
            Data Scientist · AI Engineer · Developer
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem, 8vw, 9rem)", lineHeight: "1", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.3rem", marginTop: "0.6rem"  }}>
            Krithika Suwarna
          </h1>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: "1.1", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1.5rem", color: "#0d1f18" }}>
            I build <em style={{ color: "#0a7c52", fontStyle: "italic" }}>intelligent</em> tools & models that matter.
          </h2>
          <p style={{ fontSize: "1rem", color: "#3a5a4a", lineHeight: "1.85", maxWidth: "720px", marginBottom: "3.5rem", marginTop: "3.5rem" }}>
            From machine learning pipelines to full-stack AI applications — I turn complex data into products people actually use. With experience across top tech companies like VMware and BroadCom, and a Master's in Business Analytics from UC San Diego, I bring both technical depth and business thinking to every problem I solve.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2rem" }}>
            <a href="#projects" style={{ background: "#0a7c52", color: "#fff", padding: "0.9rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px" }}>View my work</a>
            <a href="#about" style={{ color: "#0a7c52", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", borderBottom: "2px solid #0a7c52", paddingBottom: "2px" }}>About me →</a>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "2rem" }}>
          <HexPhoto />
        </div>
      </section>

      <div style={{ borderTop: "1px solid rgba(10,124,82,0.2)", borderBottom: "1px solid rgba(10,124,82,0.2)", padding: "1rem 3.5rem", display: "flex", gap: "1.5rem", flexWrap: "nowrap", alignItems: "center", background: "#edf5f1", overflowX: "auto", whiteSpace: "nowrap" }}>
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
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.2rem", fontWeight: 700, marginBottom: "3rem" }}>Featured <em style={{ color: "#0a7c52", fontStyle: "italic" }}>Projects</em></h2>
          </div>
          <a href="/projects" style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0a7c52", textDecoration: "none", borderBottom: "2px solid #0a7c52", paddingBottom: "2px" }}>View all →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p) => <ProjectCard key={p.id} {...p} />)}
        </div>
      </section>

      <section id="about" style={{ padding: "5rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "1rem" }}>About me</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.2rem", fontWeight: 700, marginBottom: "3rem" }}>Hi, I'm <em style={{ color: "#0a7c52", fontStyle: "italic" }}>Krithika</em></h2>
          <p style={{ fontSize: "1rem", color: "#3a5a4a", lineHeight: "1.85", marginBottom: "1rem" }}>
            I'm a data scientist and AI engineer who loves building things that actually work. Not just models — systems that make decisions smarter, processes faster, and outcomes measurable.
          </p>
          <p style={{ fontSize: "1rem", color: "#3a5a4a", lineHeight: "1.85", marginBottom: "1rem" }}>
            I move fast, think in data, and care deeply about the "so what" — because a great model no one understands is just math.
          </p>
          <p style={{ fontSize: "1rem", color: "#3a5a4a", lineHeight: "1.85" }}>
          Currently open to full-time roles in data science, AI, and analytics.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[["4+", "Years of Experience"], ["12+", "Projects Shipped"], ["2M+", "Records Analysed"], ["$780K+", "Total Impact"]].map(([num, label]) => (
            <div key={label} style={{ background: "#edf5f1", borderRadius: "8px", padding: "1.5rem", textAlign: "center", border: "1px solid rgba(10,124,82,0.15)" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0a7c52", display: "block" }}>{num}</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#3a5a4a", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: "5rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Work</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.2rem", fontWeight: 700, marginBottom: "3rem" }}>The Professional <em style={{ color: "#0a7c52", fontStyle: "italic" }}>Journey</em></h2>
        <ExperienceTimeline />
      </section>

{/* Education */}
      <section style={{ padding: "5rem 3.5rem", borderTop: "1px solid rgba(10,124,82,0.15)" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.6rem" }}>Academic</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.2rem", fontWeight: 700, marginBottom: "3rem" }}>The Academic <em style={{ color: "#0a7c52", fontStyle: "italic" }}>Chapter</em></h2>
        <div style={{ position: "relative", paddingLeft: "1.8rem" }}>
          <div style={{ position: "absolute", left: "7px", top: 0, bottom: 0, width: "1.5px", background: "rgba(10,124,82,0.25)" }} />
          {[
            {
              school: "University of San Diego, California",
              degree: "Master of Science in Business Analytics",
              period: "Jul 2024 – Dec 2025",
              courses: ["Customer Analytics", "Web Mining", "Recommender Systems", "Large Data Analysis", "SQL & ETL", "Statistics", "Business Intelligence", "Scalable Analytics", "Experiments for Business Analytics"],
            },
            {
              school: "PES University, Bangalore, India",
              degree: "B-Tech in Computer Science — Data Science Specialisation",
              period: "Aug 2017 – May 2021",
              courses: ["Data Analytics", "Machine Learning", "Big Data", "Cloud Computing", "Algorithms", "OOP", "Linear Algebra", "Web Technologies", "Operating Systems", "Software Testing"],
            },
          ].map((edu, i) => (
            <div key={i} style={{ position: "relative", marginBottom: "2rem" }}>
              <div style={{ position: "absolute", left: "-1.55rem", top: "8px", width: "14px", height: "14px", borderRadius: "50%", background: "#0a7c52", zIndex: 1 }} />
              <div style={{ background: "#fff", border: "1px solid rgba(10,124,82,0.12)", borderRadius: "8px", padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.3rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 600, color: "#0d1f18" }}>{edu.school}</h3>
                  <span style={{ fontSize: "0.75rem", color: "#3a5a4a", flexShrink: 0, marginLeft: "1rem", paddingTop: "0.3rem" }}>{edu.period}</span>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0a7c52", marginBottom: "1rem" }}>{edu.degree}</p>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: "0.6rem" }}>Coursework</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {edu.courses.map((course) => (
                    <span key={course} style={{ fontSize: "0.68rem", fontWeight: 600, padding: "4px 10px", borderRadius: "20px", background: "#edf5f1", color: "#064d33", border: "1px solid rgba(10,124,82,0.15)" }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    {/* Contact */}
      <section id="contact" style={{ background: "#0d1f18", padding: "3.5rem 3.5rem" }}>
       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a7c52", marginBottom: "0.8rem" }}>Let's connect</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 600, color: "#fff", lineHeight: "1.05" }}>
              Looking for the <em style={{ fontStyle: "italic", color: "#12a869" }}>next challenge</em>
            </h3>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>Krithika Suwarna</p>
            <a href="mailto:ksuwarna@ucsd.edu" style={{ fontSize: "1.1rem", color: "#12a869", textDecoration: "none" }}>ksuwarna@ucsd.edu</a>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
          <a href="https://github.com/Krithikap019" target="_blank" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "1rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>GitHub →</a>
          <a href="https://linkedin.com/in/krithika-suwarna" target="_blank" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "1rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>LinkedIn →</a>
          <a href="mailto:ksuwarna@ucsd.edu" style={{ background: "#0a7c52", color: "#fff", padding: "1rem 2rem", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", textAlign: "center" }}>Email me →</a>
        </div>
      </section>

    </main>
  );
}