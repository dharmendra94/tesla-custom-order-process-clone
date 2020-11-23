import { AccountDetails } from '../models/account-details';
import { createReducer, on } from '@ngrx/store';
import {
  updateAccountDetails,
} from '../actions/payment.actions';

const initialState: AccountDetails = null;

export const paymentReducer = createReducer<AccountDetails>(
  initialState,
  on(updateAccountDetails, (state, action) => {
    return { ...state, ...action.accountDetails };
  })
);
