import { createReducer, on } from '@ngrx/store';
import * as CarCustomization from '../../state/actions/car-customization-actions';
import * as assets from '../../../assets/model3';
import { DriveState } from '../models/DriveState';
import { DriveTypes } from '../enums/drive-types';
import { exteriorLook } from '../constants/model3-assets';

const standardRangePlusDriveState: DriveState = {
  drive: DriveTypes.StandardRangePlus,
  look: exteriorLook(DriveTypes.StandardRangePlus, 1, 1),
  range: 263,
  topSpeed: 140,
  zeroToSixty: 5.3,
};

const longRangeDriveState: DriveState = {
  drive: DriveTypes.LongRange,
  look: exteriorLook(DriveTypes.StandardRangePlus, 2, 1),
  range: 353,
  topSpeed: 145,
  zeroToSixty: 4.2,
};

const performanceDriveState: DriveState = {
  drive: DriveTypes.Performance,
  look: assets.performanceLook,
  range: 315,
  topSpeed: 162,
  zeroToSixty: 3.1,
};

const initialState: DriveState = { ...standardRangePlusDriveState };

const driveState = (drive: DriveTypes) => {
  switch (drive) {
    case DriveTypes.StandardRangePlus:
      return standardRangePlusDriveState;
    case DriveTypes.LongRange:
      return longRangeDriveState;
    case DriveTypes.Performance:
      return performanceDriveState;
  }
};

export const carReducer = createReducer<DriveState>(
  initialState,
  on(
    CarCustomization.toggleDriveType,
    (state, action): DriveState => {
      return { ...state, ...driveState(action.drive) };
    }
  )
);
