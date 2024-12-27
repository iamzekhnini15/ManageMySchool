import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../models/User";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [
        User,
    ],
    synchronize: true,
    logging: true,
});