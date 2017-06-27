namespace yy{

interface Xmen{
    nombre: string;
    nombreReal?: string;
    regenerar( nombreReal:string ):void;
}

class Mutante implements Xmen{
    nombre:string;
    poder: string;
    regenerar(nombre:string){
        console.log("Hola" + nombre);
    }
}

let Wolverine = new Mutante();

Wolverine.

/*
(<Xmen>Wolverine).
*/

}


