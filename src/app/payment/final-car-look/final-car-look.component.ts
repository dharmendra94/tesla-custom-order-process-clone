import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCarLook } from '../../state/selectors/car.selectors';

@Component({
  selector: 'pay-final-car-look',
  templateUrl: './final-car-look.component.html',
  styleUrls: ['./final-car-look.component.scss']
})
export class FinalCarLookComponent implements OnInit {
  look$: Observable<string>;

  constructor(private store: Store<any>) {
    this.look$ = this.store.select(getCarLook);
   }

  ngOnInit(): void {
  }

}
