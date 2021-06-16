import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentHistoryRoutingModule } from './investment-history-routing.module';
import { InvestmentHistoryComponent } from './investment-history.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {TranslateModule} from '@ngx-translate/core';
import {LoaderModule} from '../../shared/modules/loader/loader.module';


@NgModule({
  declarations: [
    InvestmentHistoryComponent
  ],
    imports: [
        CommonModule,
        InvestmentHistoryRoutingModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSelectModule,
        TranslateModule,
        LoaderModule
    ]
})
export class InvestmentHistoryModule { }
