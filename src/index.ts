import { createConnection } from "typeorm";
import { User } from "./Entities/User";
import * as dotenv from 'dotenv'


createConnection({
    type : "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "vitalhealthcare",
    entities: [],
    synchronize: true,
}).then(() => {
    console.log("Connection Successful")
}).catch(e => {
    console.log(e);
})





