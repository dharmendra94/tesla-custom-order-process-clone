import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DriveState } from '../models/DriveState';
import { Exterior } from '../models/exterior';

const getCarState = createFeatureSelector<Exterior>('exterior');
const getDriveState = createFeatureSelector<DriveState>('drive');

export const getExteriorPaintLook = createSelector(
  getCarState,
  (state) => state.look
);

export const getExteriorPaint = createSelector(
  getCarState,
  getDriveState,
  (state, drive) => {
    return { color: state.color, drive: drive.drive };
  }
);

export const getWheelType = createSelector(
  getCarState,
  getDriveState,
  (state, drive) => {
    return { wheels: state.wheels, drive: drive.drive };
  }
);

export const getExterior = createSelector(getCarState, (state) => state);
