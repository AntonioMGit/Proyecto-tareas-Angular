import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FormateoFechaPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let codigoIdioma=args[0]
    let cadena = `Idioma no soportado: ${codigoIdioma}`

    if(codigoIdioma=="es"){
      cadena = `${value.getDate()}/${value.getMonth()+1}/${value.getFullYear()}`
    }else if(codigoIdioma=="en"){
      cadena = `${value.getMonth()+1}/${value.getDate()}/${value.getFullYear()}`
    }
    return cadena;
  }

}
