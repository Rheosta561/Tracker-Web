# 🏃 Tracker — Fitness Calorie Predictor

**Tracker** is a full-stack web application built with the **MERN stack** that predicts the number of **calories burnt** based on user input data. It empowers users to stay informed about their health by combining machine learning with modern web development.

> 🔗 Live URL: [tracker.vercel.app](https://tracker-eta-green.vercel.app/) 

---

## 📌 Features

- 🔥 Predict calories burnt based on physical metrics
- ⚙️ Integrated **XGBoost ML model** via backend API
- 👤 User authentication (optional)
- 📈 Real-time prediction dashboard
- 🧠 AI-driven insights to promote fitness awareness
- 🌐 Responsive, intuitive React UI

---

## 🛠️ Tech Stack

| Layer         | Technology                |
| ------------- | ------------------------- |
| Frontend      | React.js, Tailwind CSS  |
| Backend       | Node.js, Express.js       |
| Machine Model | XGBoost (Flask microservice) |
| Database      | MongoDB (Mongoose)        |
| Deployment    | Vercel / Render / MongoDB Atlas |

---

## ⚙️ Project Structure

```bash
tracker/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── server/              # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
├── model/               # ML model integration (via API or Flask)
│   └── model.pkl
├── README.md
└── package.json
