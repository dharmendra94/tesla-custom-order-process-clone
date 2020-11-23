import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutopilotRoutingModule } from './autopilot-routing.module';
import { AutopilotComponent } from './autopilot.component';
import { AutopilotDetailsComponent } from './autopilot-details/autopilot-details.component';
import { AutopilotVideoComponent } from './autopilot-video/autopilot-video.component';
import { AutopilotSelectionComponent } from './autopilot-selection/autopilot-selection.component';
import { StoreModule } from '@ngrx/store';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AutopilotComponent,
    AutopilotDetailsComponent,
    AutopilotVideoComponent,
    AutopilotSelectionComponent,
  ],
  imports: [
    CommonModule,
    AutopilotRoutingModule,
    StoreModule,
    MatCheckboxModule,
  ],
})
export class AutopilotModule {}
