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
var Avengerr1 = (function () {
    function Avengerr1(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Avengerr1;
}());
var Xmen = (function (_super) {
    __extends(Xmen, _super);
    function Xmen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen;
}(Avengerr1));
var ciclope = new Xmen("Ciclope", "Scott");
console.log(ciclope);
