import express from 'express';
import { getAllUsers, register, getMyProfile, login, logout } from "../controllers/user.js";
import { User } from "../models/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register
    );

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;