import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  urlBase: string = `${environment.urlApiBackEnd}/products`;

  constructor(private client: HttpClient) {}

  getAll() {
    return this.client.get(this.urlBase);
  }

  getOne(id: any) {
    return this.client.get(`${this.urlBase}/${id}`);
  }

  save(body: any) {
    return this.client.post(this.urlBase, body);
  }

  edit(id: any, body: any) {
    return this.client.put(`${this.urlBase}/${id}`, body);
  }

  delete(id: any) {
    return this.client.delete(`${this.urlBase}/${id}`);
  }
}
