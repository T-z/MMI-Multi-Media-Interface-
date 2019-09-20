import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaSettingComponent } from './ela-setting.component';

describe('ElaSettingComponent', () => {
  let component: ElaSettingComponent;
  let fixture: ComponentFixture<ElaSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
