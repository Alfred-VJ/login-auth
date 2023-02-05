import express from 'express'
import { getTest, register, login, PruebaTokin } from '../controllers/user';
import { authMiddleware } from '../middlewares/auth';
import { roleMiddleware } from '../middlewares/role';
const router = express.Router();

//Prueba
router.get('/prueba/user', getTest);

// POST request for registering a new user
router.post('/register', register);

// POST request for logging in a user
router.post('/login', login);

// Ruta protegida para obtener el perfil de usuario
router.get('/profile', authMiddleware.verifyToken, roleMiddleware.isGuest, PruebaTokin);
  
  
export default router;