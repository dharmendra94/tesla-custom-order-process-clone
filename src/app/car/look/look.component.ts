import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCarLook } from 'src/app/state/selectors/car.selectors';

@Component({
  selector: 'car-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.scss'],
})
export class LookComponent implements OnInit {
  look: string;

  constructor(private store: Store<any>) {
    this.store.select(getCarLook).subscribe((look) =>  (this.look = look));
  }

  ngOnInit(): void {}
}
