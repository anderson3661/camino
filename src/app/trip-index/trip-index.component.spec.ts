import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripindexComponent } from './tripindex.component';

describe('TripindexComponent', () => {
  let component: TripindexComponent;
  let fixture: ComponentFixture<TripindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
