import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import seedDefaultAdmin from "./seed/seedDefaultAdmin.js";
import path from "path";
import express from "express";

dotenv.config({
  path: "./env",
});

const __dirname = path.resolve();

// Serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// ✅ Correct wildcard route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

connectDB()
  .then(async () => {
    await seedDefaultAdmin();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MONGODB connection FAILED:", err);
  });
