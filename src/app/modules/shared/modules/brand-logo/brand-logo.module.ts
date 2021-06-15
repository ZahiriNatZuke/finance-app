import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandLogoComponent } from './brand-logo.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    BrandLogoComponent
  ],
  exports: [
    BrandLogoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class BrandLogoModule { }
