import { Component, OnInit } from '@angular/core';
import { DatosFiltrado } from '../entidades/datosfiltrado';
import { Trayecto } from '../entidades/trayecto';
import { PortalViajesService } from '../portal-viajes.service';

@Component({
  selector: 'app-portal-buscador',
  templateUrl: './portal-buscador.component.html',
  styleUrls: ['./portal-buscador.component.scss']
})
export class PortalBuscadorComponent implements OnInit {

  datosFiltrado:DatosFiltrado = new DatosFiltrado

  constructor(
    public servicioViajes: PortalViajesService,
  ) { }

  ngOnInit(): void {
  }

  filtrar(){
    console.log("pasa");
    
    this.servicioViajes.datosCompartidos.trayectosFiltrados=
      this.servicioViajes.datosTrayectos.filter((t) => t.destino==this.datosFiltrado.destino&&t.origen==this.datosFiltrado.origen)
  }

}
