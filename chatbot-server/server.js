import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.OPENROUTER_KEY;
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

if (!API_KEY) {
  // console.error("❌ OPENROUTER_KEY not found in .env file");
  process.exit(1);
}

app.post("/api/chat", async (req, res) => {
  // console.log("📨 New request received:", req.body);

  const userMessages = req.body.messages || [];

  const messagesForAPI = [
    {
      role: "system",
      content:
        "شما یک چت بات هوشمند فارسی هستید. فقط و فقط فارسی پاسخ بده، کوتاه و مرتبط باشد و به هیچ وجه از کلمات انگلیسی استفاده نکن.",
    },
    ...userMessages,
  ];

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,

        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "ChatBot",
      },
      body: JSON.stringify({
        model: req.body.model || "deepseek/deepseek-chat-v3.1:free",
        messages: messagesForAPI,
      }),
    });

    if (!response.ok) {
      // console.error(
      //   "❌ OpenRouter API returned error:",
      //   response.status,
      //   response.statusText
      // );
      const errorBody = await response.text();
      // console.error("Error details:", errorBody);
      return res
        .status(500)
        .json({ error: "API returned an error", details: errorBody });
    }

    const data = await response.json();
    // console.log("✅ Response from OpenRouter API:", data);

    res.json(data);
  } catch (error) {
    // console.error("❌ Connection error:", error);
    res.status(500).json({ error: "Connection failed" });
  }
});

app.listen(PORT, () => {
  // console.log(`🚀 Server running on http://localhost:${PORT}`);
});
