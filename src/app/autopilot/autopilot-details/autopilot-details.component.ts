import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getAutopilotFeatures,
} from '../../state/selectors/autopilot.selectors';

@Component({
  selector: 'aut-autopilot-details',
  templateUrl: './autopilot-details.component.html',
  styleUrls: ['./autopilot-details.component.scss'],
})
export class AutopilotDetailsComponent implements OnInit {
  autopilotFeatures$: Observable<string[]>;

  constructor(private store: Store<any>) {
    this.autopilotFeatures$ = this.store.select(getAutopilotFeatures);
  }

  ngOnInit(): void {}
}
