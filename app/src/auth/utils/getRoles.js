import { DB } from "../config/sequelize"

export const getRoles = async (id_role) => {
    try {
        const role = await DB.Role.findByPk(id_role)
        if(role){
           return true;
        }else{
           return false
        }
    } catch (error) {
        return {
            message: "Error role not exist",
            error,
            status: 500
        }
    }
}
