import mongoose from "mongoose";

const produitSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true, unique: true },
    artisan: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    image: { type: String, required: true },
    categorie: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Produit = mongoose.model("Produit", produitSchema);

export default Produit;
