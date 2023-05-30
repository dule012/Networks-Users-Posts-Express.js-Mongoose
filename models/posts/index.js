import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["ordinary", "important"],
    default: "ordinary",
  },
  userId: {
    type: Number,
    required: true,
  },
  networkId: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Posts", schema);