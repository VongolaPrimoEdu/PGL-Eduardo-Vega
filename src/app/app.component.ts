import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentView: 'usuarios' | 'videojuegos' = 'usuarios'; // Definir vistas de usuarios y videojuegos

  constructor() {}

  showUsuarios() {
    this.currentView = 'usuarios'; // Mostrar vista de usuarios
  }

  showVideojuegos() {
    this.currentView = 'videojuegos'; // Mostrar vista de videojuegos
  }
}
