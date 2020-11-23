import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorComponent } from './interior.component';

describe('InteriorComponent', () => {
  let component: InteriorComponent;
  let fixture: ComponentFixture<InteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
