import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgRxTestComponent } from './ng-rx-test.component';

const routes: Routes = [{ path: '', component: NgRxTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgRxTestRoutingModule { }
