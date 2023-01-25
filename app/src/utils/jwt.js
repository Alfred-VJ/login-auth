import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET

export function signToken(user) {
    return jwt.sign({ user }, jwtSecret, { expiresIn: '60m' });
}

// export function verifyToken(req, res, next) {
//     const token = req.headers['x-access-token'];
//     if (!token) {
//         return res.status(401).json({
//             success: false,
//             message: 'No token provided'
//         });
//     }
//     jwt.verify(token, jwtSecret, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'Failed to authenticate token'
//             });
//         }
//         req.decoded = decoded;
//         next();
//     });
// }

/*

El archivo jwt.js en la carpeta utils es un archivo que contiene funciones para manejar los tokens 
JWT (JSON Web Token) utilizados para la autenticación en tu API de creación de usuarios y login.

La función signToken recibe como parámetro un objeto user y utiliza la librería jsonwebtoken para firmarlo,
 generando un token con una expiración de 1 día. Este token se devuelve y se almacena en el lado del cliente 
 para ser enviado en las peticiones subsiguientes y verificado en el servidor.

La función verifyToken recibe como parametros req, res, next para ser utilizada como middleware. Verifica si 
existe un token en los headers de la petición, si no existe retorna un error 401, si existe verifica si es un
 token válido utilizando el secreto almacenado en la configuración, y si es así agrega al objeto request el objeto
  decodificado del token para que las siguientes funciones del controlador tengan acceso a los datos del usuario,
   de esta manera puedes saber si un usuario está autenticado y obtener información adicional del usuario. Si el 
   token es inválido o no existe retorna un error 401.

Este archivo es importante para poder manejar la autenticación y autorización de tu aplicación, ya que es a través
 de este archivo que se generan y verifican los tokens JWT que se utilizan para asegurar que solo usuarios 
 autenticados pueden acceder a ciertas rutas o recursos.
*/
