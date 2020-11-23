import { createReducer, on } from '@ngrx/store';
import { togglePlaceOrderActivation } from '../actions/place-order.actions';

const initialState = false;

export const placeOrderReducer = createReducer(
  initialState,
  on(togglePlaceOrderActivation, (state, action) => action.isPlaceOrderActive)
);
