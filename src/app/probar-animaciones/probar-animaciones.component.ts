import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probar-animaciones',
  templateUrl: './probar-animaciones.component.html',
  styleUrls: ['./probar-animaciones.component.scss'],
  animations:[
    trigger(
      "animar",
      [
        state(
          "inicio",
          style(
            {
              height:"400px",
              opacity:1.0,
              backgroundColor:"orange"
            }
          )
        ),
        state(
          "final",
          style(
            {
              height:"40px",
              opacity:0.25,
              backgroundColor:"yellow"
            }
          )
        ),
        transition(
          "inicio => final",
          [
            animate("2s")
          ]
        ),
        transition(
          "final => inicio",
          [
            animate("1s")
          ]
        )
      ]
    )
  ]
})
export class ProbarAnimacionesComponent implements OnInit {

  activarAnimacion=true

  constructor() { }

  ngOnInit(): void {
  }

  activar(){
    this.activarAnimacion=!this.activarAnimacion
  }

}
