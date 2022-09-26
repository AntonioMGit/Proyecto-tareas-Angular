import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations"

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { PortalViajesComponent } from './portal-viajes/portal-viajes.component';
import { PortalBuscadorComponent } from './portal-buscador/portal-buscador.component';
import { PortalResultadosComponent } from './portal-resultados/portal-resultados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormateoFechaPipe } from './formateo-fecha.pipe';
import { PortalViajesService } from './portal-viajes.service';
import { FiltroPrecioPipe } from './filtro-precio.pipe';
import { GestionClientesComponent } from './gestion-clientes/gestion-clientes.component';
import { ProbarObservablesComponent } from './probar-observables/probar-observables.component';
import { AppEmpleadosComponent } from './app-empleados/app-empleados.component';
import { AltaTareaComponent } from './alta-tarea/alta-tarea.component';
import { AltaImputacionComponent } from './alta-imputacion/alta-imputacion.component';
import { EmpleoFormularioComponent } from './empleo-formulario/empleo-formulario.component';
import { FormularioPlantillaComponent } from './formulario-plantilla/formulario-plantilla.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ValidarNifDirective } from './validar-nif.directive';
import { MostrarAlertaDirective } from './directivas/mostrar-alerta.directive';
import { ProbarAnimacionesComponent } from './probar-animaciones/probar-animaciones.component';
import { AltaMatriculaComponent } from './alta-matricula/alta-matricula.component';
import { DemoCabecerasInterceptor } from './demo-cabeceras.interceptor';
import { ProbarAngularMaterialComponent } from './probar-angular-material/probar-angular-material.component';

import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatSelectModule } from "@angular/material/select";
import { MantenimientoVuelosComponent } from './mantenimiento-vuelos/mantenimiento-vuelos.component'

@NgModule({
  declarations: [
    PortalViajesComponent,
    PortalBuscadorComponent,
    PortalResultadosComponent,
    FormateoFechaPipe,
    FiltroPrecioPipe,
    GestionClientesComponent,
    ProbarObservablesComponent,
    AppEmpleadosComponent,
    AltaTareaComponent,
    AltaImputacionComponent,
    EmpleoFormularioComponent,
    FormularioPlantillaComponent,
    FormularioReactivoComponent,
    ValidarNifDirective,
    MostrarAlertaDirective,
    ProbarAnimacionesComponent,
    AltaMatriculaComponent,
    ProbarAngularMaterialComponent,
    MantenimientoVuelosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //NoopAnimationsModule,
    AppRoutingModule,
    //////////////////////////////////
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    //PortalViajesService
    {
      provide:HTTP_INTERCEPTORS,
      useClass:DemoCabecerasInterceptor,
      multi:true
    }
  ],
  bootstrap: [
    //PortalViajesComponent
    //ProbarObservablesComponent
    //GestionClientesComponent
    //AppEmpleadosComponent
    //EmpleoFormularioComponent
    //ProbarAnimacionesComponent
    //AltaMatriculaComponent
    ProbarAngularMaterialComponent
  ]
})
export class AppModule { }
