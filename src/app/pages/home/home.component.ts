import { Component, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  nombre: string = 'maria';

  valorProgress: string = '90';

  progres = {
    valor: 32,
    max: 100,
    texto: 'hola',
  };

  pepe = {
    nombre: 'pepe',
    apellido: 'perez',
  };

  cambiarNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }

  cambiarNombre2($event: any) {
    this.nombre = $event.target.value;
  }
}
