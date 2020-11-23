import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorCustomizationComponent } from './interior-customization.component';

describe('InteriorCustomizationComponent', () => {
  let component: InteriorCustomizationComponent;
  let fixture: ComponentFixture<InteriorCustomizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorCustomizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
