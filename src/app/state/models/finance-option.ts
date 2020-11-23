import { FinanceType } from '../enums/purchase-type';
import { CarState } from '../../state/car';

export interface FinanceOption extends CarState {
  type: FinanceType;
  PurchasePriceAfterPotentialSavings: number;
  PurchasePrice: number;
}
