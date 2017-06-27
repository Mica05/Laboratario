function nombreCompleto(nombre: string, apellido: string, capitalizado: boolean = false): string {
    var cadena: string;
    if (capitalizado)
        cadena = capitalizar(nombre) + " " + capitalizar(apellido);
    else
        cadena = nombre + ' ' + apellido;
    return cadena;
};

function capitalizar(cadena: string): string {

    return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();

};

 console.log(nombreCompleto("tony", "stark", true));
