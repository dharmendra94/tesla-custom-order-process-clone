import { DriveState } from './DriveState';
import { Exterior } from './exterior';
import { Interior } from './interior';
import { Autopilot } from './autopilot';

export interface CarSummary {
  drive: DriveState;
  exterior: Exterior;
  interior: Interior;
  autopilot: Autopilot;
}
