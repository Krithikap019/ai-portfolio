"use client";
import Link from "next/link";

export default function ProjectCard({ icon, title, description, tags, color, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#161622",
          border: "1px solid #1e1e2e",
          borderRadius: "10px",
          padding: "1.4rem",
          cursor: "pointer",
          transition: "border-color 0.2s, transform 0.2s",
          position: "relative",
          overflow: "hidden",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = color;
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#1e1e2e";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: color }} />
        <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>{icon}</div>
        <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#e8e8f0", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ fontSize: "0.82rem", color: "#6b6b80", lineHeight: "1.7", marginBottom: "1.2rem" }}>{description}</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {tags.map((tag) => (
              <span key={tag} style={{ fontSize: "0.65rem", background: "#1e1e2e", color: "#6b6b80", padding: "3px 10px", borderRadius: "12px", letterSpacing: "0.05em" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ fontSize: "0.75rem", color: color }}>view →</span>
        </div>
      </div>
    </Link>
  );
}
