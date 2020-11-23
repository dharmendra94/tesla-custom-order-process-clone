import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FinanceOption } from 'src/app/state/models/finance-option';
import { getFinanceOptions } from '../../state/selectors/finance-options.selectors';
import { FinanceType } from '../../state/enums/purchase-type';

@Component({
  selector: 'btmn-finance-summary',
  templateUrl: './finance-summary.component.html',
  styleUrls: ['./finance-summary.component.scss'],
})
export class FinanceSummaryComponent implements OnInit {
  financeSummary$: Observable<FinanceOption>;
  financeType = FinanceType;
  constructor(private store: Store<any>) {
    this.financeSummary$ = this.store.select(getFinanceOptions);
  }

  ngOnInit(): void {}
}
