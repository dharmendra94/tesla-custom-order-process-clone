import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Interior } from '../../state/models/interior';
import { interiors } from '../../state/constants/model3-assets';
import { getInterior } from '../../state/selectors/interior.selector';
import { toggleInterior } from '../../state/actions/interior.actions';

@Component({
  selector: 'int-interior-customization',
  templateUrl: './interior-customization.component.html',
  styleUrls: ['./interior-customization.component.scss'],
})
export class InteriorCustomizationComponent implements OnInit {
  availableInteriors: Interior[] = interiors;
  currentInterior: Interior;

  constructor(private store: Store<any>) {
    this.store
      .select(getInterior)
      .subscribe((interior) => (this.currentInterior = interior));
  }

  ngOnInit(): void {}

  toggleInterior(interior: Interior): void {
    this.store.dispatch(toggleInterior({ interior }));
  }
}
