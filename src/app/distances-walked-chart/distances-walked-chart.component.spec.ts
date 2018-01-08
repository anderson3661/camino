import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancesWalkedChartComponent } from './distances-walked-chart.component';

describe('DistancesWalkedChartComponent', () => {
  let component: DistancesWalkedChartComponent;
  let fixture: ComponentFixture<DistancesWalkedChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistancesWalkedChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancesWalkedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
