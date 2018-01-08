import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManWalkingComponent } from './man-walking.component';

describe('ManWalkingComponent', () => {
  let component: ManWalkingComponent;
  let fixture: ComponentFixture<ManWalkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManWalkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManWalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
