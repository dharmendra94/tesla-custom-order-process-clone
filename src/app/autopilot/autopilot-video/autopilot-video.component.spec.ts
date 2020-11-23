import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopilotVideoComponent } from './autopilot-video.component';

describe('AutopilotVideoComponent', () => {
  let component: AutopilotVideoComponent;
  let fixture: ComponentFixture<AutopilotVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopilotVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopilotVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
