import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.router.params.subscribe(({ id }) => {
      // Despachar acción para localizr un usuario
      this.store.dispatch( cargarUsuario({ id }) );
    })
  }

}
