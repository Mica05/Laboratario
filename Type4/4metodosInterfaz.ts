namespace xy{

interface Xmen{
    nombre: string,
    poder: string
    regenerar( apellido:string ):void;
}

function enviarMision( xmen: Xmen){
    console.log("Enviando a: " + xmen.nombre);

    xmen.regenerar("Logan");
} 


let wolverine = {
    nombre:"James",
    poder: "Regeneración",
    regenerar(apellido:string){
        console.log("Se ha regenerado " + x);
    }
};

enviarMision(wolverine);


}





    