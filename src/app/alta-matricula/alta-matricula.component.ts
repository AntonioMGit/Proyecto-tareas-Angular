import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alumno } from '../entidades/alumno';
import { Asignatura } from '../entidades/asignatura';
import { Estudios } from '../entidades/estudios';
import { Matricula } from '../entidades/matricula';
import { Pago } from '../entidades/pago';

@Component({
  selector: 'app-alta-matricula',
  templateUrl: './alta-matricula.component.html',
  styleUrls: ['./alta-matricula.component.scss']
})
export class AltaMatriculaComponent implements OnInit {

  errorEnInvocacionHttp:boolean=false

  matricula:Matricula=new Matricula()

  alumnos:Alumno[]=[]
  estudios:Estudios[]=[]
  asignaturas:Asignatura[]=[]
  asignaturasFiltradas:Asignatura[]=[]
  pago:Pago=new Pago()

  tipo:boolean=true

  constructor(public httpCliente:HttpClient) { }

  ngOnInit(): void {
    this.cargarAlumnos()
    this.cargarAsignaturas()
    this.cargarEstudios()
  }

  crearMatricula(){
    this.httpCliente.post<Matricula>(
      environment.urlMatriculas,
      this.matricula
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(mat:Matricula) => {
          //this.clientes.push(cli)
          this.errorEnInvocacionHttp=false
          this.matricula=new Matricula()
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
          console.log("insertado matricula")
        }
      }
    )
  }

  formaPago(){
    this.tipo=!this.tipo
  }

  pintarAsignaturas(){
    this.asignaturasFiltradas=[]
    let idEstudio = this.matricula.estudios
    let listAsignaturas = this.estudios.find((a)=>a.id==idEstudio)
    console.log(listAsignaturas);
    
    listAsignaturas?.asignaturas.forEach((a)=>{
      let asig = this.asignaturas.find((b)=>a==b.id)
      this.asignaturasFiltradas.push(asig?asig:new Asignatura())
    })
  }

  cargarAlumnos(){
    this.httpCliente.get<Alumno[]>(
      environment.urlAlumnos
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Alumno[]) => {
          this.alumnos=datos
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
          console.log("consulta de alumnos termianda")
        }
      }
    )
  }

  cargarEstudios(){
    this.httpCliente.get<Estudios[]>(
      environment.urlEstudios
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Estudios[]) => {
          this.estudios=datos
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
          console.log("consulta de estudios termianda")
        }
      }
    )
  }

  cargarAsignaturas(){
    this.httpCliente.get<Asignatura[]>(
      environment.urlAsignaturas
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Asignatura[]) => {
          this.asignaturas=datos
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
          console.log("consulta de asignaturas termianda")
        }
      }
    )
  }

}
