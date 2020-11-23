import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorFeaturesComponent } from './interior-features.component';

describe('InteriorFeaturesComponent', () => {
  let component: InteriorFeaturesComponent;
  let fixture: ComponentFixture<InteriorFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
