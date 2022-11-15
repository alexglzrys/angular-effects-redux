import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from '../../services/user.service';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from "../actions";
import { catchError, map, mergeMap } from 'rxjs/operators'
import { EMPTY } from "rxjs";


// Los efectos en NgRX son simples archivos de servicio de Angular, por tanto deben ser una clase con el decorador @Injectable

@Injectable()
export class UsersEffects {

  // Inyectar el servicio de Angular encargado de realizar las peticiones HTTP
  // Inyectar el observable de ngrx, encargado de escuchar cuando se despachan las acciones
  constructor(private actions$: Actions,
              private userService: UserService) { }

  // Crear el efecto encargado de escuchar cuando la acción [Usuarios] Cargar usuarios se dispara en la aplicación
  cargarUsuarios$ = createEffect(() => this.actions$.pipe(
    // Especificar el tipo de acción que debe escuchar este efecto
    ofType(cargarUsuarios),
    // Disparar otro observable - que es el servicio de Angular encargado de realizar la petición HTTP
    mergeMap(() => this.userService.getUsers().pipe(
      // Despachar la acción que notifica que la respuesta es correcta con los usuarios
      map(users => (cargarUsuariosSuccess({users: users}))),
      catchError(() => EMPTY)
    ))
  ))

}
