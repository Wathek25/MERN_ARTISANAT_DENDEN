import express from "express";
import expressAsyncHandler from "express-async-handler";
import Commander from "../models/commanderModel.js";
import { isAuth, isAdmin, isArtisanOrAdmin } from "../utils.js";

const commanderRouter = express.Router();

//getting all orders (les commandes) for the admin
commanderRouter.get(
  "/",
  isAuth,
  isArtisanOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const artisan = req.query.artisan || "";
    const artisanFilter = artisan ? { artisan } : {};
    const commanders = await Commander.find({ ...artisanFilter }).populate(
      "client",
      "prenom"
    );
    res.send(commanders);
  })
);

//history of orders (les commande) for clients
commanderRouter.get(
  "/mine",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const commanders = await Commander.find({ client: req.client._id });
    res.send(commanders);
  })
);

commanderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.commanderProduits.length === 0) {
      res.status(400).send({ message: "Panier est vide" });
    } else {
      try {
        const commander = new Commander({
          artisan: req.body.commanderProduits[0].artisan,
          commanderProduits: req.body.commanderProduits,
          shippingAddress: req.body.shippingAddress,
          paiement: req.body.paiement,
          produitsPrix: req.body.produitsPrix,
          shippingPrix: req.body.shippingPrix,
          taxPrix: req.body.taxPrix,
          totalPrix: req.body.totalPrix,
          client: req.client._id,
        });
        const createdCommander = await commander.save();
        res.status(201).send({
          message: "Nouvelle commande crée",
          commander: createdCommander,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    }
  })
);

// to get the id of the order (commande)
commanderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const commander = await Commander.findById(req.params.id);
    if (commander) {
      res.send(commander);
    } else {
      res.status(404).send({ message: "commande introuvable" });
    }
  })
);

// method for the paypal payment

commanderRouter.put(
  "/:id/pay",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const commander = await Commander.findById(req.params.id);
    if (commander) {
      commander.isPaid = true;
      commander.paidAt = Date.now();
      commander.paiementResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedCommander = await commander.save();
      res.send({ message: "Commande payée", order: updatedCommander });
    } else {
      res.status(404).send({ message: "Commande inconnue" });
    }
  })
);

//to delete orders (les commandes) by admin
commanderRouter.delete(
  "/:id",
  isAuth,
  isArtisanOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const commander = await Commander.findById(req.params.id);
    if (commander) {
      const deleteCommander = await commander.remove();
      res.send({ message: "Commande supprimer", commander: deleteCommander });
    } else {
      res.status(404).send({ message: "Commande inconnue!" });
    }
  })
);
export default commanderRouter;
