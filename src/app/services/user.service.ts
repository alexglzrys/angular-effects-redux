import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6&delay=3`)
      .pipe(
        // Solo me interesa la data, (la respuesta contiene otra metainformación adicional)
        map((response: any) => response['data'])
        // El manejo de errores ahora se delega a los effects...
      );
  }
}
