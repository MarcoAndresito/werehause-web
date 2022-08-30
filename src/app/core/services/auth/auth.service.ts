import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient) {}

  getToken(username: string, password: string) {
    return this.client.post('https://warehouse-3.herokuapp.com/oauth/token', {
      username,
      password,
    });
  }
}
