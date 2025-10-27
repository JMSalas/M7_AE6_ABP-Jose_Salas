import { Tarea } from "../models/Tarea.js";

export async function crearTareasIniciales() {
    const fecha_vencimiento = new Date();

    fecha_vencimiento.setDate(fecha_vencimiento.getDate() + 7);

    await Tarea.bulkCreate([
        {
            titulo: "Tarea 1",
            descripcion: "Descripcion tarea 1",
            estado: 'pendiente',
            fecha_vencimiento: fecha_vencimiento,            
        },
        {
            titulo: "Tarea 2",
            descripcion: "Descripcion tarea 2",
            estado: 'en progreso',
            fecha_vencimiento: fecha_vencimiento,            
        },
        {
            titulo: "Tarea 3",
            descripcion: "Descripcion tarea 3",
            estado: 'en progreso',
            fecha_vencimiento: fecha_vencimiento,            
        },
        {
            titulo: "Tarea 4",
            descripcion: "Descripcion tarea 4",
            estado: 'pendiente',
            fecha_vencimiento: fecha_vencimiento,            
        },
        {
            titulo: "Tarea 5",
            descripcion: "Descripcion tarea 5",
            estado: 'completada',
            fecha_vencimiento: fecha_vencimiento,            
        },
    ]);

    console.log("Tareas iniciales creados.");
}