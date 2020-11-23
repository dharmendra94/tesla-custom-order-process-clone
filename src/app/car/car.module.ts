import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { LookComponent } from './look/look.component';
import { StatsComponent } from './stats/stats.component';
import { DriveComponent } from './drive/drive.component';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { CountoModule } from 'angular2-counto';

@NgModule({
  declarations: [CarComponent, LookComponent, StatsComponent, DriveComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    MatButtonModule,
    CountoModule,
    StoreModule,
  ],
})
export class CarModule {}
