import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Wheel } from '../../state/models/wheel';
import { wheelTypes } from '../../state/constants/model3-assets';
import { getExteriorandDrive } from '../../state/selectors/exterior.selectors';
import { toggleWheelType } from '../../state/actions/exterior.actions';
import { DriveTypes } from '../../state/enums/drive-types';
import { Exterior } from 'src/app/state/models/exterior';

@Component({
  selector: 'ext-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.scss'],
})
export class WheelsComponent implements OnInit {
  wheelTypes: Wheel[] = wheelTypes;

  currentExterior: Exterior;
  currentDriveType: DriveTypes;

  driveTypes = DriveTypes;

  constructor(private store: Store<any>) {
    this.store.select(getExteriorandDrive).subscribe((state) => {
      this.currentExterior = state.exterior;
      this.currentDriveType = state.drive;
    });
  }

  ngOnInit(): void {}

  changeWheelType(wheel: Wheel): void {
    this.store.dispatch(
      toggleWheelType({
        exterior: {
          color: this.currentExterior.color,
          wheels: wheel,
        },
        drive: this.currentDriveType,
      })
    );
  }

  isWheelTypeAvailable(wheel: Wheel): boolean {
    if (this.isPerformanceWheelTypeAvailable(wheel)) {
      return true;
    }

    if (
      (wheel.id === 1 || wheel.id === 2) &&
      this.currentDriveType !== DriveTypes.Performance
    ) {
      return true;
    }

    return false;
  }

  private isPerformanceWheelTypeAvailable(wheel: Wheel): boolean {
    return this.currentDriveType === DriveTypes.Performance && wheel.id === 3;
  }
}
