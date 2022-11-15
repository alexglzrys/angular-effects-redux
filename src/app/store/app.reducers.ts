import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";

// Listar todos los elementos de estado de mi aplicación
export interface AppState {
  users: reducers.UsersState,
  user: reducers.UserState
}

// Listar todos los reducers de mi aplicación
export const appReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducer,
  user: reducers.userReducer
}
