import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingMirrorComponent } from './driving-mirror.component';

describe('DrivingMirrorComponent', () => {
  let component: DrivingMirrorComponent;
  let fixture: ComponentFixture<DrivingMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingMirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
