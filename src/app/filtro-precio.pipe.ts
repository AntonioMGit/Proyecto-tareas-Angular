import { Pipe, PipeTransform } from '@angular/core';
import { Trayecto } from './entidades/trayecto';

@Pipe({
  name: 'filtroPrecio'
})
export class FiltroPrecioPipe implements PipeTransform {

  transform(value: Trayecto[], precioMaximo:number): Trayecto[] {
    return value.filter((a)=> a.precio<=precioMaximo);
  }

}
