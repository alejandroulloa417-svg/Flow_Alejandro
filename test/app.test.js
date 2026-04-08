import { saludar, despedir, estadosistema } from "../src/app.js"

function ejecutarpruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Raider")
    if (r1.includes("raider")) {
        console.log("test 1 pasado: funcion saludar en codeRaider es correcta");
        pasadas++;
    } else {
        console.log("test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadosistema();
    if (actualEstado.estado === "activo") {
        console.log("test 2: pasado: estadosistema() funciona en coderider");
        pasadas++;
    } else {
        console.log("test 2 fallido: ", estado, "en codeRider");
        fallidas++;
    }
    console.log("\nResultados: " + pasadas + " pasadas, " + fallidas + "fallidas");
    if (fallidas > 0) process.exit(1); "fallidas"
}
ejecutarpruebas();
