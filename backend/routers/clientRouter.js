import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Client from "../models/clientModel.js";
import bcrypt from "bcryptjs";
import { generateToken, isAdmin, isAuth } from "../utils.js";

const clientRouter = express.Router();

// clientRouter.get(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     // await Client.remove({});
//     const createdClients = await Client.insertMany(data.clients);
//     res.send({ createdClients });
//   })
// );

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
          isArtisan: client.isArtisan,
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
      isArtisan: client.isArtisan,
      token: generateToken(createdClient),
    });
  })
);

//uodating profile page
clientRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (client) {
      res.send(client);
    } else {
      res.status(404).send({ message: "client Not Found" });
    }
  })
);

//uodating profiles by clients
clientRouter.put(
  "/profile",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    // const client = await Client.updateOne({ _id: req.body.clientId }, req.body);
    // res.send(client);
    const client = await Client.findById(req.client._id);
    if (client) {
      client.nom = req.body.nom || client.nom;
      client.prenom = req.body.prenom || client.prenom;
      client.email = req.body.email || client.email;
      if (client.isArtisan) {
        client.artisan.nom = req.body.artisanNom || client.artisan.nom;
        client.artisan.prenom = req.body.artisanPrenom || client.artisan.prenom;
        client.artisan.description =
          req.body.artisanDescription || client.artisan.description;
      }
      if (req.body.password) {
        client.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedClient = await client.save();
      res.send({
        _id: updatedClient._id,
        nom: updatedClient.nom,
        prenom: updatedClient.prenom,
        email: updatedClient.email,
        isAdmin: updatedClient.isAdmin,
        isArtisan: client.isArtisan,
        token: generateToken(updatedClient),
      });
    }
  })
);

//getting all list of clients for admin only
clientRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const clients = await Client.find({});
    res.send(clients);
  })
);

//deleting clients
clientRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (client) {
      if (client.email === "wathek@gmail.com") {
        res.status(400).send({ message: "unauthorized" });
        return;
      }
      const deleteClient = await client.remove();
      res.send({ message: "Client supprimer", client: deleteClient });
    } else {
      res.status(404).send({ message: "Client inconnue" });
    }
  })
);

//editing (modification) the clients info + roles by admin
clientRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);
    if (client) {
      client.nom = req.body.nom || client.nom;
      client.prenom = req.body.prenom || client.prenom;
      client.email = req.body.email || client.email;
      client.isArtisan = req.body.isArtisan || client.isArtisan;
      client.isAdmin = req.body.isAdmin || client.isAdmin;
      const updatedClient = await client.save();
      res.send({ message: "Client mis à jour", client: updatedClient });
    } else {
      res.status(404).send({ message: "Client inconnue" });
    }
  })
);

export default clientRouter;
