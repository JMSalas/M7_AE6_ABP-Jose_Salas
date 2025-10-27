import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Tarea = sequelize.define('Tarea', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    estado: DataTypes.ENUM('pendiente', 'en progreso', "completada"),
    fecha_vencimiento: DataTypes.DATE,
});