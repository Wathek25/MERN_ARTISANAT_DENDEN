import express from "express";
import Event from "../models/eventModel.js";
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

const eventRouter = express.Router();

eventRouter.get("/", async (req, res) => {
  try {
    const events = await Event.find({});
    events.length > 0
      ? res.send({ contenu: true, rslt: events })
      : res.send({
          contenu: false,
          rslt: "il ya pas des événements pour le moment!",
        });
  } catch (error) {
    res.status(404).send({ message: error });
  }
});

eventRouter.get("/:id", async (req, res) => {
  try {
    const event = await Event.find({ _id: req.params.id });
    res.send({ contenu: true, rslt: event });
  } catch (error) {
    res.status(404).send({ contenu: false, rslt: "cette event n'existe pas!" });
  }
});

eventRouter.post("/", [upload], async (req, res) => {
  try {
    const newEvent = {
      titre: req.body.titre,
      contenu: req.body.contenu,
      imageURL: req.file ? req.file.path : null,
      date: req.body.date,
    };
    const event = await Event.create(newEvent);
    res.status(201).send({ contenu: true, rslt: event });
  } catch (error) {
    res.status(406).send({ contenu: false, rslt: error });
  }
});

eventRouter.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.deleteOne({ _id: req.params.id });
    res.status(200).send({ contenu: true, rslt: deletedEvent });
  } catch (error) {
    res
      .status(406)
      .send({ contenu: false, rslt: "cette événement n'a pas supprimer!" });
  }
});

export default eventRouter;
