import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadPageRoutingModule } from './actividad-routing.module';

import { ActividadesPage } from './actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadPageRoutingModule
  ],
  declarations: [ActividadesPage]
})
export class ActividadPageModule {}
