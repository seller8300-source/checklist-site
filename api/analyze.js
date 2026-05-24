// Vercel Serverless Function - Anthropic API 호출 (API 키 안전하게 숨김)
export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "prompt required" });

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "API key not configured" });

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 4000,
        messages: [{
          role: "user",
          content: "당신은 마케팅 영상 심사 전문가입니다. 응답은 반드시 { 로 시작해 } 로 끝나는 순수 JSON 객체 하나만 출력. 코드블록, 설명, 인사말 절대 금지.\n\n" + prompt
        }]
      })
    });

    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ error: data.error?.message || "API error", detail: data });

    const txt = (data.content || []).map(i => i.text || "").join("").trim();
    const startIdx = txt.indexOf("{");
    const endIdx = txt.lastIndexOf("}");
    if (startIdx === -1 || endIdx === -1) return res.status(500).json({ error: "No JSON in response", raw: txt.slice(0, 300) });

    const jsonStr = txt.slice(startIdx, endIdx + 1);
    try {
      const parsed = JSON.parse(jsonStr);
      return res.status(200).json(parsed);
    } catch (e) {
      return res.status(500).json({ error: "JSON parse failed: " + e.message, raw: jsonStr.slice(0, 300) });
    }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
