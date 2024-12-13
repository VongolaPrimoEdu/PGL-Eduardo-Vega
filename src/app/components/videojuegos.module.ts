import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Importar los componentes de Usuario y Videojuego
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { VideojuegoFormComponent } from './videojuego-form/videojuego-form.component';
import { VideojuegoListComponent } from './videojuego-list/videojuego-list.component';

@NgModule({
  declarations: [
    UsuarioFormComponent, // Componente para agregar y editar usuarios
    UsuarioListComponent, // Componente para listar usuarios
    VideojuegoFormComponent, // Componente para agregar y editar videojuegos
    VideojuegoListComponent, // Componente para listar videojuegos
  ],
  imports: [
    CommonModule, // Módulo común de Angular
    IonicModule, // Módulo de Ionic para los componentes de la interfaz
    ReactiveFormsModule, // Módulo para formularios reactivos
    FormsModule, // Módulo para formularios en Angular
  ],
  exports: [
    UsuarioFormComponent, // Exportar para ser utilizado en otros módulos
    UsuarioListComponent, // Exportar para ser utilizado en otros módulos
    VideojuegoFormComponent, // Exportar para ser utilizado en otros módulos
    VideojuegoListComponent, // Exportar para ser utilizado en otros módulos
  ],
})
export class VideojuegosModule {}
