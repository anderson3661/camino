import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancesWalkedComponent } from './distances-walked.component';

describe('DistancesWalkedComponent', () => {
  let component: DistancesWalkedComponent;
  let fixture: ComponentFixture<DistancesWalkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistancesWalkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancesWalkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
