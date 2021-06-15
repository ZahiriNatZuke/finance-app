import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalPositionRoutingModule } from './global-position-routing.module';
import { GlobalPositionComponent } from './global-position.component';


@NgModule({
  declarations: [
    GlobalPositionComponent
  ],
  imports: [
    CommonModule,
    GlobalPositionRoutingModule
  ]
})
export class GlobalPositionModule { }
