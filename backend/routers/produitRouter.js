import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import { Produit, Review } from "../models/produitModel.js";
import { isAdmin, isArtisan, isArtisanOrAdmin, isAuth } from "../utils.js";

const produitRouter = express.Router();

produitRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    // const produits = await Produit.find({});
    const nom = req.query.nom || "";
    const categorie = req.query.categorie || "";
    const artisan = req.query.artisan || "";
    const nomFilter = nom ? { nom: { $regex: nom, $options: "i" } } : {};
    const artisanFilter = artisan ? { artisan } : {};
    const categorieFilter = categorie ? { categorie } : {};
    const produits = await Produit.find({
      ...artisanFilter,
      ...nomFilter,
      ...categorieFilter,
    }).populate(
      "artisan",
      "artisan.nom artisan.prenom artisan.rating artisan.numReviews"
    );
    res.send(produits);
  })
);

produitRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Produit.find().distinct("categorie");
    res.send(categories);
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

//route for adding new products
produitRouter.post(
  "/",
  isAuth,
  isArtisanOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const produit = new Produit({
      nom: "Nom produit " + Date.now(),
      artisan: req.client._id,
      categorie: "Categorie produit",
      image: "/images/BOIS1.JPG",
      stock: 0,
      prix: 0,
      description: "description du produit",
      rating: 0,
      numReviews: 0,
    });
    const createdProduit = await produit.save();
    res.send({ message: "Produit Cre??", produit: createdProduit });
  })
);

//updating product
produitRouter.put(
  "/:id",
  isAuth,
  isArtisanOrAdmin,
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
      res.send({ message: "Produit mis ?? jour", produit: updatedProduit });
    } else {
      res.status(404).send({ message: "Produit non trouv??" });
    }
  })
);

//delete product route
produitRouter.delete(
  "/:id",
  isAuth,
  isArtisanOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const produit = await Produit.findById(req.params.id);
    if (produit) {
      const deleteProduit = await produit.remove();
      res.send({ message: "Produit supprimer", produit: deleteProduit });
    } else {
      res.status(404).send({ message: "Produit non trouv??" });
    }
  })
);

//reviews route
produitRouter.post(
  "/:id/reviews",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const produitId = req.params.id;
    const produit = await Produit.findById(produitId);
    if (produit) {
      if (produit.reviews.find((elm) => elm.nom === req.client.nom)) {
        return res
          .status(400)
          .send({ message: "Vous avez d??j?? soumis un avis" });
      }
      const review = {
        nom: req.client.nom,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      produit.reviews.push(review);
      produit.numReviews = produit.reviews.length;
      produit.rating =
        produit.reviews.reduce((a, c) => c.rating + a, 0) /
        produit.reviews.length;
      const updatedProduit = await produit.save();
      res.status(201).send({
        message: "avis cr????",
        review: updatedProduit.reviews[updatedProduit.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: "Produit inconnue" });
    }
  })
);

produitRouter.post(
  "/:id/delreviews/",
  expressAsyncHandler(async (req, res) => {
    const produitId = req.params.id;
    const produit = await Produit.findById(produitId);
    if (produit) {
      produit.reviews = produit.reviews.filter(
        (rev) => String(rev._id) !== req.body.id
      );
      produit.numReviews = produit.reviews.length;
      await produit.save();
    }
  })
);

export default produitRouter;
