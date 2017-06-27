var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
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
console.log(Validaciones.validarTexto("Barry Allen"));
