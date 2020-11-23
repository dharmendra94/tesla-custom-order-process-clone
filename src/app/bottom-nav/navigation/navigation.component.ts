import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isPlaceOrderActive } from '../../state/selectors/place-order.selectors';

@Component({
  selector: 'btmn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  routeMap: Map<string, string> = new Map([
    ['car', 'exterior'],
    ['exterior', 'interior'],
    ['interior', 'autopilot'],
    ['autopilot', 'payment'],
  ]);

  placeOrderActive$: Observable<boolean>;

  get buttonText(): string {
    return this.router.url.includes('payment') ? 'Place Order' : 'Next';
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {
    this.placeOrderActive$ = this.store.select(isPlaceOrderActive);
  }

  ngOnInit(): void {}

  routeTo(): void {
    const current = this.router.url.split('/')[2];
    const nextRoute = this.routeMap.get(current);
    this.router.navigate([nextRoute], { relativeTo: this.route });
  }
}
