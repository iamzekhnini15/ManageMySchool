import { Router } from 'express';
import { StudentController } from '../controllers/StudentControllers';

const router = Router();
const studentController = new StudentController();

router.get('/', studentController.getAllStudents.bind(studentController));
router.post('/create', studentController.createStudent.bind(studentController));

export default router;