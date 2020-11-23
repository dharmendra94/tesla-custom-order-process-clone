import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCarDrive } from 'src/app/state/selectors/car.selectors';
import * as CarCustomizationActions from '../../state/actions/car-customization-actions';
import { DriveTypes } from '../../state/enums/drive-types';

@Component({
  selector: 'car-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss'],
})
export class DriveComponent implements OnInit {
  drive = DriveTypes;
  selectedDrive: DriveTypes;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store
      .select(getCarDrive)
      .subscribe((drive) => (this.selectedDrive = drive));
  }

  onDriveTypeChange(drive: DriveTypes): void {
    this.store.dispatch(CarCustomizationActions.toggleDriveType({ drive }));
  }
}
