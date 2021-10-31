import express from "express";
import Mongoose from "mongoose";
import clientRouter from "./routers/clientRouter.js";
import produitRouter from "./routers/produitRouter.js";
import blogRouter from "./routers/blogRouter.js";
import eventRouter from "./routers/eventRouter.js";
import dotenv from "dotenv";
import commanderRouter from "./routers/commanderRouter.js";
import path from "path";
import uploadRouter from "./routers/uploadRouter.js";
import cors from "cors";

// const __dirname = path.resolve();

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Mongoose.connect(
  // eslint-disable-next-line no-undef
  process.env.MONGODB_URL || "mongodb://localhost/villageartdenden"
);
app.use(cors());
app.use("/api/uploads", uploadRouter);
app.use("/api/clients", clientRouter);
app.use("/api/produits", produitRouter);
app.use("/api/commanders", commanderRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/events", eventRouter);
app.get("/api/config/paypal", (req, res) => {
  // eslint-disable-next-line no-undef
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port number :${port}`);
});
