import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadesPage } from './actividad.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadPageRoutingModule {}
