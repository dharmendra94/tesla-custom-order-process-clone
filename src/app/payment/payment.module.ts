import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { AccountComponent } from './account/account.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FinalCarLookComponent } from './final-car-look/final-car-look.component';
import { CarSummaryComponent } from './car-summary/car-summary.component';
import { PurchaseOptionsComponent } from './purchase-options/purchase-options.component';
import { StoreModule } from '@ngrx/store';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaymentComponent,
    AccountComponent,
    CardDetailsComponent,
    FinalCarLookComponent,
    CarSummaryComponent,
    PurchaseOptionsComponent,
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    StoreModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class PaymentModule {}
