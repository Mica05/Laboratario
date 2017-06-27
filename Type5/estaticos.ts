class Xmenn{
    static nombre:string = "Wolverine";

    constructor(){

    }

    static crearXmen(){
        return new Xmenn();
    }

}

console.log(Xmenn.nombre)

let deadpool:Xmenn = Xmenn.crearXmen();

