import { createReducer, on } from '@ngrx/store';
import * as CarCustomization from '../actions/car-customization-actions';
import * as FinanceActions from '../actions/finance-actions.actions';
import { FinanceType } from '../enums/purchase-type';
import { DriveTypes } from '../enums/drive-types';
import { FinanceOption } from '../models/finance-option';

const standardRangeCashOption: FinanceOption = {
  type: FinanceType.Cash,
  PurchasePriceAfterPotentialSavings: 36690,
  PurchasePrice: 40990,
};

const initialState: FinanceOption = { ...standardRangeCashOption };

const standardRangeLeaseOption: FinanceOption = {
  type: FinanceType.Lease,
  PurchasePriceAfterPotentialSavings: 355,
  PurchasePrice: 413,
};

const standardRangeLoanOption: FinanceOption = {
  type: FinanceType.Loan,
  PurchasePriceAfterPotentialSavings: 504,
  PurchasePrice: 564,
};

const standardRangePurchaseSummary = (financeType: FinanceType) => {
  switch (financeType) {
    case FinanceType.Cash:
      return standardRangeCashOption;
    case FinanceType.Lease:
      return standardRangeLeaseOption;
    case FinanceType.Loan:
      return standardRangeLoanOption;
  }
};

const modifyFinanceState = (
  financeType: FinanceType,
  variance: number
): FinanceOption => {
  const summary = standardRangePurchaseSummary(financeType);
  return {
    PurchasePrice: summary.PurchasePrice + variance,
    type: financeType,
    PurchasePriceAfterPotentialSavings:
      summary.PurchasePriceAfterPotentialSavings + variance,
  };
};

const modifyFinanceOption = (state: FinanceOption, drive: DriveTypes) => {
  switch (state.type) {
    case FinanceType.Cash:
      return { ...cashChange(drive, state.type) };
    case FinanceType.Lease:
      return { ...leaseChange(drive, state.type) };
    case FinanceType.Loan:
      return { ...loanChange(drive, state.type) };
  }
};

const cashIncrement = (driveType: DriveTypes): number => {
  switch (driveType) {
    case DriveTypes.StandardRangePlus:
      return 0;
    case DriveTypes.LongRange:
      return 9000;
    case DriveTypes.Performance:
      return 17000;
  }
};

const leaseVariance = (driveType: DriveTypes): number => {
  switch (driveType) {
    case DriveTypes.StandardRangePlus:
      return 0;
    case DriveTypes.LongRange:
      return 100;
    case DriveTypes.Performance:
      return 250;
  }
};

const loanVariance = (driveType: DriveTypes): number => {
  switch (driveType) {
    case DriveTypes.StandardRangePlus:
      return 0;
    case DriveTypes.LongRange:
      return 135;
    case DriveTypes.Performance:
      return 255;
  }
};

const cashChange = (driveType: DriveTypes, financeType: FinanceType) => {
  const increment = cashIncrement(driveType);
  return modifyFinanceState(financeType, increment);
};

const leaseChange = (driveType: DriveTypes, financeType: FinanceType) => {
  const increment = leaseVariance(driveType);
  return modifyFinanceState(financeType, increment);
};

const loanChange = (driveType: DriveTypes, financeType: FinanceType) => {
  const variance = loanVariance(driveType);
  return modifyFinanceState(financeType, variance);
};

const financeTypeChange = (financeType: FinanceType, driveType: DriveTypes) => {
  switch (financeType) {
    case FinanceType.Cash:
      return cashChange(driveType, financeType);
    case FinanceType.Lease:
      return leaseChange(driveType, financeType);
    case FinanceType.Loan:
      return loanChange(driveType, financeType);
  }
};

export const financeOptionsReducer = createReducer(
  initialState,
  on(
    CarCustomization.toggleDriveType,
    (state, action): FinanceOption => {
      return { ...state, ...modifyFinanceOption(state, action.drive) };
    }
  ),
  on(
    FinanceActions.toggleFinanceType,
    (state, action): FinanceOption => {
      return {
        ...state,
        ...financeTypeChange(action.purchaseType, action.driveType),
      };
    }
  )
);
