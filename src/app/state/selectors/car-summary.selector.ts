import { createSelector } from '@ngrx/store';
import { getCarDriveState } from './car.selectors';
import { getExterior } from './exterior.selectors';
import { getInterior } from './interior.selector';
import { getAutopilotState } from './autopilot.selectors';

export const getCarSummary = createSelector(
  getCarDriveState,
  getExterior,
  getInterior,
  getAutopilotState,
  (drive, exterior, interior, autopilot) => {
    return { drive, exterior, interior, autopilot };
  }
);
