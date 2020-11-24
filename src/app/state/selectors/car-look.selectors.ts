import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCarLook = createFeatureSelector<string>('look');

export const getCarLookState = createSelector(getCarLook, (state) => state);
