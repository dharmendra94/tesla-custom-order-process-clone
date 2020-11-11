import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxTestComponent } from './ng-rx-test.component';

describe('NgRxTestComponent', () => {
  let component: NgRxTestComponent;
  let fixture: ComponentFixture<NgRxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
