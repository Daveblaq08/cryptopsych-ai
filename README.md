# CryptoPsych — AI Trading Psychology Simulator

**CryptoPsych** is an AI-powered trading psychology assistant and simulator for cryptocurrency traders. It helps users discover, simulate, and improve their emotional responses to market events so they can trade with more discipline and better decision-making.

---

## 🔥 Key Features

* **AI Behavioral Coach ("Dobby")** — a persona-driven assistant built on Fireworks AI that offers empathetic, practical coaching for traders.
* **Scenario Simulator** — run predefined market scenarios (FOMO pumps, flash drops, news shocks) to see how your psychometric profile drives decisions.
* **Custom Scenario Input** — (upgrade-ready) allow users to type their own scenarios to generate tailored simulations and coaching.
* **Profile-driven personalization** — sliders for Risk Tolerance, Loss Aversion, Impulsivity, Social Susceptibility and Confidence alter simulation behavior.
* **Local-first design** — profiles and runs persist in `localStorage`; API-backed mode uses a secure Node.js backend.
* **Secure AI Integration** — Fireworks AI key stored in backend `.env` (not committed to GitHub).

---

## 🎯 Why CryptoPsych Matters

Trading success depends as much on psychology as on strategy. CryptoPsych trains emotional resilience by simulating realistic market stressors and surfacing cognitive biases (FOMO, loss aversion, overconfidence). This helps traders build better habits, manage risk, and make clearer decisions during volatile markets.

---

## 🧩 Project Structure

```
cryptopsych/
├── backend/
│   ├── server.js          # Express server that proxies requests to Fireworks AI
│   └── .env               # FIREWORKS_API_KEY (ignored by git)
├── index.html             # Main frontend UI (chat, simulator, profile)
├── script.js              # Frontend logic (chat handlers, simulator logic)
├── styles.css             # Optional styling file
├── README.md
└── .gitignore
```

## 🎥 Demo Video

Click below to watch CryptoPsych in action:

https://youtu.be/gNri1cPFADs


---

## 🛠️ Tech Stack

* Frontend: HTML, CSS, Vanilla JavaScript
* Backend: Node.js + Express (API proxy to Fireworks AI)
* AI Provider: Fireworks AI (Llama-v3 family)
* Environment: dotenv for secure keys

---

## ⚙️ Local Setup

1. **Clone the repo**

```bash
git clone https://github.com/<your-username>/cryptopsych-ai.git
cd cryptopsych-ai
```

2. **Backend setup**

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:

```
FIREWORKS_API_KEY=your_fireworks_api_key_here
PORT=5000
```

Start the backend:

```bash
node server.js
```

3. **Frontend**

Open `index.html` in your browser (or use a live-server extension). The frontend will call the backend at `http://localhost:5000/api/fireworks` for AI responses.

---

## 🧪 Testing the API (manual)

From your machine (Command Prompt or Postman), run:

```bash
curl -X POST http://localhost:5000/api/fireworks -H "Content-Type: application/json" -d '{"message":"Hello Psycho Bot"}'
```

You should receive a JSON completion from Fireworks AI.

---

## 🔓 Security Notes

* **Never commit** your `.env` or API keys. `.gitignore` already includes `.env`.
* Keep backend API endpoints behind your Express server so keys stay secret.

---

## 📈 Roadmap / Next Steps

* Add **custom scenario** input and richer simulation outputs (emotion scoring, timeline replay).
* Add persistent user accounts and secure storage (Postgres / Firebase).
* Add analytics dashboard to track behavioral progress over time.
* Deploy backend to Render/Railway and frontend to Vercel/Netlify for a full hosted experience.

---

## 📄 License & Credits

Created by **Dave** — built as a prototype and learning project integrating Fireworks AI and Sentient Grid design principles.


