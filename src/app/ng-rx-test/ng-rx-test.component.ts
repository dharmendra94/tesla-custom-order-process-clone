import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './actions/ng-rx.actions';

@Component({
  selector: 'app-ng-rx-test',
  templateUrl: './ng-rx-test.component.html',
  styleUrls: ['./ng-rx-test.component.scss'],
})
export class NgRxTestComponent implements OnInit {
  state$: Observable<{ count: number; state: string }>;

  constructor(
    private store: Store<{ state: { count: number; state: string } }>
  ) {
    this.state$ = store.select('state');
  }

  ngOnInit(): void {}

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}
