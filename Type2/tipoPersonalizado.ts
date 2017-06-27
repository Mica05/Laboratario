// Cuidado que dice type o sea que es un tipo no una variable, y ademas lo escribimos capitalizado
type Heroe={
    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string
 };


let flash:Heroe= {   
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre muy rápido", "Viaja en el tiempo"],
    getNombre: function () {
        return this.nombre;
    }
};
let superman:Heroe = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: ["Vuela", "Superfuerza"],
    getNombre: function () {
        return this.nombre;
    }
};
