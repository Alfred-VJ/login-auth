import { DataTypes } from 'sequelize';

const Role = (sequelize) => {
    const Role = sequelize.define(
        "Role",
        {
            id_role: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            }
        }
    )
    Role.associate = (models) => {
        Role.hasMany(models.User, { foreignKey: 'id_role' });
    }
    return Role;
}

export default Role;
