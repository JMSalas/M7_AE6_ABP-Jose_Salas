import { Proyecto } from "../models/Proyecto.js";
import { Tarea } from "../models/Tarea.js";
import { Empleado } from "../models/Empleado.js"


export async function asignarRelaciones() {
    const proyectos = await Proyecto.findAll();
    const tareas = await Tarea.findAll();
    const empleados = await Empleado.findAll();

    await proyectos[0].addTareas([tareas[0], tareas[1], tareas[2]]);
    await proyectos[1].addTareas([tareas[3], tareas[4]]);

    await tareas[0].addEmpleados([empleados[0], empleados[1]]);
    await tareas[1].addEmpleados([empleados[1]]);
    await tareas[2].addEmpleados([empleados[2], empleados[3]]);
    await tareas[3].addEmpleados([empleados[3]]);
    await tareas[4].addEmpleados([empleados[4], empleados[2]]);

    console.log("Relaciones iniciales creadas.");
}