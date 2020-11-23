import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorLookComponent } from './interior-look.component';

describe('InteriorLookComponent', () => {
  let component: InteriorLookComponent;
  let fixture: ComponentFixture<InteriorLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
