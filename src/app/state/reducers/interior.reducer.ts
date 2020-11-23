import { interiors } from '../constants/model3-assets';
import { Interior } from '../models/interior';
import { createReducer, on } from '@ngrx/store';
import { toggleInterior } from '../actions/interior.actions';
import { InteriorTypes } from '../enums/interior-types';

const initialState: Interior = interiors.find((f) => f.id === InteriorTypes.AllBlack);

export const interiorReducer = createReducer(
  initialState,
  on(toggleInterior, (state, action) => {
    return { ...state, ...action.interior };
  })
);
