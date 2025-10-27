import { Proyecto } from "../models/Proyecto.js";
import { Tarea } from "../models/Tarea.js";

export const encontrarProyectosTareas = async() => {
    try { 
        const proyectos = await Proyecto.findAll({include: Tarea});
        return proyectos.map(proyecto => proyecto.toJSON());
    } catch(error) {
        error.message = (`Al encontrar todos los proyectos y sus tareas asociadas. ${error.message}`);
        throw error;
    }
}