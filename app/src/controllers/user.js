import { DB } from '../config/sequelize';
import { getRoles } from '../utils/getRoles';
import {hashPassword, comparePasswords} from '../utils/bcrypt';
import {signToken} from '../utils/jwt'

export const register = async (req, res) => {
  try {
      const { username, email, password, id_role } = req.body;
      const hashedPassword = hashPassword(password);

      const coincidence = await getRoles(id_role);
    
      if(!coincidence) return res.status(500).json({
        message: " --WRONG ROLE-- "
      })
  // Crea un nuevo usuario con los datos proporcionados
      const newUser = await DB.User.create({
          username,
          email,
          password: hashedPassword,
          id_role
      });

      // Crea un token de autenticación para el usuario
      const token = signToken(newUser);

      return res.status(201).json({
          message: 'User created successfully',
          token,
          user: {
            name: newUser.username,
            id_rol: newUser.id_role,
          }
      });
  } catch (error) {
      return res.status(500).json({
          message: 'Error creating user',
          error
      });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await DB.User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }
    const isValidPassword = comparePasswords(password, user.password);//without await
    if (!isValidPassword) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }
    const token = signToken(user);
    return res.status(200).json({
      message: 'User logged in successfully',
      token,
      user:{
        name: user.username,
        role: user.id_role
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error logging in user',
      error
    });
  }
};

export const getTest = (req, res) => {
  return res.send("Hola Mundo!")
}

export const PruebaTokin = (req, res) => {
  let role = ""
  switch (req.user.id_role) {
    case 1:
      role = "ADMINISTRADOR"
      break;
    case 2:
      role = "MODERADOR"
      break;
    case 3:
      role = "USUARIO"
      break;
  
    default:
      role = "INVITADO"
      break;
  }
  return res.send(`Hola ${req.user.username}! estas autorizado con tu token y como un ${role}`)
}

/*
En este código se está importando el modelo de User de la carpeta models, el módulo bcrypt para encriptar 
la contraseña antes de guardarla en la base de datos y el módulo jsonwebtoken para generar un token de 
autenticación para el usuario.

Se están exportando dos funciones register y login las cuales son las encargadas de crear un usuario y 
autenticar un usuario respectivamente. la función register se está encriptando la contraseña recibida utilizando 
el módulo bcrypt y se está creando un nuevo usuario en la base de datos utilizando el modelo importado de User. 
Luego de crear el usuario, se está generando un token de autenticación utilizando el módulo jsonwebtoken y se está
 retornando una respuesta HTTP con el código 201 (created) y el token generado. En caso de que ocurra algún error
  al crear el usuario, se está retornando una respuesta HTTP con el código 500 (internal server error) y el 
  mensaje de error.

La función login recibe una petición HTTP de tipo post con el body que contiene el email y password, se está 
buscando en la base de datos si existe un usuario con ese email, luego se esta comparando la contraseña recibida
 con la encriptada en la base de datos, si las contraseñas son iguales se genera un token de autenticación y se 
 retorna una respuesta HTTP con el código 200 (OK) y el token generado. En caso de que ocurra algún error al 
 autenticar el usuario, se está retornando una respuesta HTTP con el código 500 (internal server error) y el 
 mensaje de error.
*/