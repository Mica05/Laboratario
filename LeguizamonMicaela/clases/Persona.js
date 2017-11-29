var Personas;
(function (Personas) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        Persona.prototype.toJson = function () {
            return "{\"Nombre\":" + this.nombre + ",\"Edad\":" + this.edad + "}";
        };
        return Persona;
    }());
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
