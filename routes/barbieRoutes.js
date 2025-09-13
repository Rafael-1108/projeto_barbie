import express from "express";
import {
    getAllBarbies, 
    getBarbieById, 
    createBarbie, 
    deleteBarbie
} from "../controllers/barbieController.js";

const router = express.Router();

router.get("/barbies", getAllBarbies);
router.get("/barbies/:id", getBarbieById);
router.post("/barbies", createBarbie);
router.delete("/barbies/:id", deleteBarbie);

export default router;