import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
// importar todas las acciones desde el archivo de barril
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from '../actions';


export interface UserState {
  id: string | null,
  user: User | null,
  loaded: boolean,
  loading: boolean,
  error: any
}

const userInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null
}

// Entender esta lógica como los estados de una petición HTTP
// loading, success (hay datos, no hay datos), error

export const userReducer = createReducer(
  userInitialState,
  on(cargarUsuario, (state, { id }) => ({
    // Al ser peticiones HTTP ya no interesa los resultados anteriores si deseamos volver a buscar
    ...userInitialState,
    id,
    loading: true
  })),
  on(cargarUsuarioSuccess, (state, { user }) => ({
    ...state,
    user: {...user},
    loaded: true,
    loading: false
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    // Es importante en un primer momento, devolver todo el contenido del error, para saber que carga util nos interesa considerar
    //error: payload,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);
