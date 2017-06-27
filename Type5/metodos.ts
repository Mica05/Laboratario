class Avengerr {
    public nombre:string;
    protected equipo:string;
    private nombreReal:string;

    private puedePelear:boolean;
    private peleasGanadas:number;
   
    constructor(nombre:string, equipo:string, nombreReal:string){
      
       this.nombre = nombre;
       this.nombreReal = nombreReal;
       this.equipo = equipo;
    }

    public mostrar():string{
        return `${this.nombre} ${this.nombreReal}, ${this.equipo}`;
    }
}


let antmann:Avengerr = new Avengerr("Antman", "Cap", "Scott Lang");

antmann.mostrar