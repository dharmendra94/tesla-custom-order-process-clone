import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCarLookState } from '../../state/selectors/car-look.selectors';

@Component({
  selector: 'car-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.scss'],
})
export class LookComponent implements OnInit {
  look: string;

  constructor(private store: Store<any>) {
    this.store.select(getCarLookState).subscribe((look) =>  (this.look = look));
  }

  ngOnInit(): void {}
}
