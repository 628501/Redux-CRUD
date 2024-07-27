import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./Router/user.router.js";
import mysql from "mysql2";
const app = express();

dotenv.config();



export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

connection.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Mysql Connected");
    }
})

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"],
}));

app.use(json());
app.use("/api/users" , userRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})