import {Sequelize} from 'sequelize';
import User from '../models/user';
import Role from '../models/role';

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    logging: false,
  },
);





Role(sequelize); 
User(sequelize); 

const userModels = sequelize.models.User;
const roleModels = sequelize.models.Role;

// userModels.belongsToMany(Role, {trough: 'userRole'});
// roleModels.belongsToMany(User, {trough: 'userRole'});


export const DB = {
  ...sequelize.models,
  sequelize,
}
/*
Este archivo se encarga de importar los modelos User y Role, y también se encarga de configurar la conexión 
a la base de datos con los datos del archivo .env y se establece las opciones necesarias para el funcionamiento
 de Sequelize.

Además, se establece las relaciones entre las tablas de las bases de datos, en este caso es una relación uno a
 muchos entre usuarios y roles.

Ten en cuenta que es importante importar y exportar los modelos para utilizarlos en otras partes de la aplicación.

Es importante que revises el código y asegúrate de que está correctamente configurado para tu proyecto y adecuado 
a las necesidades de tu aplicación.
*/