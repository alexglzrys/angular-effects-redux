import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from '../../store/app.reducers';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  user: User | null = null;
  loading: boolean = true;
  error: boolean = false;
  loaded: boolean = false;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    // Suscribirme al cambio de parametros de la url
    this.router.params.subscribe(({ id }) => {
      // Despachar acción para localizr un usuario
      this.store.dispatch( cargarUsuario({ id }) );
    })

    // Suscribirme al cambio de estado relacionado con un usuario en particular
    this.store.select('user').subscribe(({user, loading, error, loaded}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
      this.loaded = loaded
    });
  }

}
