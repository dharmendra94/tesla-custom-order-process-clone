import { createAction, props } from '@ngrx/store';
import { DriveTypes } from '../enums/drive-types';
import { Exterior } from '../models/exterior';

export const toggleDriveType = createAction(
  '[drive] toggle drive type',
  props<{ drive: DriveTypes, exterior: Exterior }>()
);
