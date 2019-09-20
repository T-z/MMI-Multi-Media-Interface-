import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerOutsideComponent } from './speaker-outside.component';

describe('SpeakerOutsideComponent', () => {
  let component: SpeakerOutsideComponent;
  let fixture: ComponentFixture<SpeakerOutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerOutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
