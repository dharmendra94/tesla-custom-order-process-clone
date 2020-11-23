import { Exterior } from '../models/exterior';
import { createReducer, on } from '@ngrx/store';
import * as exteriorActions from '../actions/exterior.actions';
import {
  exteriorColors,
  wheelTypes,
  exteriorLook,
} from '../constants/model3-assets';

const standardRangeExterior: Exterior = {
  look: '/assets/standard-range-white.jpg',
  color: exteriorColors.find((f) => f.id === 1),
  wheels: wheelTypes.find((f) => f.id === 1),
};

const initialState: Exterior = { ...standardRangeExterior };

export const exteriorReducer = createReducer(
  initialState,
  on(exteriorActions.toggleExteriorColor, (state, action) => {
    return {
      ...state,
      color: action.exteriorColor,
      look: exteriorLook(
        action.drive,
        action.exteriorColor.id,
        state.wheels.id
      ),
    };
  }),
  on(exteriorActions.toggleWheelType, (state, action) => {
    return {
      ...state,
      wheels: action.wheelType,
      look: exteriorLook(action.drive, state.color.id, action.wheelType.id),
    };
  })
);
