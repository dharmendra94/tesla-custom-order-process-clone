import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FinanceOption } from 'src/app/state/models/finance-option';
import {
  getFinanceOptions,
  getFinanceSummary,
} from '../../state/selectors/finance-options.selectors';
import { FinanceType } from '../../state/enums/purchase-type';
import { toggleFinanceType } from '../../state/actions/finance-actions.actions';
import { DriveTypes } from 'src/app/state/enums/drive-types';

@Component({
  selector: 'pay-purchase-options',
  templateUrl: './purchase-options.component.html',
  styleUrls: ['./purchase-options.component.scss'],
})
export class PurchaseOptionsComponent implements OnInit {
  financeSummary$: Observable<any>;
  financeType = FinanceType;

  constructor(private store: Store<any>) {
    this.financeSummary$ = this.store.select(getFinanceSummary);
  }

  ngOnInit(): void {}

  onTabChange = (
    selectedTabIndex: number,
    drive: DriveTypes
  ): void => {
    this.store.dispatch(
      toggleFinanceType({ purchaseType: selectedTabIndex + 1, driveType: drive })
    );
  }
}
