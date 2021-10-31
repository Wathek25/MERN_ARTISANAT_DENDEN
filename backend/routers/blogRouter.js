import express from "express";
import Blog from "../models/blogModel.js";
import multer from "multer";

import { isAdmin, isAuth } from "../utils.js";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads");
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single("image");

const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    blogs.length > 0
      ? res.send({ contenu: true, rslt: blogs })
      : res.send({ contenu: false, rslt: "il ya pas de blog pour le moment!" });
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

blogRouter.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.find({ _id: req.params.id });
    res.send({ contenu: true, rslt: blog });
  } catch (error) {
    res.status(404).send({ contenu: false, rslt: "ce blog n'existe pas!" });
  }
});

blogRouter.post("/", [upload], async (req, res) => {
  try {
    const newBlog = {
      titre: req.body.titre,
      contenu: req.body.contenu,
      imageURL: req.file ? req.file.path : null,
    };
    const blog = await Blog.create(newBlog);
    res.status(201).send({ contenu: true, rslt: blog });
  } catch (error) {
    res.status(406).send({ contenu: false, rslt: error });
  }
});

blogRouter.patch("/:id", [upload], async (req, res) => {
  try {
    const newBlog = {
      titre: req.body.titre,
      contenu: req.body.contenu,
      imageURL: req.file ? req.file.path : null,
    };
    await Blog.updateOne({ _id: req.params.id }, newBlog);
    res.status(201).send({ contenu: true, rslt: { _id: req.params.id } });
  } catch (error) {
    res.status(406).send({ contenu: false, rslt: error });
  }
});

blogRouter.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.deleteOne({ _id: req.params.id });
    res.status(200).send({ contenu: true, rslt: deletedBlog });
  } catch (error) {
    res
      .status(406)
      .send({ contenu: false, rslt: "cette blog n'a pas supprimer!" });
  }
});

export default blogRouter;
