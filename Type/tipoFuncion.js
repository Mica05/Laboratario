function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log("El mundo está salvado!");
}
var miFuncion;
//let miFuncion: (x:number, y:number)=>number
miFuncion = 10;
miFuncion = sumar;
//console.log(miFuncion(5, 5));
miFuncion = saludar;
//console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
//miFuncion();
//no deberiamos poder hacer esto
