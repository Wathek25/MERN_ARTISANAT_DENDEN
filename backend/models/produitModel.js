import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const produitSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true, unique: true },
    artisan: { type: mongoose.Schema.Types.ObjectID, ref: "Client" },
    image: { type: String, required: true },
    categorie: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
export const Produit = mongoose.model("Produit", produitSchema);
export const Review = mongoose.model("Review", reviewSchema);
