import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExteriorRoutingModule } from './exterior-routing.module';
import { ExteriorComponent } from './exterior.component';
import { ExteriorLookComponent } from './exterior-look/exterior-look.component';
import { ExteriorPaintComponent } from './exterior-paint/exterior-paint.component';
import { WheelsComponent } from './wheels/wheels.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    ExteriorComponent,
    ExteriorLookComponent,
    ExteriorPaintComponent,
    WheelsComponent,
  ],
  imports: [
    CommonModule,
    ExteriorRoutingModule,
    StoreModule,
  ],
})
export class ExteriorModule {}
