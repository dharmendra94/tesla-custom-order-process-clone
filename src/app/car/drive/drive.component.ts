import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCarDrive } from 'src/app/state/selectors/car.selectors';
import * as CarCustomizationActions from '../../state/actions/car-customization-actions';
import { DriveTypes } from '../../state/enums/drive-types';
import { DriveState } from '../../state/models/DriveState';
import { Exterior } from '../../state/models/exterior';

@Component({
  selector: 'car-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss'],
})
export class DriveComponent implements OnInit {
  driveTypes = DriveTypes;
  state: { drive: DriveState; exterior: Exterior };

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select(getCarDrive).subscribe((drive) => {
      this.state = drive;
    });
  }

  onDriveTypeChange(drive: DriveTypes): void {
    this.store.dispatch(
      CarCustomizationActions.toggleDriveType({
        drive,
        exterior: this.state.exterior,
      })
    );
  }
}
