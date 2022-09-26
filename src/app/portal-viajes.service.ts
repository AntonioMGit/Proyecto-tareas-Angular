import { Injectable } from '@angular/core';
import { Trayecto } from './entidades/trayecto';

@Injectable({
  providedIn: 'root'
})
export class PortalViajesService {

  datosTrayectos:Trayecto[]=[]
  ciudades:string[]=["Barcelona", "Madrid", "Sevilla"]

  datosCompartidos:{
    trayectosFiltrados:Trayecto[]
  } = {trayectosFiltrados:[]}

  constructor() { 
    this.gemerarTrayectos()
  }

  generarCiudad(opciones:string[],excluir:string=""){
    let ciudad:string=""
    do{
      ciudad=opciones[Math.floor(Math.random()*opciones.length)]
    }while(ciudad==excluir)
    return ciudad
  }

  gemerarTrayectos(){
    let fechaInicial = new Date()
    let numeroDias = 7
    let numeroHoras = 6

    for(let i=0;i<numeroDias;i++){
      //let origen = this.generarCiudad(this.ciudades)
      for(let origen of this.ciudades){
        let destino=this.generarCiudad(this.ciudades, origen)

        for(let hora=0;hora<24;hora+=numeroHoras){
          this.datosTrayectos.push(
            new Trayecto(
              origen, destino, new Date(
                fechaInicial.getFullYear(),
                fechaInicial.getMonth(),
                fechaInicial.getDate()+i
              ), hora, hora+2, Math.random()*500.0+10.0
            )
          )
        }
      }
    }
  }
}
