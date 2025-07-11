import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import seedDefaultAdmin from "./seed/seedDefaultAdmin.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(async () => {
    // 👇 seed admin after DB connection
    await seedDefaultAdmin();

    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MONGODB connection FAILED:", err);
  });
