"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ChatProject() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI assistant. Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    }
    setLoading(false);
  }

  return (
    <main style={{ background: "#0a0a0f", minHeight: "100vh", color: "#e8e8f0", fontFamily: "'Syne', sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2rem 3rem", borderBottom: "1px solid #1e1e2e" }}>
        <Link href="/" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", textDecoration: "none", color: "inherit" }}>
          your<span style={{ color: "#6c63ff" }}>.</span>name
        </Link>
        <Link href="/" style={{ fontSize: "0.8rem", color: "#6b6b80", textDecoration: "none" }}>← Back home</Link>
      </nav>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6c63ff", marginBottom: "0.8rem" }}>Project 01</p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.5rem", marginBottom: "0.8rem" }}>AI Chat Assistant</h1>
          <p style={{ color: "#6b6b80", lineHeight: "1.8" }}>
            A Claude-powered chatbot. Type anything below and get an intelligent response.
          </p>
        </div>

        {/* Chat window */}
        <div style={{ background: "#12121a", border: "1px solid #1e1e2e", borderRadius: "12px", overflow: "hidden" }}>
          <div style={{ padding: "1.5rem", height: "420px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "75%",
                  padding: "0.8rem 1.1rem",
                  borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  background: msg.role === "user" ? "#6c63ff" : "#1e1e2e",
                  color: "#e8e8f0",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: "4px", padding: "0.8rem 1.1rem", background: "#1e1e2e", borderRadius: "12px 12px 12px 2px", width: "fit-content" }}>
                {[0, 1, 2].map((i) => (
                  <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6c63ff", animation: `bounce 1s ${i * 0.15}s infinite` }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div style={{ borderTop: "1px solid #1e1e2e", padding: "1rem 1.5rem", display: "flex", gap: "0.8rem" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              style={{
                flex: 1, background: "#1e1e2e", border: "1px solid #2a2a40", borderRadius: "8px",
                padding: "0.75rem 1rem", color: "#e8e8f0", fontSize: "0.9rem", fontFamily: "'Syne', sans-serif", outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{ background: "#6c63ff", color: "#fff", border: "none", padding: "0.75rem 1.4rem", borderRadius: "8px", cursor: "pointer", fontSize: "0.9rem", fontFamily: "'Syne', sans-serif", opacity: loading || !input.trim() ? 0.5 : 1 }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }`}</style>
    </main>
  );
}
