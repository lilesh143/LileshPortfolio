import express from "express";
import { getProject } from "../controller/project.controller.js";

const router = express.Router();

router.get("/", getProject);

export default router;