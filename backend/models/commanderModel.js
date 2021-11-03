import mongoose from "mongoose";

const commanderSchema = new mongoose.Schema(
  {
    commanderProduits: [
      {
        nom: { type: String, required: true },
        quantite: { type: Number, required: true },
        image: { type: String, required: true },
        prix: { type: Number, required: true },
        produit: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Produit",
          required: true,
        },
      },
    ],
    shippingAddress: {
      nomPrenom: { type: String, required: true },
      address: { type: String, required: true },
      ville: { type: String, required: true },
      postalCode: { type: String, required: true },
      pays: { type: String, required: true },
    },
    paiement: { type: String, required: true },
    paiementResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    produitsPrix: { type: Number, required: true },
    shippingPrix: { type: Number, required: true },
    taxPrix: { type: Number, required: true },
    totalPrix: { type: Number, required: true },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    artisan: { type: mongoose.Schema.Types.ObjectID, ref: "Client" },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Commander = mongoose.model("Commander", commanderSchema);
export default Commander;
