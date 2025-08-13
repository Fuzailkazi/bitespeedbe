import { Router } from "express";
import { identifyController } from "../controllers/identifyController.js";
const router = Router();
router.post("/identify", identifyController);
export default router;
//# sourceMappingURL=identify.js.map