import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPositionComponent } from './global-position.component';

const routes: Routes = [{ path: '', component: GlobalPositionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalPositionRoutingModule { }
