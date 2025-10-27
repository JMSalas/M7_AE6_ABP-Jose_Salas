import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Proyecto = sequelize.define('Proyecto', {
    nombre : DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
});
