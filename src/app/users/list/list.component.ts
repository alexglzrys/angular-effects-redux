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

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Los efectos ahora serán los encargados de comunicarse directamente con los servicios de Angular
    // this.userService.getUsers().subscribe(data => this.users = data);

    // Suscribirme a los cambios que pueda tener el estado del listado de usuarios
    this.store.select('users').subscribe(({ users }) => this.users = users);

    // Despachar acción para cargar usuarios
    // * El efecto cargarUsuarios$, se encuentra escuchando a dicha acción, por tanto, en el momento que se dispare, este se comunicará con el servicio de Angular para recuperar la información
    this.store.dispatch( cargarUsuarios() );
  }

}
