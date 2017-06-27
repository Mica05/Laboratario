
let flash: { nombre:string, edad:number, poderes:string[], getNombre:()=>string}= {
    //poderes:any[] hay que cambiar en todas las ocurrencias de este tipo de objeto
    nombre: "Barry Allen",
    edad: 24,   
    poderes: ["Corre muy rápido", "Viaja en el tiempo"],

    getNombre(){ 
        return this.nombre;
      }    
};


let superman: { nombre:string, edad:number, poderes:string[], getNombre:()=>string}= {
    nombre: "Clark Kent",
    edad: 500,   
    poderes: ["Vuela", "Superfuerza"],

    getNombre(){ 
        return this.nombre;
      }    
};
