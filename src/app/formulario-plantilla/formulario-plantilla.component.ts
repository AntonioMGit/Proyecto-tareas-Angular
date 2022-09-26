import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-plantilla',
  templateUrl: './formulario-plantilla.component.html',
  styleUrls: ['./formulario-plantilla.component.scss']
})
export class FormularioPlantillaComponent implements OnInit {

  nif:string=""
  nombre:string=""
  apellidos:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
