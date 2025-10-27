import { Empleado } from "../models/Empleado.js";

export async function crearEmpleadosIniciales() {

    await Empleado.bulkCreate([
        {
            nombre: "Empleado 1",
            email: "empleado1@gmail.com"
        },
        {
            nombre: "Empleado 2",
            email: "empleado2@gmail.com"
        },
        {
            nombre: "Empleado 3",
            email: "empleado3@gmail.com"
        },
        {
            nombre: "Empleado 4",
            email: "empleado4@gmail.com"
        },
        {
            nombre: "Empleado 5",
            email: "empleado5@gmail.com"
        },
    ]);

    console.log("Empleados iniciales creados.");
}