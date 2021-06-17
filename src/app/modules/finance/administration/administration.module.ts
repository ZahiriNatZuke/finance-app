import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import {DynamicTableModule} from '../../shared/modules/dynamic-table/dynamic-table.module';
import {LoaderModule} from '../../shared/modules/loader/loader.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    DynamicTableModule,
    LoaderModule,
    FlexLayoutModule,
    TranslateModule
  ]
})
export class AdministrationModule { }
