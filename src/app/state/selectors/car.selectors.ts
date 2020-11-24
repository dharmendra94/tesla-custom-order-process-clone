import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DriveState } from '../models/DriveState';
import { CarSpecification } from '../models/car-specification';
import { Exterior } from '../models/exterior';

const getDriveState = createFeatureSelector<DriveState>('drive');
const getExteriorState = createFeatureSelector<Exterior>('exterior');

export const getCarLook = createSelector(getDriveState, (state) => state.look);

export const getCarDrive = createSelector(
  getDriveState,
  getExteriorState,
  (drive, exterior) => ({drive, exterior})
);

export const getCarSpecs = createSelector(getDriveState, (state) => {
  return {
    range: state.range,
    topSpeed: state.topSpeed,
    zeroToSixty: state.zeroToSixty,
  } as CarSpecification;
});

export const getCarDriveState = createSelector(getDriveState, (state) => state);
