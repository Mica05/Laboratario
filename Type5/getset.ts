class Avengerrr {

    private _nombre: string;

    constructor(nombre?: string) {
        this._nombre = nombre;
    }

    get nombre(): string {

        if (this._nombre) {
            return this._nombre;
        } else {
            return "No tiene ningun nombre el Avenger";
        }
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }
}

let ciclope1: Avengerrr = new Avengerrr("Ciclope");
