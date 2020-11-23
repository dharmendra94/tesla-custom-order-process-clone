import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopilotDetailsComponent } from './autopilot-details.component';

describe('AutopilotDetailsComponent', () => {
  let component: AutopilotDetailsComponent;
  let fixture: ComponentFixture<AutopilotDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopilotDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopilotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
