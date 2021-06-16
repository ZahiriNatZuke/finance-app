import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinanceComponent} from './modules/finance/finance.component';
import {AuthComponent} from './modules/auth/auth.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'finance/global-position', pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'finance',
    component: FinanceComponent,
    loadChildren: () => import('./modules/finance/finance.module').then(m => m.FinanceModule)
  },
  {
    path: '404-error',
    loadChildren: () => import('./modules/errors/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule)
  },
  {
    path: '**', redirectTo: '404-error', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
