import express from 'express'
import { authMiddleware } from '../middlewares/auth';
import { roleMiddleware } from '../middlewares/role';
import { createRole, rolesGetting } from '../controllers/role';
const router = express.Router();
//prueba
router.get("/roles/get", authMiddleware.verifyToken, roleMiddleware.isAdmin, rolesGetting);
//Creacion de roles
router.post('/roles/set', authMiddleware.verifyToken, roleMiddleware.isModerator, createRole);


export default router;