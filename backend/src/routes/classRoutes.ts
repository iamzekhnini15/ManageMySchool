import { Router } from "express";
import { ClassController } from "../controllers/ClassControllers";

const router = Router();
const classController = new ClassController();

router.get("/", classController.getAllClasses.bind(classController));
router.post("/addClass", classController.addClass.bind(classController));


export default router;
