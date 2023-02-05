import { DataTypes } from 'sequelize';
import Role from './role';

const User = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      id_role: {
        type: DataTypes.INTEGER,
        references: {
          model: "Roles",
          key: 'id_role',
        }
      }
    },
  )
  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: 'id_role', targetKey: 'id_role' });
  }
  return User;
}

export default User;

/*
cuando se utilizan las funciones hasMany y belongsTo de Sequelize para establecer relaciones entre tablas, no se 
genera una tabla de relación adicional en la base de datos. En su lugar, se utilizan claves foráneas en las tablas
 existentes para establecer la relación.

En tu caso, en la tabla User se agrega una columna id_role que hace referencia a la columna id_role de la tabla Role,
 esta columna es la clave foránea que establece la relación entre ambas tablas. De esta manera cuando consultes un 
 usuario, puedes obtener su rol relacionado mediante la propiedad role, y cuando consultes un rol, puedes obtener 
 todos sus usuarios relacionados mediante la propiedad users.

En resumen, no se genera una tabla de relación adicional, pero se utilizan las claves foráneas en las tablas existentes para establecer la relación y se puede acceder a los datos relacionados mediante las propiedades asociadas en los modelos.
*/

