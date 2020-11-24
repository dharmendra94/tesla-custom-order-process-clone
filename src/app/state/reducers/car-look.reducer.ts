import { createReducer, on } from '@ngrx/store';
import { exteriorLook } from '../constants/model3-assets';
import { DriveTypes } from '../enums/drive-types';
import { ExteriorColors } from '../enums/exterior-colors';
import { WheelTypes } from '../enums/wheel-types';
import * as carDriveCustomizationActions from '../actions/car-customization-actions';
import * as exteriorCustomizationActions from '../actions/exterior.actions';

const initialState = exteriorLook(
  DriveTypes.StandardRangePlus,
  ExteriorColors['Pearl White Multi-Coat'],
  WheelTypes['18" Aero Wheels']
);

export const carLookReducer = createReducer(
  initialState,
  on(carDriveCustomizationActions.toggleDriveType, (state, action) => {
    let wheelId: WheelTypes =
      action.drive === DriveTypes.Performance
        ? WheelTypes['20" Ubeerturbine Wheels']
        : action.exterior.wheels.id;

    if (
      wheelId === WheelTypes['20" Ubeerturbine Wheels'] &&
      action.drive !== DriveTypes.Performance
    ) {
      wheelId = WheelTypes['18" Aero Wheels'];
    }

    if (action && action.exterior) {
      return exteriorLook(action.drive, action.exterior.color.id, wheelId);
    } else {
      return state;
    }
  }),
  on(exteriorCustomizationActions.toggleExteriorColor, (state, action) => {
    return exteriorLook(
      action.drive,
      action.exterior.color.id,
      action.exterior.wheels.id
    );
  }),
  on(exteriorCustomizationActions.toggleWheelType, (state, action) => {
    return exteriorLook(
      action.drive,
      action.exterior.color.id,
      action.exterior.wheels.id
    );
  })
);
