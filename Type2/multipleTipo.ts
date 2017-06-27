type Heroe2={
    nombre:string,
    edad:number    
 };

let loQueSea: string | number | Heroe2;

loQueSea = "Juan";
loQueSea = 36,
loQueSea = {
    nombre: "Flash",
    edad:24
};