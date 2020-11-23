import { createAction, props } from '@ngrx/store';
import { AccountDetails } from '../models/account-details';



export const updateAccountDetails = createAction(
  '[Account Component] Update Account Details',
  props<{ accountDetails: AccountDetails }>()
);
