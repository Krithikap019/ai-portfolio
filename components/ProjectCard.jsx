"use client";
import Link from "next/link";

export default function ProjectCard({ icon, title, description, tags, color, href }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(10,124,82,0.15)",
          borderRadius: "8px",
          padding: "1.6rem",
          cursor: "pointer",
          transition: "border-color 0.2s, transform 0.2s",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#0a7c52";
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(10,124,82,0.15)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>{icon}</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#0d1f18", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ fontSize: "0.85rem", color: "#3a5a4a", lineHeight: "1.7", marginBottom: "1.2rem" }}>{description}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {tags.map((tag) => (
              <span key={tag} style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "#d4ede5", color: "#064d33", padding: "3px 10px", borderRadius: "20px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0a7c52", letterSpacing: "0.04em" }}>View →</span>
        </div>
      </div>
    </Link>
  );
}