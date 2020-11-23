import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Model3Component } from './model3.component';

const routes: Routes = [
  {
    path: '',
    component: Model3Component,
    children: [
      {
        path: 'car',
        loadChildren: () =>
          import('../car/car.module').then((m) => m.CarModule),
      },
      {
        path: 'exterior',
        loadChildren: () =>
          import('../exterior/exterior.module').then((m) => m.ExteriorModule),
      },
      {
        path: 'interior',
        loadChildren: () =>
          import('../interior/interior.module').then((m) => m.InteriorModule),
      },
      {
        path: 'autopilot',
        loadChildren: () =>
          import('../autopilot/autopilot.module').then(
            (m) => m.AutopilotModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then((m) => m.PaymentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Model3RoutingModule {}
