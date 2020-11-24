import { Component, OnInit } from '@angular/core';
import { Paint } from '../../state/models/exterior-color';
import { exteriorColors } from '../../state/constants/model3-assets';
import { Store } from '@ngrx/store';
import { toggleExteriorColor } from '../../state/actions/exterior.actions';
import { getExteriorandDrive } from 'src/app/state/selectors/exterior.selectors';
import { DriveTypes } from '../../state/enums/drive-types';
import { Exterior } from 'src/app/state/models/exterior';

@Component({
  selector: 'ext-exterior-paint',
  templateUrl: './exterior-paint.component.html',
  styleUrls: ['./exterior-paint.component.scss'],
})
export class ExteriorPaintComponent implements OnInit {
  exteriorColors: Paint[] = exteriorColors;
  currentExterior: Exterior;
  currentDriveType: DriveTypes;

  constructor(private store: Store<any>) {
    this.store.select(getExteriorandDrive).subscribe((state) => {
      this.currentExterior = state.exterior;
      this.currentDriveType = state.drive;
    });
  }

  ngOnInit(): void {}

  changeColor(color: Paint): void {
    this.store.dispatch(
      toggleExteriorColor({
        exterior: { look: '', color: color, wheels: this.currentExterior.wheels },
        drive: this.currentDriveType,
      })
    );
  }
}
