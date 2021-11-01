import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    isAdmin: { type: Boolean, default: false, required: true },
    isArtisan: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const Client = mongoose.model("Client", clientSchema);
export default Client;
