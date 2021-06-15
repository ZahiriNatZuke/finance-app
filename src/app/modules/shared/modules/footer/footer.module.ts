import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {BrandLogoModule} from '../brand-logo/brand-logo.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrandLogoModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class FooterModule { }
