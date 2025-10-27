import { sequelize } from "./config/database.js";
import "./models/associations.js";
import { crearProyecto, eliminarProyecto } from "./controlllers/proyectos_controller.js";
import { crearTarea, buscarTarea, actualizarTarea } from "./controlllers/tareas_controller.js";
import { buscarEmpleado } from "./controlllers/empleados_controller.js";
import { encontrarProyectosTareas } from "./queries/consultas.js";
import { crearProyectosIniciales } from "./seeders/proyectos_seeders.js";
import { crearEmpleadosIniciales } from "./seeders/empleados_seeders.js";
import { crearTareasIniciales } from "./seeders/tareas_seeders.js";
import { asignarRelaciones } from "./seeders/relaciones_seeders.js";
import { datosProyectoPrueba, datosTareasPrueba } from "./seeders/datosPrueba.js";

async function inicializarApp() {
  try {
    // AUTENTICACIÓN: Verificar la conexión a la DB
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida exitosamente.');

    // SINCRONIZACIÓN: Crear las tablas (si no existen)
    // Usar { force: false } para no eliminar datos existentes.
    // Cambiar a { force: true } para eliminar y recrear las tablas.
    await sequelize.sync({ force: true }); 
    console.log('Todas las tablas han sido sincronizadas.');

  } catch (error) {
    error.message = (`Al inicializar la aplicación. ${error.message}`);
    console.error(error.message);
    process.exit(1); // Sale si hay un error crítico (como no poder conectar a la DB)
  }
}

async function main() {
    await inicializarApp(); 
    
    try {
        await crearProyectosIniciales();
        await crearEmpleadosIniciales();
        await crearTareasIniciales();
        await asignarRelaciones();

        //Crear Proyecto Prueba
        const nuevoProyecto = await crearProyecto(datosProyectoPrueba);
        console.log("\n============================\nNuevo Proyecto Prueba\n============================");
        console.log(nuevoProyecto.toJSON());

        // Crear tareas de Prueba
        const nuevaTarea1 = await crearTarea(datosTareasPrueba[0]);
        let nuevaTarea2 = await crearTarea(datosTareasPrueba[1]);

        // Agregar las tareas al proyecto de prueba
        await nuevoProyecto.addTareas([nuevaTarea1, nuevaTarea2]);

        // Buscar dos empleados
        const empleado1 = await buscarEmpleado(1);
        const empleado5 = await buscarEmpleado(5);

        // Agregar empleados a la nuevas tareas
        await nuevaTarea1.addEmpleado(empleado1);
        await nuevaTarea2.addEmpleado(empleado5);

        // Obtener todos los proyectos y sus tareas asociadas
        const proyectos = await encontrarProyectosTareas();

        // Obtener el ultimo proyecto agregado y sus tareas
        const {Tareas, ...proyecto} = proyectos.at(-1);

        console.log("\n============================\nÚltimo Proyecto y sus tareas\n============================");
        console.log(`ID Proyecto: ${proyecto.id}\nNombre: ${proyecto.nombre}\nDescripción: ${proyecto.descripcion}\n\nTareas:\n`);
        console.log(...Tareas);

        // Actualizar tarea ID: 7
        nuevaTarea2 = await actualizarTarea(nuevaTarea2.toJSON().id, {estado:"en progreso"});
        console.log("\n============================\nÚltima Tarea y actualizada\n============================");
        console.log(nuevaTarea2.toJSON());

        // Eliminar último proyecto
        const proyectoEliminado = await eliminarProyecto(proyecto.id);
        console.log("\n============================\nProyecto Eliminado\n============================");
        console.log(proyectoEliminado.toJSON());

        // Verificar que las tareas asociadas fueron eliminadas en cascada
        // Debería lanzar error de id no encontrada
        console.log("\n================================\nVerificación eliminación cascada\n================================");
        await buscarTarea(Tareas[0].id);

        process.exit(0);
    } catch (error) {
        console.error(error.name, error.message);
        process.exit(1);
    }
}

main();
