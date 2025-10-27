import { Proyecto } from "../models/Proyecto.js";

export async function crearProyectosIniciales() {
    const fecha_inicio = new Date();
    const fecha_fin = new Date(fecha_inicio);
    
    fecha_fin.setDate(fecha_fin.getDate() + 7);

    await Proyecto.bulkCreate([
        {
            nombre : "Proyecto 1",
            descripcion: "Descripción Proyecto 1",
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
        },
        {
            nombre : "Proyecto 2",
            descripcion: "Descripción Proyecto 2",
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
        }
    ]);

    console.log("Proyectos iniciales creados.");
}