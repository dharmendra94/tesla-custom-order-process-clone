import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteriorComponent } from './interior.component';

const routes: Routes = [{ path: '', component: InteriorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteriorRoutingModule { }
