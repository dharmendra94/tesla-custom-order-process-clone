import { createAction, props } from '@ngrx/store';
import { FinanceType } from '../enums/purchase-type';
import { DriveTypes } from '../enums/drive-types';

export const toggleFinanceType = createAction(
  '[finance-summary] toggle finance type',
  props<{ purchaseType: FinanceType, driveType: DriveTypes }>()
);
