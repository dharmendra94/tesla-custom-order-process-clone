import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Autopilot } from '../models/autopilot';

const autopilotState = createFeatureSelector<Autopilot>('autopilot');

export const getAutopilotState = createSelector(
  autopilotState,
  (state) => state
);

export const getFullSelfDrivingCapability = createSelector(
  autopilotState,
  (state) => state.isFullSelfDrivingIncluded
);

export const getAutopilotFeatures = createSelector(
  autopilotState,
  (state) => state.autoPilotFeatures
);
