import express from "express";
import { register } from "../controllers/usersController.js";

const router = express.Router();

router.get("/register", register);

export default router;
