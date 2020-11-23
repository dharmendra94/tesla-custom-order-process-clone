import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceTypeComponent } from './finance-type.component';

describe('FinanceTypeComponent', () => {
  let component: FinanceTypeComponent;
  let fixture: ComponentFixture<FinanceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
