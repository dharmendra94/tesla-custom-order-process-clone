import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCarLookComponent } from './final-car-look.component';

describe('FinalCarLookComponent', () => {
  let component: FinalCarLookComponent;
  let fixture: ComponentFixture<FinalCarLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalCarLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCarLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
