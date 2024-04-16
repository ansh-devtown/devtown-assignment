import { DataTypes, Model } from "sequelize";
import { sequelize } from "./connection";

class User extends Model {}

User.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Must be a valid email"
                }
            }
        },
    },
    {
        sequelize,
        modelName: 'users',
        timestamps: true,
    }
)

export default User;