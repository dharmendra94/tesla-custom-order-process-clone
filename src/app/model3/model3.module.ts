import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Model3RoutingModule } from './model3-routing.module';
import { Model3Component } from './model3.component';
import { TopNavModule } from '../top-nav/top-nav.module';
import { BottomNavModule } from '../bottom-nav/bottom-nav.module';


@NgModule({
  declarations: [Model3Component],
  imports: [
    CommonModule,
    Model3RoutingModule,
    TopNavModule,
    BottomNavModule
  ]
})
export class Model3Module { }
