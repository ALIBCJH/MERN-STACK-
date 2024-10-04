import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body; // user will dend this data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields" });
  }
  const newProduct = new Product(products);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

console.log(process.env.Mongo_URI);
app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
