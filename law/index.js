// index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
const PORT = 5000;

// Replace with your actual API key or use environment variable
const GROQ_API_KEY = process.env.GROQ_API_KEY || 'your-groq-api-key-here';

app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const { userMessage } = req.body;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer `,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "You are a fun  assistant which interacts with peope and also helps people with their cases. You will listen to their situation and explain which Indian laws apply and how they can implement them in real life. Your answers must be India-specific and understandable to a common person."
          },
          {
            role: "user",
            content: userMessage
          }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    res.json({
      reply: reply || "Sorry, I couldn’t understand. Please try rephrasing your situation."
    });

  } catch (error) {
    console.error("Error from Groq:", error.message);
    res.status(500).json({ reply: "Something went wrong. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
