import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldStuffComponent } from './old-stuff.component';

describe('OldStuffComponent', () => {
  let component: OldStuffComponent;
  let fixture: ComponentFixture<OldStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
