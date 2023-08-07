import { Sequelize } from "sequelize";

export const dbConnect = new Sequelize(
  "postgres",
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
