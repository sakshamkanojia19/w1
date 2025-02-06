import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Save user data
router.post("/save", async (req, res) => { // ✅ Use 'router.post' instead of 'app.post'
  try {
    const { name, email, phone, textEditorData } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const user = await User.findOneAndUpdate(
      { email }, // Find user by email
      { name, email, phone, textEditorData }, // Update or insert
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "User data saved successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get user data
router.get("/user/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
