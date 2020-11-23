import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteriorRoutingModule } from './interior-routing.module';
import { InteriorComponent } from './interior.component';
import { InteriorLookComponent } from './interior-look/interior-look.component';
import { InteriorCustomizationComponent } from './interior-customization/interior-customization.component';
import { StoreModule } from '@ngrx/store';
import { InteriorFeaturesComponent } from './interior-features/interior-features.component';

@NgModule({
  declarations: [
    InteriorComponent,
    InteriorLookComponent,
    InteriorCustomizationComponent,
    InteriorFeaturesComponent,
  ],
  imports: [
    CommonModule,
    InteriorRoutingModule,
    StoreModule,
  ],
})
export class InteriorModule {}
