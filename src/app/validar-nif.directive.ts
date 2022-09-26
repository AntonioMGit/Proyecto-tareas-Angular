import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validarNif]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:ValidarNifDirective,
      multi:true
    }
  ]
})
export class ValidarNifDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const ok = /^[0-9]{8}[A-Z]$/.test(control.value)

    if(ok){
      return null
    }

    return{
      "nif":{
        value:control.value
      }
    }
  }

}
