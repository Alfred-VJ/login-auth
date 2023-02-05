import jwt from 'jsonwebtoken';
import { DB } from '../config/sequelize';
const JWT_SECRET = process.env.JWT_SECRET;

export const verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
console.log({authorization})
    if (!authorization) {
      return res.status(401).json({
        message: 'Token not provided'
      });
    }

    const token = authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log({decoded})
    const user = await DB.User.findByPk(decoded.user.uuid);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
};

export const authorize = (petition) => async (req, res, next) => {
  // Buscar en la base de datos el rol del usuario a través del ID del rol
  const userRole = await DB.Role.findByPk(req.user.id_role);
  // Verificar si el rol del usuario está dentro de los roles permitidos
  if(!petition.includes(userRole.name)) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }
  next();
};

/*
El archivo auth.js en la carpeta controllers es responsable de la autenticación y autorización de usuarios en 
tu API. En este archivo se importan las librerías necesarias como es jsonwebtoken y User de la carpeta models 
y se exportan dos funciones verifyToken y authorize:

La función verifyToken se encarga de verificar si el token enviado en la petición HTTP es válido y si pertenece
 a un usuario existente en la base de datos. Se verifica si el token existe en los headers de la petición, luego
  se decodifica y se busca en la base de datos si el usuario existe, si existe se agrega al objeto request para 
  que las siguientes funciones del controlador tengan acceso a los datos del usuario. Si el token es inválido o 
  no existe se retorna un error 401.

La función authorize se encarga de verificar si el usuario tiene acceso a ciertas rutas o funciones especificas,
 recibe como parametro los roles permitidos, y verifica si el rol del usuario existe en esa lista, si el rol del 
 usuario no existe en la lista se retorna un error 401.

Es importante tener en cuenta que estas funciones son utilizadas en las rutas que requieren autenticación y 
autorización, y se ejecutan antes de las funciones del controlador.
*/