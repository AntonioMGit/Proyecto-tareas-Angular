import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidarNif } from '../validadores/validadores';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {

  // formulario=new FormGroup(
  //   {
  //     nif: new FormControl(
  //       "",[Validators.required, ValidarNif()]
  //     ),
  //     nombre: new FormControl(
  //       "",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]
  //     ),
  //     apellidos: new FormControl(
  //       "",[Validators.required,Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ ]{3,10}$/)]
  //     )
  //   }
  // )

  formulario=this.formBuilder.group(
    {
      nif: [
        "",[Validators.required, ValidarNif()]
      ],
      nombre: [
        "",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]
      ],
      apellidos:[
        "",[Validators.required,Validators.pattern(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ ]{3,10}$/)]
      ]
    }
  )

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.nombre?.setValue("nombre desde ngOnInit")
    this.nombre?.valueChanges.subscribe(
      {
        next:(elNombre) => console.log("Nombre cambiado: %o", elNombre)
      }
    )
  }

  get nif(){return this.formulario.get("nif")}
  get nombre(){return this.formulario.get("nombre")}
  get apellidos(){return this.formulario.get("apellidos")}

}

