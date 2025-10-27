import { Proyecto } from "../models/Proyecto.js";

export const crearProyecto = async(datosProyecto) => {
    try { 
        const nuevoProyecto = await Proyecto.create(datosProyecto);
        return nuevoProyecto;    
    } catch(error) {
        error.message = (`Al crear proyecto. ${error.message}`);
        throw error;
    }
}

export const buscarProyecto = async(id) => {
    try {
        const proyecto = await Proyecto.findByPk(id);
        
        if (!proyecto)
            throw new Error(`Proyecto con ID ${id} no existe`);

        return proyecto;
    } catch(error) {
        error.message = (`Al buscar proyecto. ${error.message}`);
        throw error;
    }
}

export const actualizarProyecto = async(id, nuevosDatos) => {
    try {
        const proyecto = await Proyecto.findByPk(id);
        
        if (!proyecto)
            throw new Error(`Proyecto con ID ${id} no existe`);

        await proyecto.update(nuevosDatos);
        return proyecto;
    } catch(error) {
        error.message = (`Al actualizar proyecto. ${error.message}`);
        throw error;
    }
}

export const eliminarProyecto = async(id) => {
    try {
        const proyecto = await Proyecto.findByPk(id);
        
        if (!proyecto)
            throw new Error(`Proyecto con ID ${id} no existe`);

        await proyecto.destroy();
        return proyecto;
    } catch(error) {
        error.message = (`Al eliminar proyecto. ${error.message}`);
        throw error;
    }
}