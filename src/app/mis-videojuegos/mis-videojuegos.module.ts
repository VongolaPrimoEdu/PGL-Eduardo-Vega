import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisVideojuegosPageRoutingModule } from './mis-videojuegos-routing.module';

import { MisVideojuegosPage } from './mis-videojuegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisVideojuegosPageRoutingModule
  ],
  declarations: [MisVideojuegosPage]
})
export class MisVideojuegosPageModule {}
