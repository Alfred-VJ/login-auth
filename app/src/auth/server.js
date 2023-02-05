import { app } from "./app";
import { DB } from './config/sequelize'
import * as dotenv from 'dotenv';

dotenv.config();


app.listen(process.env.PORT, () => {
    DB.sequelize.sync({force: false})
    console.table({listen: `Listen in the PORT: https//localhost:${process.env.PORT}`})
})

