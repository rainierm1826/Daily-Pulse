import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: String,
  fullName: String,
});

export const User = mongoose.model("user", userSchema);
