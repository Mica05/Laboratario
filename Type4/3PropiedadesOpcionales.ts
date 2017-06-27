namespace xx{

interface Xmen{
    nombre: string,
    poder?: string
}

function enviarMision( xmen: Xmen){
    console.log("Enviando a: " + xmen.nombre);
} 

function enviarCuartel( xmen: Xmen){
    console.log("Enviando al cuartel: " + xmen.nombre);
} 

let wolverine = {
    nombre:"James",
    
};

enviarCuartel(wolverine);
enviarMision(wolverine);


}



