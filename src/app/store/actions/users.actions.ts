import { createAction, props } from "@ngrx/store";
import { User } from '../../models/user.model';

// Loading
export const cargarUsuarios = createAction('[Usuarios] Cargar usuarios');
// Response Success
export const cargarUsuariosSuccess = createAction(
  '[Usuarios] Cargar usuarios success',
  props<{ users: User[] }>()
);
// Response error
export const cargarUsuariosError = createAction(
  '[Usuarios] Cargar usuarios error',
  props<{ payload: any }>()
)
