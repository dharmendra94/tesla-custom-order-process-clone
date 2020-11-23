import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Interior } from '../models/interior';

const getInteriorState = createFeatureSelector<Interior>('interior');

export const getInterior = createSelector(getInteriorState, (state) => state);

export const getInteriorLook = createSelector(
  getInteriorState,
  (state) => state.look
);

export const getInteriorFeatures = createSelector(
  getInteriorState,
  (state) => state.featuresIncluded
);
