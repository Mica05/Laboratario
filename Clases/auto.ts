class Motor {
    constructor(public Potencia: number, public tipo: string) { }

    encender(callback: (startStatus: boolean, tipo: string) => void) {
        window.setTimeout(() => {
            callback(true, this.tipo);
        }, 1000);
    }

    detener(callback: (stopStatus: boolean, tipo: string) => void) {
        window.setTimeout(() => {
            callback(true, this.tipo);
        }, 3000);
    }
}

class Accesorio {
    constructor(public idAccesorio: number, public nombre: string) {}
}

class Vehiculo {
    private _precioBase: number;
    private _motor: Motor;
    marca: string;
    modelo: string;
    private listaAccessorios: string;

    constructor(precioBase: number, motor: Motor, marca: string, modelo: string) {
        this._motor = motor;
        this._precioBase = precioBase;
        this.marca = marca;
        this.modelo = modelo;
    }

    calcularPrecioTotal() : number {
        let porcentajeImpuesto = .08;
        return this._precioBase + (porcentajeImpuesto * this._precioBase);
    }

    agregarAccesorios(...accessorios: Accesorio[]) {
        this.listaAccessorios = '';
        for (var i = 0; i < accessorios.length; i++) {
            var ac = accessorios[i];
            this.listaAccessorios += ac.idAccesorio + ' ' + ac.nombre + '<br />';
        }
    }

    getAccesorioList(): string {
        return this.listaAccessorios;
    }

    get basePrice(): number {
        return this._precioBase;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._precioBase = value;
    }

    get motor(): Motor {
        return this._motor;
    }

    set motor(value: Motor) {
        if (value == undefined) throw 'Please supply an engine.';
        this._motor = value;
    }
}

class Camion extends Vehiculo {
    largo: string;//corto, mediano, largo
    cuatroXcuatro: boolean;

    constructor(precioBase: number, motor: Motor, marca: string, modelo: string,
        largo: string, cuatroXcuatro: boolean) {
        super(precioBase, motor, marca, modelo);
        this.largo = largo;
        this.cuatroXcuatro = cuatroXcuatro;
    }
}


window.onload = function () {
    let camion = new Camion(40000, new Motor(300, 'V8'), 'Chevy', 'Silverado',
                         'Largo', true);
    camion.agregarAccesorios(new Accesorio(1234, 'Techo Solar'), new Accesorio(4321, 'Equipo de Remolque'));
    camion.motor.encender((status: boolean, tipo: string) => {
        alert(tipo + ' fue encendido');
        camion.motor.detener((status: boolean, tipo: string) => {
            alert(tipo + ' fue apagado');
        });
    });
    document.getElementById("content").innerHTML = camion.getAccesorioList() + '</br> Precio Total = '+camion.calcularPrecioTotal();
console.log(camion.getAccesorioList()+ "Precio TOtal: " +camion.calcularPrecioTotal());
};


