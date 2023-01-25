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

