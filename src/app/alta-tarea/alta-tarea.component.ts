import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../entidades/empleado';
import { Proyecto } from '../entidades/proyecto';
import { Tarea } from '../entidades/tarea';

@Component({
  selector: 'app-alta-tarea',
  templateUrl: './alta-tarea.component.html',
  styleUrls: ['./alta-tarea.component.scss']
})
export class AltaTareaComponent implements OnInit {

  errorEnInvocacionHttp:boolean=false

  tarea:Tarea= new Tarea()

  proyectos:Proyecto[]=[]
  empleados:Empleado[]=[]

  constructor(
    public httpCliente:HttpClient
  ) { }

  ngOnInit(): void {
    this.cargarProyectos()
    this.cargarEmpleados()
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

  cargarProyectos(){
    this.httpCliente.get<Proyecto[]>(
      environment.urlProyectos
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Proyecto[]) => {
          this.proyectos=datos
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
          console.log("consulta de proyectos termianda")
        }
      }
    )
  }

  crearTarea(){
    this.httpCliente.post<Tarea>(
      environment.urlTareas,
      this.tarea
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(tar:Tarea) => {
          //this.clientes.push(cli)
          this.errorEnInvocacionHttp=false
          this.tarea=new Tarea()
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
          console.log("insertado tarea")
        }
      }
    )
  }

}
