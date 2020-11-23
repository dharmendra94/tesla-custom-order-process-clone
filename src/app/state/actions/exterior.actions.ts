import { createAction, props } from '@ngrx/store';
import { Paint } from '../models/exterior-color';
import { Wheel } from '../models/wheel';
import { DriveTypes } from '../enums/drive-types';

export const toggleExteriorColor = createAction(
  '[ExteriorPaint Component] Toggle car exterior color',
  props<{ exteriorColor: Paint; drive: DriveTypes }>()
);

export const toggleWheelType = createAction(
  '[Wheels Component] Toggle Wheel Type',
  props<{ wheelType: Wheel; drive: DriveTypes }>()
);
