import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOptionsComponent } from './purchase-options.component';

describe('PurchaseOptionsComponent', () => {
  let component: PurchaseOptionsComponent;
  let fixture: ComponentFixture<PurchaseOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
