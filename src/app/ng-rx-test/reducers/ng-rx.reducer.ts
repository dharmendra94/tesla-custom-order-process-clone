import { on, createReducer } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/ng-rx.actions';

export const initialState = { count: 0, action: 'Increment' };

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { count: state.count + 1, action: 'Increment' };
  }),
  on(decrement, (state) => {
    return { count: state.count - 1, action: 'Decrement' };
  }),
  on(reset, (state) => {
    return { count: 0, action: 'Reset' };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
