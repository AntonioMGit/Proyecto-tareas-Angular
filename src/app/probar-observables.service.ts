import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProbarObservablesService {

  public datos$:Observable<number>
  public secuencia$:Observable<number>
  public ubicaciones$:Observable<any>

  constructor() {
    this.datos$= of(10,20,30,40,50,60)

    this.secuencia$=interval(2000)

    this.ubicaciones$ = new Observable(
      (observadorUbicaciones)=>{
        const { next, error, complete } = observadorUbicaciones

        let watchId:any

        const onSucess=(pos:any)=>{
          observadorUbicaciones.next(pos)
        }

        const onError=(error:any)=>{
          observadorUbicaciones.error(error)
        }

        if(navigator.geolocation){
          watchId=navigator.geolocation.watchPosition(onSucess, onError)
        }

        return {
          unsubscribe(){
            navigator.geolocation.clearWatch(watchId)
          }
        }
      }
    )
  }
}
