import { Tarea } from "../models/Tarea.js";

export const crearTarea = async(datosTarea) => {
    try { 
        const nuevaTarea = await Tarea.create(datosTarea);
        return nuevaTarea;    
    } catch(error) {
        error.message = (`Al crear tarea. ${error.message}`);
        throw error;
    }
}

export const buscarTarea = async(id) => {
    try {
        const tarea = await Tarea.findByPk(id);
        
        if (!tarea)
            throw new Error(`Tarea con ID ${id} no existe`);

        return tarea;
    } catch(error) {
        error.message = (`Al buscar tarea. ${error.message}`);
        throw error;
    }
}

export const actualizarTarea = async(id, nuevosDatos) => {
    try {
        const tarea = await Tarea.findByPk(id);

        if (!tarea)
            throw new Error(`Tarea con ID ${id} no existe`);

        await tarea.update(nuevosDatos);
        return tarea;
    } catch(error) {
        error.message = (`Al actualizar tarea. ${error.message}`);
        throw error;
    }
}

export const eliminarTarea = async(id) => {
    try {
        const tarea = await Tarea.findByPk(id);
        
        if (!tarea)
            throw new Error(`Tarea con ID ${id} no existe`);

        await tarea.destroy();
        return tarea;
    } catch(error) {
        error.message = (`Al eliminar tarea. ${error.message}`);
        throw error;
    }
}