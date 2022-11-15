import { createAction, props } from "@ngrx/store";
import { User } from '../../models/user.model';

// Acciones correspondientes a la solicitud HTTP de un usuario en específico

// Loading
export const cargarUsuario = createAction(
  '[Usuario] Cargar usuario',
  props<{ id: string }>()
);
// Response Success
export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar usuario success',
  props<{ user: User }>()
);
// Response error
export const cargarUsuarioError = createAction(
  '[Usuario] Cargar usuario error',
  props<{ payload: any }>()
)
