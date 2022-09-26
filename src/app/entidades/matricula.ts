import { Pago } from "./pago";

export class Matricula{
    constructor(
        public alumno:string="",
        public estudios?:number,
        public asignaturas:number[]=[],
        public pago:Pago = new Pago(),
        public id?:number
    ){}
}