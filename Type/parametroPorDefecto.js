function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    var cadena;
    if (capitalizado)
        cadena = capitalizar(nombre) + " " + capitalizar(apellido);
    else
        cadena = nombre + ' ' + apellido;
    return cadena;
}
;
function capitalizar(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}
;
console.log(nombreCompleto("tony", "stark", true));
