export class Imputacion{
    constructor(
        public empleado:string="",
        public tarea?:number,
        public fechaFin:string="",
        public horas?:number,
        public id?:number
    ){}
}