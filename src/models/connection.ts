import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`);

export default async function ConnectDB() {
    try {
        await sequelize.authenticate();
        if (process.env.NODE_ENV === "development") {
            await sequelize.sync();
            console.log('Database is synced successfully');
        }
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error(error);
    }
}