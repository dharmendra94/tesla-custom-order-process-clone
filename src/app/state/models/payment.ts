import { AccountDetails } from './account-details';
import { CarState } from '../car';

export interface Payment extends CarState {
  accountDetails: AccountDetails;
}
