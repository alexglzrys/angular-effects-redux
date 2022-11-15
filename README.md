# HttpEffects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Tercera ley de Newton

Por cada acción hay una reacción
Dentro del ecosistena de Redux, los **efectos** escuhan acciones, y con base a ello, pueden comunicarse con servicios de Angular para realizar peticiones HTTP, una vez devuelta la respuesta por el servicio, **los efectos** pueden despachar otras acciones para que el **reducer genere así un nuevo estado**.

### ¿Que son los efectos

- Escuchan acciones que son despachadas por el **ngrx/store**
- Simplifican la lógica en los componentes
- Permiten comunicarse con los servicios dentro del ecosistema de Angular, para realizar peticiones **HTTP, Sockets, tareas asíncronas**


