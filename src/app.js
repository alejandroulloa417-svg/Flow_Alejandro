export function saludar(nombre) {
    return "hola " + nombre + ", bienvenido a aplicacion de codeRider!";
}

export function despedir(nombre) {
    return "hasta pronto, " + nombre + "!codeRider";
}

export function estadosistema() {
    return {
        estado: "activo",
        version: "1.0.0",
        message: "sistema codeRider funcionando correctamente"
    };
}

export function sumar(a, b) {
    return a + b;
}
export function restar(a, b) {
    return a - b;
}

export function healthCheck() {
    return {
        status: "ok",
        timestamp: new Date().toISOString(),
        servicio: "streamflow api",
        version: "1.0.0"
    };
}
export function factorial(n) {
    if (n < 0) {
        return "No existe factorial para números negativos";
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}