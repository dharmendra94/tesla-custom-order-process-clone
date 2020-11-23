import { createAction, props } from '@ngrx/store';
import { Autopilot } from '../models/autopilot';
export const toggleAutopilotFullSelfDriving = createAction(
  '[AutopilotSelection Component] Toggle Autopilot Full Self Driving Option',
  props<{ autopilot: Autopilot }>()
);
