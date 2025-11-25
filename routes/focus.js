import express from "express";
import FocusSession from "../models/FocusSession.js";

const router = express.Router();

// Get all sessions
router.get("/", async (req, res) => {
  try {
    const sessions = await FocusSession.find().sort({ date: 1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});

// Add a new session
router.post("/", async (req, res) => {
  try {
    const { duration } = req.body;
    if (!duration) return res.status(400).json({ error: "Duration required" });

    const session = new FocusSession({ duration });
    await session.save();

    res.json({ message: "Session added", session });
  } catch (err) {
    res.status(500).json({ error: "Failed to add session" });
  }
});

export default router;
