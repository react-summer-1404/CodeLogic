import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.OPENROUTER_KEY;
const NEWS_BASE_URL = process.env.NEWS_BASE_URL;

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

app.use((req, res, next) => {
  res.setTimeout(120000);
  next();
});

async function fetchNews() {
  try {
    const url = `${NEWS_BASE_URL}/News?PageNumber=1&RowsOfPage=20&SortType=insertDate&SortingCol=DESC`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const data = await res.json();
    return data?.news || [];
  } catch (err) {
    console.error("❌ خطا در GET اخبار:", err);
    return [];
  }
}

function normalize(text) {
  return text
    ?.toString()
    .trim()
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک");
}

function findRelatedNews(newsList, question) {
  const q = normalize(question);
  return newsList.filter((n) => {
    const t = normalize(n.title);
    const m = normalize(n.miniDescribe);

    return t.includes(q) || (m && m.includes(q));
  });
}

function safeExtractDescribe(describe) {
  try {
    const obj = JSON.parse(describe);
    return obj?.blocks?.map((b) => b.data?.text || "").join("\n");
  } catch (e) {
    return "";
  }
}

app.post("/api/chat", async (req, res) => {
  try {
    const userMessages = req.body.messages || [];
    const userQuestion = userMessages[userMessages.length - 1]?.content || "";

    const newsList = await fetchNews();
    const matched = findRelatedNews(newsList, userQuestion);

    let newsContext = "هیچ خبری مطابق این موضوع یافت نشد.";

    if (matched.length > 0) {
      newsContext = matched
        .map((n) => {
          const fullDescribe = safeExtractDescribe(n.describe);

          return `
🔹 خبر یافت شد:
عنوان: ${n.title}
توضیح کوتاه: ${n.miniDescribe || "ندارد"}
توضیح کامل: ${fullDescribe || "ندارد"}
`;
        })
        .join("\n\n");
    }

    const messagesForModel = [
      {
        role: "system",
        content: `
تو یک دستیار فارسی هستی. با لحن رسمی ولی ساده جواب بده.
بر اساس اطلاعات زیر پاسخ بده:

${newsContext}

قوانین:
- اگر خبر پیدا شد: عنوان + توضیح کوتاه + خلاصه‌ای از توضیح کامل را بگو.
- اگر خبر نبود: فقط بگو خبری با این موضوع موجود نیست.
        `,
      },
      ...userMessages,
    ];

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 120000);

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "ChatBot",
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: req.body.model || "deepseek/deepseek-r1-0528-qwen3-8b:free",
        messages: messagesForModel,
      }),
    });

    clearTimeout(timeout);

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    console.error("❌ خطا در چت:", err);
    return res.status(500).json({ error: "Timeout or server error" });
  }
});

app.get("/", (req, res) => res.send("✔️ Chatbot server running"));

app.listen(PORT, () => console.log(`🚀 Server running at port ${PORT}`));
