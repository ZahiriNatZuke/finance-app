import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalPositionRoutingModule } from './global-position-routing.module';
import { GlobalPositionComponent } from './global-position.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';


@NgModule({
  declarations: [
    GlobalPositionComponent
  ],
  imports: [
    CommonModule,
    GlobalPositionRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class GlobalPositionModule { }
