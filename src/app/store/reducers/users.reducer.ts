import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
// importar todas las acciones desde el archivo de barril
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';


export interface UsersState {
  users: User[],
  loaded: boolean,
  loading: boolean,
  error: any
}

const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

// Entender esta lógica como los estados de una petición HTTP
// loading, success (hay datos, no hay datos), error

export const usersReducer = createReducer(
  usersInitialState,
  on(cargarUsuarios, state => ({
    ...state,
    loading: true
  })),
  on(cargarUsuariosSuccess, (state, { users }) => ({
    ...state,
    users: users,
    loaded: true,
    loading: false
  })),
  on(cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }))
);
