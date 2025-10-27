import { Proyecto } from "./Proyecto.js";
import { Tarea } from "./Tarea.js";
import { Empleado } from "./Empleado.js";

Proyecto.hasMany(Tarea, {onDelete: 'CASCADE'});
Tarea.belongsTo(Proyecto);

Tarea.belongsToMany(Empleado, { through: 'TareasEmpleados' });
Empleado.belongsToMany(Tarea, { through: 'TareasEmpleados' });