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
var Motor = (function () {
    function Motor(Potencia, tipo) {
        this.Potencia = Potencia;
        this.tipo = tipo;
    }
    Motor.prototype.encender = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.tipo);
        }, 1000);
    };
    Motor.prototype.detener = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.tipo);
        }, 3000);
    };
    return Motor;
}());
var Accesorio = (function () {
    function Accesorio(idAccesorio, nombre) {
        this.idAccesorio = idAccesorio;
        this.nombre = nombre;
    }
    return Accesorio;
}());
var Vehiculo = (function () {
    function Vehiculo(precioBase, motor, marca, modelo) {
        this._motor = motor;
        this._precioBase = precioBase;
        this.marca = marca;
        this.modelo = modelo;
    }
    Vehiculo.prototype.calcularPrecioTotal = function () {
        var porcentajeImpuesto = .08;
        return this._precioBase + (porcentajeImpuesto * this._precioBase);
    };
    Vehiculo.prototype.agregarAccesorios = function () {
        var accessorios = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessorios[_i] = arguments[_i];
        }
        this.listaAccessorios = '';
        for (var i = 0; i < accessorios.length; i++) {
            var ac = accessorios[i];
            this.listaAccessorios += ac.idAccesorio + ' ' + ac.nombre + '<br />';
        }
    };
    Vehiculo.prototype.getAccesorioList = function () {
        return this.listaAccessorios;
    };
    Object.defineProperty(Vehiculo.prototype, "basePrice", {
        get: function () {
            return this._precioBase;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._precioBase = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "motor", {
        get: function () {
            return this._motor;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine.';
            this._motor = value;
        },
        enumerable: true,
        configurable: true
    });
    return Vehiculo;
}());
var Camion = (function (_super) {
    __extends(Camion, _super);
    function Camion(precioBase, motor, marca, modelo, largo, cuatroXcuatro) {
        var _this = _super.call(this, precioBase, motor, marca, modelo) || this;
        _this.largo = largo;
        _this.cuatroXcuatro = cuatroXcuatro;
        return _this;
    }
    return Camion;
}(Vehiculo));
window.onload = function () {
    var camion = new Camion(40000, new Motor(300, 'V8'), 'Chevy', 'Silverado', 'Largo', true);
    camion.agregarAccesorios(new Accesorio(1234, 'Techo Solar'), new Accesorio(4321, 'Equipo de Remolque'));
    camion.motor.encender(function (status, tipo) {
        alert(tipo + ' fue encendido');
        camion.motor.detener(function (status, tipo) {
            alert(tipo + ' fue apagado');
        });
    });
    document.getElementById("content").innerHTML = camion.getAccesorioList() + '</br> Precio Total = ' + camion.calcularPrecioTotal();
    console.log(camion.getAccesorioList() + "Precio TOtal: " + camion.calcularPrecioTotal());
};
