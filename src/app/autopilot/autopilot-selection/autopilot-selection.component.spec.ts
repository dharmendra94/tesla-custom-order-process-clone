import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopilotSelectionComponent } from './autopilot-selection.component';

describe('AutopilotSelectionComponent', () => {
  let component: AutopilotSelectionComponent;
  let fixture: ComponentFixture<AutopilotSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopilotSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopilotSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
