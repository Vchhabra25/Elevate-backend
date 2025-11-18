// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Routers
const tasksRouter = require("./routes/tasks");
const groupsRouter = require("./routes/groups");
const aiRouter = require("./routes/ai");

const app = express();

// Middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT"],
}));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 15000,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:");
    console.error(err);
  });

// API ROUTES
app.use("/tasks", tasksRouter);
app.use("/groups", groupsRouter);
app.use("/ai", aiRouter);

// Base route
app.get("/", (req, res) => {
  res.send("🌟 Elevate Backend Active — AI + Groups + Tasks fully running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
