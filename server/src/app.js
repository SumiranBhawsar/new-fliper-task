import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

// import routes

import adminRouter from "./routes/admin.route.js";
import projectRouter from "./routes/projects.route.js";
import clientRouter from "./routes/clients.route.js";
import formRouter from "./routes/form.route.js";
import userEmailRouter from "./routes/userEmail.route.js";

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/clients", clientRouter);
app.use("/api/v1/form", formRouter);
app.use("/api/v1/email", userEmailRouter);

export { app };
