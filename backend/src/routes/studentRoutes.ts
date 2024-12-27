import { Router } from 'express';
import { StudentController } from '../controllers/StudentControllers';

const router = Router();
const studentController = new StudentController();

router.get('/', studentController.getAllStudents.bind(studentController));

export default router;