// En JavaScript todas las propiedades y métodos son públicos, en TypeScript por defecto los tipos son públicos
// Ojo que la accesibilidad es de TypeScript
var Avenger2 = (function () {
    //Declaracion del constructor
    function Avenger2(nombre, equipo, nombreReal) {
        // console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        this.equipo = equipo;
    }
    return Avenger2;
}());
//declaro un objeto
var antman2 = new Avenger2("Antman", "Cap", "Scott Lang");
antman2.nombre = "Nick Fury";
//antman2.equipo = "Ironman";
