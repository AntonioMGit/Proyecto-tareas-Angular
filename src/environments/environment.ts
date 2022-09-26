// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlServidor:"http://localhost:3000/clientes",
  urlProyectos:"http://localhost:3000/proyectos",
  urlEmpleados:"http://localhost:3000/empleados",
  urlTareas:"http://localhost:3000/tareas",
  urlImputaciones:"http://localhost:3000/imputaciones",

  urlAlumnos:"http://localhost:3000/alumnos",
  urlEstudios:"http://localhost:3000/estudios",
  urlAsignaturas:"http://localhost:3000/asignaturas",
  urlMatriculas:"http://localhost:3000/matriculas"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
