import { Router } from "express";



const router = Router();


router.get("/login");
router.get("/register");
router.get("/add_to_activity");
router.get("/get_all_activity");

export default router;