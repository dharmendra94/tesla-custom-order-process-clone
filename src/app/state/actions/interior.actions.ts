import { createAction, props } from '@ngrx/store';
import { Interior } from '../models/interior';

export const toggleInterior = createAction(
  '[InteriorCustomization Component] Toggle Interior',
  props<{ interior: Interior }>()
);
