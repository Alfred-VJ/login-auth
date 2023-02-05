import { DB } from "../config/sequelize";

export const createRole = async (req, res) => {
    try {
        const {name} = req.body;
        const newRole = await DB.Role.create({name});
        return res.status(201).json({
            message: 'Role created successfully',
            newRole,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error creating role',
            error,
        })
    }
}

export const rolesGetting = async (req, res) => {
    try {
        const roles = await DB.Role.findAll();
        return res.status(200).json({message: "Getting roles successfully", roles})
    } catch (error) {
        return res.status(500).json({message: "Error getting roles"})
    }
    
}
