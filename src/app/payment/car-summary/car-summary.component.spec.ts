import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSummaryComponent } from './car-summary.component';

describe('CarSummaryComponent', () => {
  let component: CarSummaryComponent;
  let fixture: ComponentFixture<CarSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
