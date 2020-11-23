import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorPaintComponent } from './exterior-paint.component';

describe('ExteriorPaintComponent', () => {
  let component: ExteriorPaintComponent;
  let fixture: ComponentFixture<ExteriorPaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorPaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorPaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
