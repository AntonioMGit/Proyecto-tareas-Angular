import { Component, Input, OnInit } from '@angular/core';
import { Trayecto } from '../entidades/trayecto';
import { PortalViajesService } from '../portal-viajes.service';

@Component({
  selector: 'app-portal-resultados',
  templateUrl: './portal-resultados.component.html',
  styleUrls: ['./portal-resultados.component.scss']
})
export class PortalResultadosComponent implements OnInit {

//  datosTrayectos:Trayecto[]=[]
  precioMaximo:number=1000.0

  constructor(
    public servicioViajes:PortalViajesService
  ) { }

  ngOnInit(): void {
//    this.datosTrayectos=this.servicioViajes.datosCompartidos.trayectosFiltrados
  }

}
