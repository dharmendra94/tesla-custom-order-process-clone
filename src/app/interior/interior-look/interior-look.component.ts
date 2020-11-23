import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getInteriorLook } from '../../state/selectors/interior.selector';

@Component({
  selector: 'int-interior-look',
  templateUrl: './interior-look.component.html',
  styleUrls: ['./interior-look.component.scss'],
})
export class InteriorLookComponent implements OnInit {
  look$: Observable<string>;

  constructor(private store: Store<any>) {
    this.look$ = this.store.select(getInteriorLook);
  }

  ngOnInit(): void {}
}
