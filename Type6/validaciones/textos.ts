namespace Validaciones {

    export function validarTexto(texto: string): boolean {
    if (Text.length) {
        return true;
    }
    return false;
}

console.log(
    Validaciones.validarTexto("Barry Allen")
);

}
