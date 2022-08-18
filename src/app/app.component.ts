import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private nombre: string;
  public apellido: string;
  edad: number;
  frutas: string[];

  constructor() {
    this.nombre = 'pepe';
    this.apellido = 'perez';
    this.edad = 10;
    this.frutas = [
      'pera',
      'naranja',
      'manzana',
      'frutilla',
      'mango',
      'guineo',
      'tomate',
    ];
  }

  private restar(a: number, b: number): number {
    return a - b;
  }

  public sumar(a: number, b: number): number {
    return a + b;
  }
}
