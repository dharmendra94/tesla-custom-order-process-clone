import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountDetails } from '../models/account-details';

export const paymentFeatureSelector = createFeatureSelector<AccountDetails>(
  'accountDetails'
);

export const getAccountDetails = createSelector(
  paymentFeatureSelector,
  (state) => state
);
