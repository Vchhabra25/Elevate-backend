import mongoose from "mongoose";

const focusSessionSchema = new mongoose.Schema(
  {
    duration: { type: Number, required: true }, // minutes
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.model("FocusSession", focusSessionSchema);
