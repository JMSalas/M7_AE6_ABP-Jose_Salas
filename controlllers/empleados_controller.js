import { Empleado } from "../models/Empleado.js";

export const crearEmpleado = async(datosEmpleado) => {
    try { 
        const nuevoEmpleado = await Empleado.create(datosEmpleado);
        return nuevoEmpleado;    
    } catch(error) {
        error.message = (`Al crear empleado. ${error.message}`);
        throw error;
    }
}

export const buscarEmpleado = async(id) => {
    try {
        const empleado = await Empleado.findByPk(id);
        
        if (!empleado)
            throw new Error(`Empleado con ID ${id} no existe`);

        return empleado;
    } catch(error) {
        error.message = (`Al buscar empleado. ${error.message}`);
        throw error;
    }
}

export const actualizarEmpleado = async(id, nuevosDatos) => {
    try {
        const empleado = await Empleado.findByPk(id);

        if (!empleado)
            throw new Error(`Empleado con ID ${id} no existe`);

        await empleado.update(nuevosDatos);
        return empleado;
    } catch(error) {
        error.message = (`Al actualizar empleado. ${error.message}`);
        throw error;
    }
}

export const eliminarEmpleado = async(id) => {
    try {
        const empleado = await Empleado.findByPk(id);
        
        if (!empleado)
            throw new Error(`Empleado con ID ${id} no existe`);

        await empleado.destroy();
        return empleado;
    } catch(error) {
        error.message = (`Al eliminar empleado. ${error.message}`);
        throw error;
    }
}