import { Paint } from './exterior-color';
import { Wheel } from './wheel';
import { CarState } from '../car';

export interface Exterior extends CarState {
  // look: string;
  color: Paint;
  wheels: Wheel;
}
