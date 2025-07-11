import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import {
  createProject,
  getAllProjects,
} from "../controllers/projects.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/all-projects").get(getAllProjects);

router
  .route("/create-project")
  .post(upload.single("projectImage"), verifyJWT, createProject);

export default router;
