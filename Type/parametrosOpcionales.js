//En JavaScript todos los parametros son opcionales mostrar ejemplo en el navegador
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
/*
function nombreCompleto( nombre:string, apellido?:string ):string{

    if(apellido){
          return nombre + ' ' + apellido;
    }
    else{

          return nombre;
    }
}*/
var nombre = nombreCompleto("Barry", "Allen");
// let nombre = nombreCompleto("Barry");
console.log(nombre);
