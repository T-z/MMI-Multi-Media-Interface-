import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { SoftkeybandComponent } from './softkeyband.component';

describe('SoftkeybandComponent', () => {
  let component: SoftkeybandComponent;
  let fixture: ComponentFixture<SoftkeybandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftkeybandComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftkeybandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
