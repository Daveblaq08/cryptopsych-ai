// backend/server.js
import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Fireworks AI Chat Endpoint (Secure)
app.post("/api/fireworks", async (req, res) => {
  try {
    const response = await fetch("https://api.fireworks.ai/inference/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.FIREWORKS_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "accounts/fireworks/models/llama-v3p1-70b-instruct", // Example model
        messages: [
          { role: "system", content: "You are a trading psychology assistant." },
          { role: "user", content: req.body.message }
        ]
      })
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("Error calling Fireworks API:", error);
    res.status(500).json({ error: "API request failed" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
