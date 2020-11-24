import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DriveState } from '../models/DriveState';
import { Exterior } from '../models/exterior';

const getCarState = createFeatureSelector<Exterior>('exterior');
const getDriveState = createFeatureSelector<DriveState>('drive');

export const getExteriorPaintLook = createSelector(
  getCarState,
  (state) => state.look
);

export const getExteriorandDrive = createSelector(
  getCarState,
  getDriveState,
  (exterior, drive) => {
    return { exterior, drive: drive.drive };
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
