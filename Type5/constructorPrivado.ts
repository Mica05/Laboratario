// Creamos una clase de la que solo puede haber una en nuestro programa

class Apocalipsis{
    static instancia:Apocalipsis;

    private constructor(public nombre:string){

    }

    static llamarApocalipsis():Apocalipsis{
        if(Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis!!!");
        }

        return Apocalipsis.instancia;

    }
}


//let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis!!!");
let real = Apocalipsis.llamarApocalipsis();

console.log(real);