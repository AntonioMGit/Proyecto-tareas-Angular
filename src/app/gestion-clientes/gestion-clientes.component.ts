import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../entidades/cliente';

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.scss']
})
export class GestionClientesComponent implements OnInit {
  clientes :Cliente[] = []
  errorEnInvocacionHttp:boolean=false

  cliente:Cliente=new Cliente()

  constructor(
    public httpCliente:HttpClient
  ) { }

  ngOnInit(): void {
  }

  cargarClientes(){
    this.httpCliente.get<Cliente[]>(
      environment.urlServidor
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(datos:Cliente[]) => {
          this.clientes=datos
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
          console.log("consulta de clientes termianda")
        }
      }
    )
  }

  crearCliente(){
    this.httpCliente.post<Cliente>(
      environment.urlServidor,
      this.cliente
    ).subscribe(
      {
        //para recibir datos cuando no hay error
        next:(cli:Cliente) => {
          this.clientes.push(cli)
          this.errorEnInvocacionHttp=false
          this.cliente=new Cliente()
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
          console.log("insertado cliente")
        }
      }
    )
  }
}
