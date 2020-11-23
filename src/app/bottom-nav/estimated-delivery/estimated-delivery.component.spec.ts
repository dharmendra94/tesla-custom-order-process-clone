import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedDeliveryComponent } from './estimated-delivery.component';

describe('EstimatedDeliveryComponent', () => {
  let component: EstimatedDeliveryComponent;
  let fixture: ComponentFixture<EstimatedDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
