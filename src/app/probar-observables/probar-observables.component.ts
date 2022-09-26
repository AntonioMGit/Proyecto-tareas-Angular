import { Component, OnInit } from '@angular/core';
import { filter, map, Observer, Subscription } from 'rxjs';
import { ProbarObservablesService } from '../probar-observables.service';

@Component({
  selector: 'app-probar-observables',
  templateUrl: './probar-observables.component.html',
  styleUrls: ['./probar-observables.component.scss']
})
export class ProbarObservablesComponent implements OnInit {

  observador:Observer<any>
  subscripcionSecuencia:Subscription=new Subscription()
  subscripcionUbicaciones:Subscription=new Subscription()

  constructor(
    public probarObservables:ProbarObservablesService
  ) { 
    this.observador={
      next:(datos:any) => {
          console.log("hemos recibido datos: %o", datos)
      },
      error:(error:any)=>{
        console.log("hemos recibido un error: %o", error)
      },
      complete:()=>{
        console.log("hemos recibido toda la informacion")
      }
    }
  }

  ngOnInit(): void {
  }

  conectarADatos(){
    this.probarObservables.datos$.subscribe(
      (dato:number)=>console.log("dato: %d", dato)
      
    )
  }

  conectarASecuencia(){
    this.subscripcionSecuencia=this.probarObservables.secuencia$.subscribe(this.observador)
  }

  desconectarDeSecuencia(){
    this.subscripcionSecuencia.unsubscribe()
  }

  conectarAUbicacion(){
    this.subscripcionUbicaciones=this.probarObservables.ubicaciones$.subscribe(this.observador)
  }

  desconectarDeUbicacion(){
    this.subscripcionUbicaciones.unsubscribe()
  }

  conectarADatosConOperadores(){
    this.probarObservables.datos$.pipe(
      filter(
        (valor)=>valor>=20&&valor<=40
      ),
      map(
        (valor)=> valor*1.21
      )
    ).subscribe(this.observador)
  }

}
