import { createAction, props } from '@ngrx/store';

export const togglePlaceOrderActivation = createAction(
  '[Account Component] Toggle Place Order Activation',
  props<{ isPlaceOrderActive: boolean }>()
);
