import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  textEditorData: String
});

export default mongoose.model("User", UserSchema);
