import { Component, OnInit } from '@angular/core';
import { Paint } from '../../state/models/exterior-color';
import { exteriorColors } from '../../state/constants/model3-assets';
import { Store } from '@ngrx/store';
import { toggleExteriorColor } from '../../state/actions/exterior.actions';
import { getExteriorPaint } from 'src/app/state/selectors/exterior.selectors';
import { DriveTypes } from '../../state/enums/drive-types';

@Component({
  selector: 'ext-exterior-paint',
  templateUrl: './exterior-paint.component.html',
  styleUrls: ['./exterior-paint.component.scss'],
})
export class ExteriorPaintComponent implements OnInit {
  exteriorColors: Paint[] = exteriorColors;
  currentExteriorColor: Paint;
  currentDriveType: DriveTypes;

  constructor(private store: Store<any>) {
    this.store.select(getExteriorPaint).subscribe((state) => {
      this.currentExteriorColor = state.color;
      this.currentDriveType = state.drive;
    });
  }

  ngOnInit(): void {}

  changeColor(color: Paint): void {
    this.store.dispatch(
      toggleExteriorColor({
        exteriorColor: color,
        drive: this.currentDriveType,
      })
    );
  }
}
