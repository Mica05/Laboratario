namespace Validaciones {

    export function validarTexto(texto: string): boolean {
    if (Text.length) {
        return true;
    }
    return false;
}

export function validarFecha(fecha: Date): boolean {
    if (isNaN(fecha.valueOf())) {
        return false;
    }
    return true;
}
}

console.log(
    Validaciones.validarTexto("Barry Allen")
);

let hoy = new Date();

console.log(
    Validaciones.validarFecha(hoy)
);
