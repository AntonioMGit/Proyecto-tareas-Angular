import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DemoCabecerasInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log("interceptor demo invocado");

    //ejemplo incluir cabecera Authorization
    const usuario="demouser"
    const clave="clave"

    //para incorporar cambios en la peticion actual
    const nuevaPeticion = request.clone(
      {
        headers:request.headers
                          .set("Authorization", `Basic ${btoa(usuario + ":" + clave)}`)
                          .set("JWT", "TOKEN87234832748237423243702374")
      }
    )

    return next.handle(nuevaPeticion);
  }
}
