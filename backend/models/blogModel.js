import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  imageURL: { type: String, required: false },
  date: { type: String, required: true, default: Date.now() },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
