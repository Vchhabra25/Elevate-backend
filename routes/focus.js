import express from "express";
import FocusSession from "../models/FocusSession.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const sessions = await FocusSession.find().sort({ createdAt: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching focus sessions" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { duration } = req.body;

    if (!duration) {
      return res.status(400).json({ message: "Duration required" });
    }

    const session = new FocusSession({
      duration,
      createdAt: new Date(),
    });

    await session.save();

    res.json({ message: "Focus session logged", session });
  } catch (err) {
    res.status(500).json({ message: "Error saving session" });
  }
});

export default router;
