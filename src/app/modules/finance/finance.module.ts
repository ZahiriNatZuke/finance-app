import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FinanceRoutingModule} from './finance-routing.module';
import {FinanceComponent} from './finance.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrandLogoModule} from '../shared/modules/brand-logo/brand-logo.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FooterModule} from '../shared/modules/footer/footer.module';
import {MatMenuModule} from '@angular/material/menu';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    FinanceComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MatIconModule,
    MatToolbarModule,
    BrandLogoModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FooterModule,
    MatMenuModule,
    TranslateModule
  ]
})
export class FinanceModule {
}
