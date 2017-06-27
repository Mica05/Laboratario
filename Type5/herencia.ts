/*
class Avengerr1{
   
   constructor( public nombre:string, private nombreReal:string){

   }
}

class Xmen extends Avengerr1{

}

let ciclope:Xmen = new Xmen("Ciclope", "Scott");

console.log(ciclope);


*/

class Avengerr1{
   
   constructor( public nombre:string, private nombreReal:string){

   }
}

class Xmen extends Avengerr1{

    constructor( a:string, b:string){      
        // llamada al constructor de la clase padre        
        super(a, b);
    }
}

let ciclope:Xmen = new Xmen("Ciclope", "Scott");

console.log(ciclope);
