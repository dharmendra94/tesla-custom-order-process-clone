import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCarSummary } from '../../state/selectors/car-summary.selector';
import { CarSummary } from '../../state/models/car-summary';
import { Observable } from 'rxjs';
import { DriveTypes } from 'src/app/state/enums/drive-types';

@Component({
  selector: 'pay-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.scss'],
})
export class CarSummaryComponent implements OnInit {
  driveTypes = DriveTypes;
  carSummary$: Observable<CarSummary>;

  constructor(private store: Store<any>) {
    this.carSummary$ = this.store.select(getCarSummary);
  }

  ngOnInit(): void {}
}
