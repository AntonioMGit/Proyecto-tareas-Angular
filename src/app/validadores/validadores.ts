import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ValidarNifDirective } from "../validar-nif.directive";

export function ValidarNif():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null =>{
        return new ValidarNifDirective().validate(control)
    }
}