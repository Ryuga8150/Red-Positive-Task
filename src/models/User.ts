import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a Name"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "User must have a phone number"],
    unique: true,
  },
  hobbies: {
    type: String,
    required: [true, "User must specify his hobbies"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
