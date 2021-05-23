import { Router } from 'express'; 
import { createProject } from '../controllers/projectsController';

const router = Router();

// A estas rutas le precede el path => '/api/projects'
router.post('/', createProject)








export default router;