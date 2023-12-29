import express from "express";
import { newTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { updateTask, deleteTask } from "../controllers/task.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, newTask);

router.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask);

export default router;