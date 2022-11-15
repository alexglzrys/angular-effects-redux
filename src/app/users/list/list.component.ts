import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];
  // Varibles de control para especificar los componentes de carga y error
  loading: boolean = true;
  error: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Los efectos ahora serán los encargados de comunicarse directamente con los servicios de Angular
    // this.userService.getUsers().subscribe(data => this.users = data);

    // Suscribirme a los cambios que pueda tener el estado del listado de usuarios
    this.store.select('users').subscribe(({ users, error, loading }) => {
      this.users = users
      this.error = error
      this.loading = loading
    });

    // Despachar acción para cargar usuarios
    // * El efecto cargarUsuarios$, se encuentra escuchando a dicha acción, por tanto, en el momento que se dispare, este se comunicará con el servicio de Angular para recuperar la información
    this.store.dispatch( cargarUsuarios() );
  }

}
