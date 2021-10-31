import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  imageURL: { type: String, required: false },
  date: { type: String, required: true, default: Date.now() },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
