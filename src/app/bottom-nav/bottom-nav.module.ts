import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { FinanceSummaryComponent } from './finance-summary/finance-summary.component';
import { MatSelectModule } from '@angular/material/select';
import { EstimatedDeliveryComponent } from './estimated-delivery/estimated-delivery.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FinanceTypeComponent } from './finance-type/finance-type.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BottomNavBarComponent,
    FinanceSummaryComponent,
    EstimatedDeliveryComponent,
    NavigationComponent,
    FinanceTypeComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    StoreModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [BottomNavBarComponent],
})
export class BottomNavModule {}
