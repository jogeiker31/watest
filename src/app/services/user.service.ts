import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  users: User[] = [];

  isLoading = false;

  getUsers() {
    // como no tengo acceso a filtros, solo se realizara una busqueda unica
    if (this.users.length > 0) return;
    this.isLoading = true;
    this.http
      .get<User[]>(`${environment.API_URL}/users`)

      .subscribe({
        next: (value) => {
          this.users = value;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  }
}
