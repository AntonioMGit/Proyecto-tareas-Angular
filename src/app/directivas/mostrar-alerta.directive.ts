import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mostrarAlerta]'
})
export class MostrarAlertaDirective {

  fuente=""

  constructor(
    private elemento:ElementRef
  ) { 
    this.elemento.nativeElement.setAttribute("class", "alert alert-danger")
    this.fuente = this.elemento.nativeElement.style.fontSize
  }
  
  @HostListener("mouseenter")
  cuandoEntraElRaton(){
    this.elemento.nativeElement.style.fontSize="18pt"
  }

  @HostListener("mouseleave")
  cuandoSaleElRaton(){
    this.elemento.nativeElement.style.fontSize=this.fuente
  }

}
