import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from '../../services/user.service';
import { cargarUsuario, cargarUsuarioSuccess, cargarUsuarioError } from "../actions";
import { catchError, map, mergeMap } from 'rxjs/operators'
import { of } from "rxjs";


// Los efectos en NgRX son simples archivos de servicio de Angular, por tanto deben ser una clase con el decorador @Injectable

@Injectable()
export class UserEffects {

  // Inyectar el servicio de Angular encargado de realizar las peticiones HTTP
  // Inyectar el observable de ngrx, encargado de escuchar cuando se despachan las acciones
  constructor(private actions$: Actions,
              private userService: UserService) { }

  // Crear el efecto encargado de escuchar cuando la acción [Usuarios] Cargar usuarios se dispara en la aplicación
  cargarUsuario$ = createEffect(() => this.actions$.pipe(
    // Especificar el tipo de acción que debe escuchar este efecto
    ofType(cargarUsuario),
    // Disparar otro observable - que es el servicio de Angular encargado de realizar la petición HTTP
    // El servicio espera el id del usuario, esa información se tiene como props en el action de cargarUsuario
    mergeMap((action) => this.userService.getUserById(action.id).pipe(
      // Despachar la acción que notifica que la respuesta es correcta con los usuarios
      map(user => (cargarUsuarioSuccess({user}))),
      // Despachar la acción para notificar en caso de que la respuesta sea erronea
      // CatchError() no retorna un observable por defecto. Por tanto creamos uno con el operador of()
      catchError((err) => of(cargarUsuarioError({ payload: err })))
    ))
  ))

}
