import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatusboxComponent} from './statusbox.component';

describe('StatusboxComponent', () => {
  let component: StatusboxComponent;
  let fixture: ComponentFixture<StatusboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusboxComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
