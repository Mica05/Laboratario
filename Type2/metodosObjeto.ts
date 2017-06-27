
let flash: { nombre:string, edad:number, poderes:string[], getNombre:()=>string}= {
    nombre: "Barry Allen",
    edad: 24,   
    poderes: ["Corre muy rápido", "Viaja en el tiempo"],

    getNombre(){ 
        return this.nombre;
      }    
};

// flash.getNombre();

