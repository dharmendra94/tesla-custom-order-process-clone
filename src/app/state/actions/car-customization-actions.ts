import { createAction, props } from '@ngrx/store';
import { DriveTypes } from '../enums/drive-types';

export const toggleDriveType = createAction(
  '[drive] toggle drive type',
  props<{ drive: DriveTypes }>()
);
