import { Autopilot } from '../models/autopilot';
import { createReducer, on } from '@ngrx/store';
import { toggleAutopilotFullSelfDriving } from '../actions/autopilot.actions';
import {
  fullSelfDrivingFeatures,
  autopilotFeatures,
  upcomingFeatures,
} from '../constants/model3-assets';

const initialState: Autopilot = {
  autopilotIncluded: true,
  autopilotCost: 0,
  isFullSelfDrivingIncluded: false,
  fullSelfDrivingCost: 10000,
  fullSelfDrivingFeatures,
  autoPilotFeatures: autopilotFeatures,
  upcomingFeatures,
};

export const autopilotReducer = createReducer(
  initialState,
  on(toggleAutopilotFullSelfDriving, (state, action) => {
    return { ...state, ...action.autopilot };
  })
);
