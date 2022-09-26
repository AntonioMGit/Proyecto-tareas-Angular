export class Tarea{
    constructor(
        public nombre:string="",
        public fechaInicio:string="",
        public fechaFin:string="",
        public proyecto?:number,
        public asignaciones?:string[],
        public id?:number
    ){}
}