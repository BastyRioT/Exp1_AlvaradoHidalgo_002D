import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() { }

  componentes: Componente[] = [
    {
      icon: 'home',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'leaf',
      name: 'Aprender',
      redirecTo: '/contenido'
    },
    {
      icon: 'person',
      name: 'Registro',
      redirecTo: '/registro'
    },

  ]

}