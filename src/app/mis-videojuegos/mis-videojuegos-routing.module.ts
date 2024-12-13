import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisVideojuegosPage } from './mis-videojuegos.page';

const routes: Routes = [
  {
    path: '',
    component: MisVideojuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisVideojuegosPageRoutingModule {}
