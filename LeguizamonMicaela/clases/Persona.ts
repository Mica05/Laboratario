namespace Personas
{
 export   abstract class Persona{
        public nombre:string;
        public edad:number;
        public foto:string;

        constructor (nombre:string,edad:number)
        {
            this.nombre=nombre;
            this.edad=edad;
          
        
        }
    public toJson():string{
         return `{"Nombre":${this.nombre},"Edad":${this.edad}}`;
    }

    }
}