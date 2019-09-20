import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RblComponent } from './rbl.component';

describe('RblComponent', () => {
  let component: RblComponent;
  let fixture: ComponentFixture<RblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
