class Avenger1{
    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    //Declaracion del constructor
    constructor(nombre:string, equipo:string, nombreReal:string){
      
       this.nombre = nombre;
       this.nombreReal = nombreReal;
       this.equipo = equipo;
    }
}

//declaro un objeto
let antman1:Avenger1 = new Avenger1("Antman", "Cap", "Scott Lang");

console.log(antman1);