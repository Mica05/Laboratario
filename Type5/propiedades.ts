// En JavaScript todas las propiedades y métodos son públicos, en TypeScript por defecto los tipos son públicos

// Ojo que la accesibilidad es de TypeScript

class Avenger2{
    public nombre:string;
    protected equipo:string;
    private nombreReal:string;

    private puedePelear:boolean;
    private peleasGanadas:number;

    //Declaracion del constructor
    constructor(nombre:string, equipo:string, nombreReal:string){
       // console.log("Se ejecuto el constructor");
       this.nombre = nombre;
       this.nombreReal = nombreReal;
       this.equipo = equipo;
    }
}

//declaro un objeto
let antman2:Avenger2 = new Avenger2("Antman", "Cap", "Scott Lang");

antman2.nombre = "Nick Fury";
antman2.equipo = "Ironman";
