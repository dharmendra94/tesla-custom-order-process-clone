import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceSummaryComponent } from './finance-summary.component';

describe('FinanceSummaryComponent', () => {
  let component: FinanceSummaryComponent;
  let fixture: ComponentFixture<FinanceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
