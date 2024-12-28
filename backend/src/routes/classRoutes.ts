import { Router } from "express";
import { ClassController } from "../controllers/ClassControllers";

const router = Router();
const classController = new ClassController();

router.get("/", classController.getAllClasses.bind(classController));
router.get("/:id", (req, res) => classController.getClassById(req, res));
router.post("/addClass", (req, res) => classController.addClass(req, res));
router.post("/updateClass", (req, res) => classController.updateClass(req, res));
router.post("/deleteClass", (req, res) => classController.deleteClass(req, res));

export default router;
