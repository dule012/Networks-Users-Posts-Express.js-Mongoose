import mongoose from "mongoose";
import Post from "../../../models/post/index.js";

const deletePost = async (req, res) => {
  const session = await mongoose.connection.startSession();
  try {
    const {
      params: { id },
    } = req;

    await session.startTransaction();
    await Post.deleteOne({ _id: id });
    await session.commitTransaction();
    await session.endSession();

    res.json({ error: false, message: "Successfully deleted post." });
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};

export default deletePost;