import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getInteriorFeatures } from '../../state/selectors/interior.selector';

@Component({
  selector: 'int-interior-features',
  templateUrl: './interior-features.component.html',
  styleUrls: ['./interior-features.component.scss'],
})
export class InteriorFeaturesComponent implements OnInit {
  interiorFeatures$: Observable<string[]>;

  constructor(private store: Store<any>) {
    this.interiorFeatures$ = this.store.select(getInteriorFeatures);
  }

  ngOnInit(): void {}
}
