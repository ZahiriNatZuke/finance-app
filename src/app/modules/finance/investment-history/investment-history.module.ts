import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentHistoryRoutingModule } from './investment-history-routing.module';
import { InvestmentHistoryComponent } from './investment-history.component';


@NgModule({
  declarations: [
    InvestmentHistoryComponent
  ],
  imports: [
    CommonModule,
    InvestmentHistoryRoutingModule
  ]
})
export class InvestmentHistoryModule { }
