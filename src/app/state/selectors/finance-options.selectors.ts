import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getCarDrive } from 'src/app/state/selectors/car.selectors';
import { FinanceOption } from '../models/finance-option';

const getFinanceSummaryState = createFeatureSelector<FinanceOption>(
  'financeOptions'
);

export const getFinanceOptions = createSelector(
  getFinanceSummaryState,
  (state) => state
);

export const getFinanceSummary = createSelector(
  getFinanceSummaryState,
  getCarDrive,
  (finance, drive) => ({ ...finance, drive })
);
