import mongoose from "mongoose";

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

export default mongoose.model("FocusSession", FocusSchema);
