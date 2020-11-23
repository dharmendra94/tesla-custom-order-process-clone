import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Paint } from '../../state/models/exterior-color';
import { Exterior } from '../../state/models/exterior';
import {
  getExteriorPaintLook,
  getWheelType,
} from '../../state/selectors/exterior.selectors';

@Component({
  selector: 'ext-exterior-look',
  templateUrl: './exterior-look.component.html',
  styleUrls: ['./exterior-look.component.scss'],
})
export class ExteriorLookComponent implements OnInit {
  look$: Observable<string>;
  constructor(private store: Store<any>) {
    this.look$ = this.store.select(getExteriorPaintLook);
  }

  ngOnInit(): void {}
}
