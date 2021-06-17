import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'global-position', pathMatch: 'full'
  },
  {
    path: 'personal-data',
    loadChildren: () => import('./personal-data/personal-data.module').then(m => m.PersonalDataModule)
  },
  {
    path: 'global-position',
    loadChildren: () => import('./global-position/global-position.module').then(m => m.GlobalPositionModule)
  },
  {
    path: 'investment-history',
    loadChildren: () => import('./investment-history/investment-history.module').then(m => m.InvestmentHistoryModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule {
}
