//En JavaScript todos los parametros son opcionales mostrar ejemplo en el navegador

function nombreCompleto( nombre:string, apellido:string ):string{
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

let nombre = nombreCompleto("Barry", "Allen");

// let nombre = nombreCompleto("Barry");


console.log(nombre);
