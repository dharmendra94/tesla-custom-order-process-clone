import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutopilotComponent } from './autopilot.component';

const routes: Routes = [{ path: '', component: AutopilotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutopilotRoutingModule { }
