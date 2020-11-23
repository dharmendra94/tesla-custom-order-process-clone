import { createFeatureSelector, createSelector } from '@ngrx/store';

const placeOrderState = createFeatureSelector<boolean>('isPlaceOrderActive');

export const isPlaceOrderActive = createSelector(
  placeOrderState,
  (state) => state
);
