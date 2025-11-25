const mongoose = require("mongoose");

const FocusSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FocusSession", FocusSchema);
