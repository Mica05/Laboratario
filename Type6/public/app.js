var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (Text.length) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
    console.log(Validaciones.validarTexto("Barry Allen"));
})(Validaciones || (Validaciones = {}));
/// <reference path="validaciones/textos.ts" />
if (Validaciones.validarTexto("Barry Allen")) {
    console.log("El texto es valido");
}
else {
    console.log("El texto no es valido");
}
