import { verifyToken, authorize } from '../controllers/auth';

export const authMiddleware = {
    verifyToken,
    authorize
}
/* 
En este código se está importando las funciones verifyToken y authorize del controlador de autenticación 
y autorización de la carpeta controllers, y se están exportando como propiedades de un objeto llamado 
authMiddleware, de esta manera podrás importar este archivo en cualquier parte de tu aplicación y utilizar 
esas funciones como middlewares.

Puedes importar este archivo en cualquier parte de tu aplicación y utilizar esas funciones como middlewares,
es decir antes de ejecutar una función del controlador para asegurar que solo usuarios autenticados y con los
roles especificos pueden acceder a estas rutas.
*/