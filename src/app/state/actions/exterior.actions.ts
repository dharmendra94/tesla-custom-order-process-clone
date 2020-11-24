import { createAction, props } from '@ngrx/store';
import { DriveTypes } from '../enums/drive-types';
import { Exterior } from '../models/exterior';

export const toggleExteriorColor = createAction(
  '[ExteriorPaint Component] Toggle car exterior color',
  props<{ exterior: Exterior; drive: DriveTypes }>()
);

export const toggleWheelType = createAction(
  '[Wheels Component] Toggle Wheel Type',
  props<{ exterior: Exterior; drive: DriveTypes }>()
);
