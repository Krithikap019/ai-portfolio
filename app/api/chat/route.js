export async function POST(req) {
  const { messages } = await req.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: "You are a helpful AI assistant on a personal portfolio website. Be concise, friendly, and helpful.",
      messages: messages.map(({ role, content }) => ({ role, content })),
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "API error" }, { status: 500 });
  }

  const data = await response.json();
  return Response.json({ reply: data.content[0].text });
}
