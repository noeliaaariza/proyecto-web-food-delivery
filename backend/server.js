import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

//app config
const app = express();

const port = process.env.PORT || 3000;

//midleware
app.use(cors());
app.use(express.json({ limit: "25mb" }));

//DB connection
connectDB();

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is listening in http://localhost:${port}/`);
});
