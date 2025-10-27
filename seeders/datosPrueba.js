const fecha_inicio = new Date();
const fecha_fin = new Date(fecha_inicio);
    
fecha_fin.setDate(fecha_fin.getDate() + 7);

export const datosProyectoPrueba = {
    nombre : "Proyecto Prueba",
    descripcion: "Descripción Proyecto Prueba",
    fecha_inicio: fecha_inicio,
    fecha_fin: fecha_fin,
};

export const datosTareasPrueba = [
        {
            titulo: "Tarea Prueba 1",
            descripcion: "Descripcion tarea prueba 1",
            estado: 'pendiente',
            fecha_vencimiento: fecha_fin,            
        },
        {
            titulo: "Tarea Prueba 2",
            descripcion: "Descripcion tarea prueba 2",
            estado: 'pendiente',
            fecha_vencimiento: fecha_fin,            
        }
];