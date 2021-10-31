import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Produit from "../models/produitModel.js";
import { isAdmin, isAuth } from "../utils.js";

const produitRouter = express.Router();

produitRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const produits = await Produit.find({});
    res.send(produits);
  })
);

produitRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Produit.remove({});
    const createdProduits = await Produit.insertMany(data.produits);
    res.send({ createdProduits });
  })
);

produitRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const produit = await Produit.findById(req.params.id);
    if (produit) {
      res.send(produit);
    } else {
      res.status(404).send({ message: "Produit indisponible !!" });
    }
  })
);
//route for adding new produits
produitRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produit = new Produit({
      nom: "Nom produit " + Date.now(),
      categorie: "Categorie produit",
      image: "/images/BOIS1.JPG",
      stock: 0,
      prix: 0,
      description: "description du produit",
      rating: 0,
      numReviews: 0,
    });
    const createdProduit = await produit.save();
    res.send({ message: "Produit Creé", produit: createdProduit });
  })
);

//updating produit
produitRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produitId = req.params.id;
    const produit = await Produit.findById(produitId);
    if (produit) {
      produit.nom = req.body.nom;
      produit.prix = req.body.prix;
      produit.image = req.body.image;
      produit.categorie = req.body.categorie;
      produit.stock = req.body.stock;
      produit.description = req.body.description;
      const updatedProduit = await produit.save();
      res.send({ message: "Produit mis à jour", produit: updatedProduit });
    } else {
      res.status(404).send({ message: "Produit non trouvé" });
    }
  })
);

//delete produit
produitRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produit = await Produit.findById(req.params.id);
    if (produit) {
      const deleteProduit = await produit.remove();
      res.send({ message: "Produit supprimer", produit: deleteProduit });
    } else {
      res.status(404).send({ message: "Produit non trouvé" });
    }
  })
);

export default produitRouter;
