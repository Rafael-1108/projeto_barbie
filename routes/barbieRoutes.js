import express from "express";
import {
    getAllBarbies, 
    getBarbieById, 
    createBarbie, 
    deleteBarbie
} from "../controllers/barbieController.js";

const router = express.Router();

router.get("/", getAllBarbies);
router.get("/:id", getBarbieById);
router.post("/", createBarbie);
router.post("/:id", deleteBarbie);

export default router;