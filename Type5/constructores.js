var Avenger1 = (function () {
    //Declaracion del constructor
    function Avenger1(nombre, equipo, nombreReal) {
        // console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        this.equipo = equipo;
    }
    return Avenger1;
}());
//declaro un objeto
var antman1 = new Avenger1("Antman", "Cap", "Scott Lang");
console.log(antman1);
