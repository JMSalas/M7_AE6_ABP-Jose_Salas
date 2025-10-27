import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Empleado = sequelize.define('Empleado', {
    nombre: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
});