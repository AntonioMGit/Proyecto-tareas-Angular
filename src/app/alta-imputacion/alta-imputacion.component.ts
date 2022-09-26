import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../entidades/empleado';
import { Imputacion } from '../entidades/imputacion';
import { Tarea } from '../entidades/tarea';

@Component({
  selector: 'app-alta-imputacion',
  templateUrl: './alta-imputacion.component.html',
  styleUrls: ['./alta-imputacion.component.scss']
})
export class AltaImputacionComponent implements OnInit {

  errorEnInvocacionHttp:boolean=false

  imputacion:Imputacion=new Imputacion()

  tareas:Tarea[]=[]
  empleados:Empleado[]=[]


  constructor(public httpCliente:HttpClient) { }

  ngOnInit(): void {
    this.cargarEmpleados()
    this.cargarTareas()
  }

  cargarEmpleados(){
    this.httpCliente.get<Empleado[]>(
      environment.urlEmpleados
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Empleado[]) => {
          this.empleados=datos
          this.errorEnInvocacionHttp=false
        },
        //para tratar errores
        error:(error:HttpErrorResponse) =>{
          this.errorEnInvocacionHttp=true
          if(error.status==404){
            console.log("error 404")
          }else if(error.status==500){
            console.log(error.error)
          }
        },
        //saber cuando termina la invocacion
        complete:()=>{
          console.log("consulta de empleados termianda")
        }
      }
    )
  }

  cargarTareas(){
    this.httpCliente.get<Tarea[]>(
      environment.urlTareas
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Tarea[]) => {
          this.tareas=datos
          this.errorEnInvocacionHttp=false
        },
        //para tratar errores
        error:(error:HttpErrorResponse) =>{
          this.errorEnInvocacionHttp=true
          if(error.status==404){
            console.log("error 404")
          }else if(error.status==500){
            console.log(error.error)
          }
        },
        //saber cuando termina la invocacion
        complete:()=>{
          console.log("consulta de tareas termianda")
        }
      }
    )
  }

  crearImputacion(){
    this.httpCliente.post<Imputacion>(
      environment.urlImputaciones,
      this.imputacion
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(tar:Imputacion) => {
          //this.clientes.push(cli)
          this.errorEnInvocacionHttp=false
          this.imputacion=new Imputacion()
        },
        //para tratar errores
        error:(error:HttpErrorResponse) =>{
          this.errorEnInvocacionHttp=true
          if(error.status==404){
            console.log("error 404")
          }else if(error.status==500){
            console.log(error.error)
          }
        },
        //saber cuando termina la invocacion
        complete:()=>{
          console.log("insertado imputacion")
        }
      }
    )
  }

}
