import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CarSpecification } from '../../state/models/car-specification';
import { getCarSpecs } from '../../state/selectors/car.selectors';

@Component({
  selector: 'car-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  carSpecifications: CarSpecification;
  range: number;
  topSpeed: number;
  zeroToSixty: number;

  constructor(private store: Store<any>) {
    this.store
      .select(getCarSpecs)
      .subscribe((specs) => (this.carSpecifications = specs));
  }

  ngOnInit(): void {}
}
