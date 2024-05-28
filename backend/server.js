import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import dotenv from "dotenv";

dotenv.config();

//app config
const app = express();

const port = process.env.PORT || 3000;

//midleware
app.use(cors());
app.use(express.json({ limit: "25mb" }));

//DB connection
connectDB();

//api endopoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is listening in http://localhost:${port}/`);
});
