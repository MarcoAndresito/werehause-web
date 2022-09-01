import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlBase: string = `${environment.urlApiBackEnd}/oauth/token`;

  constructor(private client: HttpClient) {}

  getToken(username: string, password: string) {
    return this.client.post(this.urlBase, {
      username,
      password,
    });
  }
}
