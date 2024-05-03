import { Router } from "express";
import { userCreation } from "../controllers/userController.js";

const router = Router()

router.route('/creation').post(userCreation)

export default router