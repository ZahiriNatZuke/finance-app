import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalDataRoutingModule } from './personal-data-routing.module';
import { PersonalDataComponent } from './personal-data.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {LoaderModule} from '../../shared/modules/loader/loader.module';


@NgModule({
  declarations: [
    PersonalDataComponent
  ],
    imports: [
        CommonModule,
        PersonalDataRoutingModule,
        FlexLayoutModule,
        MatListModule,
        MatIconModule,
        TranslateModule,
        LoaderModule
    ]
})
export class PersonalDataModule { }
