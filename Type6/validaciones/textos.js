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
