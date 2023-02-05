import { authorize } from '../controllers/auth';

export const roleMiddleware = {
    isAdmin: authorize(['admin']),
    isModerator: authorize(['admin', 'moderator']),
    isUser: authorize(['admin', 'moderator', 'user']),
    isGuest: authorize(['admin', 'moderator', 'user', 'guest'])
    
}
/*
En este código se está importando la función authorize del controlador de autorización de la carpeta controllers, 
y se están exportando como propiedades de un objeto llamado roleMiddleware, donde cada propiedad es una función 
que verifica si el usuario tiene un rol específico.

Puedes importar este archivo en cualquier parte de tu aplicación y utilizar esas funciones como middlewares, es
 decir antes de ejecutar una función del controlador para asegurar que solo usuarios con los roles específicos 
 pueden acceder a estas rutas, esto te permite tener un mejor control sobre las rutas y los roles permitidos.
*/