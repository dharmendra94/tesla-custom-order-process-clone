import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { toggleFinanceType } from '../../state/actions/finance-actions.actions';
import { getFinanceSummary } from '../../state/selectors/finance-options.selectors';
import { DriveTypes } from 'src/app/state/enums/drive-types';
import { MatSelectChange } from '@angular/material/select';
import { FinanceOption } from '../../state/models/finance-option';
import { FinanceType } from 'src/app/state/enums/purchase-type';

@Component({
  selector: 'btmn-finance-type',
  templateUrl: './finance-type.component.html',
  styleUrls: ['./finance-type.component.scss']
})
export class FinanceTypeComponent implements OnInit {
  financeType = FinanceType;
  currentFinanceType: FinanceType;
  currentDriveType: DriveTypes;

  constructor(private store: Store<State<FinanceOption>>) {
    this.store.select(getFinanceSummary).subscribe((response) => {
      this.currentFinanceType = response.type;
      this.currentDriveType = response.drive;
    });
  }

  ngOnInit(): void {}

  onFinanceTypeChange(financeType: MatSelectChange): void {
    this.store.dispatch(
      toggleFinanceType({
        purchaseType: financeType.value,
        driveType: this.currentDriveType,
      })
    );
  }
}
