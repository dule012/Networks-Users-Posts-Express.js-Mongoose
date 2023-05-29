import mongoose from "mongoose";
import Post from "../../../models/post/index.js";
import { response } from "../../../utils/common/index.js";

const createPost = async (req, res, next) => {
  const session = await mongoose.connection.startSession();
  try {
    const { body } = req;

    await session.startTransaction();

    const post = new Post(body);
    await post.save();

    await session.commitTransaction();

    response(res, { status: 200, message: "Successfully created post." });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    await session.endSession();
  }
};

export default createPost;
