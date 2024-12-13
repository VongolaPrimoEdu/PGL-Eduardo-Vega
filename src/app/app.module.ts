import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VideojuegosModule } from './components/videojuegos.module'; // Módulo de videojuegos

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';

import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    VideojuegosModule, // Importar módulo de videojuegos
    RouterModule, // Módulo de rutas
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
