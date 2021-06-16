import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GlobalPositionRoutingModule} from './global-position-routing.module';
import {GlobalPositionComponent} from './global-position.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {LoaderModule} from '../../shared/modules/loader/loader.module';


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
    MatOptionModule,
    TranslateModule,
    HttpClientModule,
    LoaderModule
  ]
})
export class GlobalPositionModule {
}
