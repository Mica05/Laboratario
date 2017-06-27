var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (Text.length) {
            return true;
        }
        return false;
    }
    Validaciones.validarTexto = validarTexto;
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
console.log(Validaciones.validarTexto("Barry Allen"));
var hoy = new Date();
console.log(Validaciones.validarFecha(hoy));
