var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 0] = "min";
    Volumen[Volumen["medio"] = 1] = "medio";
    Volumen[Volumen["maximo"] = 2] = "maximo";
})(Volumen || (Volumen = {}));
console.log(Volumen["medio"]);
