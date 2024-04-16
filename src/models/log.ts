import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection";
import User from "./user";

class Log extends Model {}

Log.init(
    {
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'logs',
        timestamps: true
    }
);

Log.belongsTo(User, {
    foreignKey: {
        allowNull: false,
    },
    onDelete: 'CASCADE'
});

export default Log;