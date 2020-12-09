import { Exterior } from '../models/exterior';
import { createReducer, on } from '@ngrx/store';
import * as exteriorActions from '../actions/exterior.actions';
import * as carDriveCustomizationActions from '../actions/car-customization-actions';
import {
  exteriorColors,
  wheelTypes,
} from '../constants/model3-assets';
import { DriveTypes } from '../enums/drive-types';
import { WheelTypes } from '../enums/wheel-types';

const standardRangeExterior: Exterior = {
  color: exteriorColors.find((f) => f.id === WheelTypes['18" Aero Wheels']),
  wheels: wheelTypes.find((f) => f.id === WheelTypes['18" Aero Wheels']),
};

const initialState: Exterior = { ...standardRangeExterior };

export const exteriorReducer = createReducer(
  initialState,
  on(exteriorActions.toggleExteriorColor, (state, action) => {
    return {
      ...state,
      color: action.exterior.color,
    };
  }),
  on(exteriorActions.toggleWheelType, (state, action) => {
    return {
      ...state,
      wheels: action.exterior.wheels,
    };
  }),
  on(carDriveCustomizationActions.toggleDriveType, (state, action) => {
    if (action.drive === DriveTypes.Performance) {
      return {
        ...state,
        wheels: wheelTypes.find(
          (f) => f.id === WheelTypes['20" Ubeerturbine Wheels']
        ),
      };
    } else {
      return {
        ...state,
        wheels:
          state.wheels.id === WheelTypes['20" Ubeerturbine Wheels']
            ? wheelTypes.find((f) => f.id === WheelTypes['18" Aero Wheels'])
            : state.wheels,
      };
    }
  })
);
