import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorLookComponent } from './exterior-look.component';

describe('ExteriorLookComponent', () => {
  let component: ExteriorLookComponent;
  let fixture: ComponentFixture<ExteriorLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
