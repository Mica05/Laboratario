var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personas;
(function (Personas) {
    var eTipoEmpleado;
    (function (eTipoEmpleado) {
        eTipoEmpleado[eTipoEmpleado["Guardia"] = 0] = "Guardia";
        eTipoEmpleado[eTipoEmpleado["Analista"] = 1] = "Analista";
        eTipoEmpleado[eTipoEmpleado["Desarrollador"] = 2] = "Desarrollador";
        eTipoEmpleado[eTipoEmpleado["Jefe"] = 3] = "Jefe";
        eTipoEmpleado[eTipoEmpleado["Gerente"] = 4] = "Gerente";
        eTipoEmpleado[eTipoEmpleado["Limpieza"] = 5] = "Limpieza";
    })(eTipoEmpleado = Personas.eTipoEmpleado || (Personas.eTipoEmpleado = {}));
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(id, tipo, nombre, edad, foto) {
            var _this = _super.call(this, nombre, edad, foto) || this;
            _this.id = id;
            _this.tipo = tipo;
            return _this;
        }
        Empleado.prototype.toJson = function () {
            var cadena = _super.prototype.toJson.call(this).replace('}', "");
            var json = cadena + (",\"id\":" + this.id + ",\"Tipo\":" + this.tipo.toString() + "}");
            return json;
        };
        return Empleado;
    }(Personas.Persona));
    Personas.Empleado = Empleado;
})(Personas || (Personas = {}));
