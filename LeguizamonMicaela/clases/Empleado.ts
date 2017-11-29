namespace Personas {
  export  enum eTipoEmpleado {
        Guardia=0,
        Analista,
        Desarrollador,
        Jefe,
        Gerente,
        Limpieza

    }
 export  class Empleado extends Persona {
        public id: number;
        public tipo: eTipoEmpleado;

        constructor(id: number, tipo: eTipoEmpleado, nombre: string, edad: number,foto:string) {
            super(nombre, edad,foto)
            this.id = id;
            this.tipo = tipo;
        }
        public toJson():string
        {
            let cadena=super.toJson().replace('}',"");
            let json=cadena + `,"id":${this.id},"Tipo":${this.tipo.toString()}}`;
        return json;
        }
    }

}