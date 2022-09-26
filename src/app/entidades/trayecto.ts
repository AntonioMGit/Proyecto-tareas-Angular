export class Trayecto{
    constructor(
        public origen:string,
        public destino:string,
        public fecha:Date,
        public horaSalida:number,
        public horaLlegada:number,
        public precio:number
    ){}
}