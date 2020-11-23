import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAutopilotState } from '../../state/selectors/autopilot.selectors';
import { Autopilot } from '../../state/models/autopilot';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { toggleAutopilotFullSelfDriving } from '../../state/actions/autopilot.actions';

@Component({
  selector: 'aut-autopilot-selection',
  templateUrl: './autopilot-selection.component.html',
  styleUrls: ['./autopilot-selection.component.scss'],
})
export class AutopilotSelectionComponent implements OnInit {
  autopilotState$: Observable<Autopilot>;

  constructor(private store: Store<any>) {
    this.autopilotState$ = this.store.select(getAutopilotState);
  }

  ngOnInit(): void {}

  onSelectionChange(val: MatCheckboxChange, currentState: Autopilot): void {
    this.store.dispatch(
      toggleAutopilotFullSelfDriving({
        autopilot: { ...currentState, isFullSelfDrivingIncluded: val.checked },
      })
    );
  }
}
