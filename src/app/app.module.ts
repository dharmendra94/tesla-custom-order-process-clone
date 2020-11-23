import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { carReducer } from './state/reducers/car.reducer';
import { financeOptionsReducer } from './state/reducers/finance-options.reducer';
import { exteriorReducer } from './state/reducers/exterior.reducers';
import { interiorReducer } from './state/reducers/interior.reducer';
import { autopilotReducer } from './state/reducers/autopilot.reducer';
import { placeOrderReducer } from './state/reducers/place-order.reducer';
import { paymentReducer } from './state/reducers/payment.reducer';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        drive: carReducer,
        financeOptions: financeOptionsReducer,
        exterior: exteriorReducer,
        interior: interiorReducer,
        autopilot: autopilotReducer,
        accountDetails: paymentReducer,
        isPlaceOrderActive: placeOrderReducer,
      },
      {}
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
