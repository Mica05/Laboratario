function sumar(a:number, b:number):number{
    return a+b;
}

function saludar(nombre:string):string{
    return "I'm " + nombre;
}

function salvarMundo():void{
    console.log("El mundo está salvado!");
}

let miFuncion;

//let miFuncion: (x:number, y:number)=>number

miFuncion = 10;

miFuncion = sumar;
//console.log(miFuncion(5, 5));

miFuncion = saludar;
//console.log(miFuncion("Batman"));

miFuncion = salvarMundo;
//miFuncion();


//no deberiamos poder hacer esto

