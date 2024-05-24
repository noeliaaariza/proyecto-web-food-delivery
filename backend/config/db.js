import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://noeliaariza:eNVvVllM6bhdwFN6@cluster0.mmvignu.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
