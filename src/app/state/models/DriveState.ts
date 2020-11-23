import { DriveTypes } from '../enums/drive-types';
import { CarState } from '../car';


export interface DriveState extends CarState {
  drive: DriveTypes;
  look: string;
  range: number;
  topSpeed: number;
  zeroToSixty: number;
}
