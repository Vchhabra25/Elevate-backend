const express = require("express");
const Reflection = require("../models/Reflection");

const router = express.Router();

// GET all reflections
router.get("/", async (req, res) => {
  try {
    const reflections = await Reflection.find();
    res.json(reflections);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reflections" });
  }
});

// POST add a reflection
router.post("/", async (req, res) => {
  try {
    const reflection = new Reflection(req.body);
    await reflection.save();
    res.json({ message: "Reflection added", reflection });
  } catch (err) {
    res.status(500).json({ message: "Error saving reflection" });
  }
});

module.exports = router;
