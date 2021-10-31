import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Client from "../models/clientModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

const clientRouter = express.Router();

clientRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Client.remove({});
    const createdClients = await Client.insertMany(data.clients);
    res.send({ createdClients });
  })
);

clientRouter.post(
  "/connecter",
  expressAsyncHandler(async (req, res) => {
    const client = await Client.findOne({ email: req.body.email });
    if (client) {
      if (bcrypt.compareSync(req.body.password, client.password)) {
        res.send({
          _id: client._id,
          prenom: client.prenom,
          nom: client.nom,
          email: client.email,
          isAdmin: client.isAdmin,
          token: generateToken(client),
        });
        return;
      }
    }
    res.status(401).send({ message: "Error email ou mot de passe invalide" });
  })
);

clientRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const client = new Client({
      prenom: req.body.prenom,
      nom: req.body.nom,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdClient = await client.save();
    res.send({
      _id: createdClient._id,
      prenom: createdClient.prenom,
      nom: createdClient.nom,
      email: createdClient.email,
      isAdmin: createdClient.isAdmin,
      token: generateToken(createdClient),
    });
  })
);

export default clientRouter;
