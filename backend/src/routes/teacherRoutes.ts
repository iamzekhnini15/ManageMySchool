import { Router } from 'express';
import { TeacherController } from '../controllers/TeacherControllers';

const router = Router();
const teacherController = new TeacherController();

router.get('/', teacherController.getAllTeachers.bind(teacherController));
router.post('/addTeacher', (req, res) => teacherController.addTeacher(req, res));
export default router;