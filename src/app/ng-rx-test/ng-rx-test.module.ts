import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgRxTestRoutingModule } from './ng-rx-test-routing.module';
import { NgRxTestComponent } from './ng-rx-test.component';


@NgModule({
  declarations: [NgRxTestComponent],
  imports: [
    CommonModule,
    NgRxTestRoutingModule
  ]
})
export class NgRxTestModule { }
