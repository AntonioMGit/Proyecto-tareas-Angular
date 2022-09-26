import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-probar-angular-material',
  templateUrl: './probar-angular-material.component.html',
  styleUrls: ['./probar-angular-material.component.scss']
})
export class ProbarAngularMaterialComponent implements OnInit {

  ciudad=new FormControl("")
  ciudades=["barcelona","madrid","zaragoza"]
  listaCiudades:any[]=[
    {
      nombre:"barcelona",
      codigo:"08"
    },
    {
      nombre:"Madrid",
      codigo:"03"
    },
    {
      nombre:"zaragoza",
      codigo:"01"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
