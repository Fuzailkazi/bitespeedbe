import { Router } from "express";
import { getAllContactsController } from "../controllers/contactController.js";

const router = Router();

router.get("/contacts", getAllContactsController);

export default router;
