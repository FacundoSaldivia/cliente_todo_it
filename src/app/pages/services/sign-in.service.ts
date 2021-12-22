import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { Equipment } from 'src/app/models/equipment';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `/api/login?email=${email}&password=${password}`
    );
  }

  consultarEquipos(id: string | null): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(`/api/Equipment?clientId=${id}`);
  }

  // getUsers() {
  //   return this.http.get<Usuario>(`http://localhost:3000/api/users`);
  // }

  // getUserByEmail(email: string) {
  //   let arrUsers = this.getUsers();

  //   arrUsers.forEach((user) => {
  //     if (user.email === email) {
  //       return user;
  //     }
  //     return void 0;
  //   });
  //   return this.getUsers();
  // }

  // getUserByName(name: String) {
  //   return this.http.get<Usuario>(
  //     `http://localhost:3000/api/users?fullName=${name}`
  //   );
  // }
}
