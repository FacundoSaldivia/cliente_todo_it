import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { Equipment } from 'src/app/models/equipment';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  save(usuario: Usuario): Observable<Usuario> {
    console.log('Save');
    return this.http.post<Usuario>(`/api/Alta`, usuario);
  }
  ingresarEquipo(equipo: Equipment, id: string | null): Observable<Equipment> {
    return this.http.post<Equipment>(
      `/api/Retirement?clientId=${id}&mark=${equipo.mark}&model=${equipo.model}&failure=${equipo.failure}`,
      equipo
    );
  }
  getAll() {
    return this.http.get<Usuario>('/api/Users?userOperation=1');
  }
  printAll() {}
}
